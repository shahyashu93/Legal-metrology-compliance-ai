import { Router, type IRouter } from "express";
import {
  ExtractProductDetailsBody,
  ExtractProductDetailsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const EMPTY_DECLARATION = { value: "", confidence: 0 };
const DECLARATION_KEYS = [
  "net_quantity",
  "mrp",
  "manufacture_date",
  "best_before",
  "manufacturer",
  "packer",
  "importer",
  "country_of_origin",
  "consumer_care",
  "batch_number",
] as const;

type DeclarationKey = (typeof DECLARATION_KEYS)[number];

function normalizeExtraction(input: unknown) {
  const value =
    input && typeof input === "object"
      ? (input as Record<string, unknown>)
      : {};
  const rawDeclarations =
    value.declarations && typeof value.declarations === "object"
      ? (value.declarations as Record<string, unknown>)
      : {};

  const declarations = Object.fromEntries(
    DECLARATION_KEYS.map((key) => {
      const raw =
        rawDeclarations[key] && typeof rawDeclarations[key] === "object"
          ? (rawDeclarations[key] as Record<string, unknown>)
          : EMPTY_DECLARATION;
      const text = typeof raw.value === "string" ? raw.value.trim() : "";
      const numericConfidence =
        typeof raw.confidence === "number" ? raw.confidence : 0;
      return [
        key,
        {
          value: text,
          confidence: text
            ? Math.min(1, Math.max(0, numericConfidence))
            : 0,
        },
      ];
    }),
  ) as Record<DeclarationKey, { value: string; confidence: number }>;

  return {
    productName:
      typeof value.productName === "string" && value.productName.trim()
        ? value.productName.trim()
        : "Unidentified Product",
    declarations,
  };
}

router.post("/extract", async (req, res): Promise<void> => {
  const parsed = ExtractProductDetailsBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid extraction input");
    res.status(400).json({ error: "Please provide a valid product image." });
    return;
  }

  const match = parsed.data.imageDataUrl.match(
    /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/,
  );
  if (!match) {
    res.status(400).json({ error: "Unsupported or invalid image data." });
    return;
  }

  const [, mimeType, imageData] = match;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    req.log.error("GEMINI_API_KEY is not configured");
    res.status(502).json({ error: "Image extraction is not configured." });
    return;
  }

  try {
    const requestBody = JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Read only declarations visibly printed on this product package. Do not infer, autocomplete, translate, or invent text. Preserve the wording seen in the image. If a field is absent, obscured, or unreadable, return an empty value and confidence 0.

Return productName and these declarations:
- net_quantity: quantity with unit
- mrp: the complete printed MRP declaration
- manufacture_date: manufacture/packing month and year
- best_before: best-before/use-by/expiry declaration
- manufacturer: manufacturer name and full address
- packer: packer name and full address
- importer: importer name and full address
- country_of_origin: printed origin declaration
- consumer_care: consumer complaint phone/email/address
- batch_number: batch/lot/code

Confidence must measure confidence that the exact returned text is visibly legible, from 0 to 1. Return one JSON object with exactly this shape:
{"productName":"", "declarations":{"net_quantity":{"value":"","confidence":0},"mrp":{"value":"","confidence":0},"manufacture_date":{"value":"","confidence":0},"best_before":{"value":"","confidence":0},"manufacturer":{"value":"","confidence":0},"packer":{"value":"","confidence":0},"importer":{"value":"","confidence":0},"country_of_origin":{"value":"","confidence":0},"consumer_care":{"value":"","confidence":0},"batch_number":{"value":"","confidence":0}}}`,
            },
            {
              inlineData: {
                mimeType,
                data: imageData,
              },
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    let providerResponse: Response | undefined;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      providerResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          signal: AbortSignal.timeout(45_000),
          body: requestBody,
        },
      );
      if (
        providerResponse.ok ||
        (providerResponse.status !== 429 && providerResponse.status !== 503)
      ) {
        break;
      }
      await providerResponse.body?.cancel();
      await new Promise((resolve) =>
        setTimeout(resolve, 800 * (attempt + 1)),
      );
    }

    if (!providerResponse) {
      throw new Error("Gemini did not return a response");
    }

    if (!providerResponse.ok) {
      const providerError = await providerResponse.text();
      req.log.error(
        { status: providerResponse.status, providerError },
        "Gemini extraction failed",
      );
      res.status(502).json({
        error: "The image could not be analyzed. Please try a clearer image.",
      });
      return;
    }

    const providerJson = (await providerResponse.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };
    const responseText =
      providerJson.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) {
      throw new Error("Gemini returned no extraction content");
    }

    const result = normalizeExtraction(JSON.parse(responseText));
    res.json(ExtractProductDetailsResponse.parse(result));
  } catch (error) {
    req.log.error({ err: error }, "Product extraction failed");
    res.status(502).json({
      error: "The image could not be analyzed. Please try a clearer image.",
    });
  }
});

export default router;
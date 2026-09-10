---
name: Gemini package OCR model
description: Compatibility guidance for the image extraction provider used by package scanning.
---

Use a stable multimodal model returned by the API key's live model listing, and add bounded retries for temporary 429/503 capacity failures. Do not assume the newest advertised Interactions model is usable by this project.

**Why:** In September 2026, the provider rejected the former model for new users, then newer Interactions models accepted requests but did not return before timeout. A stable generate-content vision model completed the same request promptly.

**How to apply:** When changing the extraction model, query the key's available models without exposing the key, test one real image request with a short timeout, and retain deterministic compliance evaluation outside the model.
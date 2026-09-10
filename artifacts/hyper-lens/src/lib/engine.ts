import {
  Analysis,
  ComplianceCheck,
  ComplianceRule,
  DemoProduct,
  ExtractedField,
  Severity,
  Status,
} from './types';

export interface DetectedDeclaration {
  value: string;
  confidence: number;
  wasEdited?: boolean;
}

export type DetectedDeclarations = Record<string, DetectedDeclaration>;

const text = (value?: string) => value?.replace(/\s+/g, ' ').trim() ?? '';

export const DECLARATION_LABELS: Record<string, string> = {
  product_name: 'Common or Generic Product Name',
  net_quantity: 'Net Quantity',
  mrp: 'Retail Sale Price / MRP',
  manufacture_date: 'Month and Year of Manufacture / Packing',
  best_before: 'Best Before / Use By',
  manufacturer: 'Manufacturer Details',
  packer: 'Packer Details',
  importer: 'Importer Details',
  country_of_origin: 'Country of Origin',
  consumer_care: 'Consumer Complaint Contact',
  batch_number: 'Batch / Lot Number',
};

const statusFromFormat = (
  value: string,
  valid: RegExp,
  partial?: RegExp,
): Status => {
  if (!value) return 'missing';
  if (valid.test(value)) return 'compliant';
  if (partial?.test(value)) return 'warning';
  return 'needs-verification';
};

export const COMPLIANCE_RULES: ComplianceRule[] = [
  {
    id: 'LM-001',
    field: 'manufacturer',
    title: 'Manufacturer / Packer / Importer Details',
    description:
      'The package should identify the responsible manufacturer, packer, or importer with a usable postal address.',
    required: true,
    severity: 'critical',
    getValue: (values) =>
      text(values.manufacturer?.value) ||
      text(values.packer?.value) ||
      text(values.importer?.value),
    validation: (value) => {
      if (!value) return 'missing';
      const hasPostalCode = /\b[1-9][0-9]{5}\b/.test(value);
      const hasAddressDetail =
        /\b(road|rd|street|st|area|sector|phase|district|city|state|india|plot|industrial|village|taluk|p\.?o\.?)\b/i.test(
          value,
        );
      return value.length >= 24 && (hasPostalCode || hasAddressDetail)
        ? 'compliant'
        : 'warning';
    },
    recommendation:
      'Verify the complete name and postal address of the responsible manufacturer, packer, or importer.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(a)',
  },
  {
    id: 'LM-002',
    field: 'product_name',
    title: 'Common or Generic Product Name',
    description:
      'The package should state the common or generic name of the commodity.',
    required: true,
    severity: 'high',
    validation: (value) =>
      !value
        ? 'missing'
        : value.toLowerCase() === 'unidentified product' || value.length < 3
          ? 'needs-verification'
          : 'compliant',
    recommendation:
      'Add a clear common or generic name that identifies the packaged commodity.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(b)',
  },
  {
    id: 'LM-003',
    field: 'net_quantity',
    title: 'Net Quantity',
    description:
      'Net quantity should include a numeric amount and a recognized unit of weight, measure, or count.',
    required: true,
    severity: 'critical',
    validation: (value) =>
      statusFromFormat(
        value,
        /^(?:(?:net|netto)\s*(?:wt\.?|weight|qty\.?|quantity)?\s*[:\-]?\s*)?\d+(?:[.,]\d+)?\s*(?:mg|g|kg|ml|cl|l|cm|m|mm|pieces?|pcs?|nos?\.?|n)\b/i,
        /\d/,
      ),
    recommendation:
      'State the net quantity with a numeric amount and the applicable standard unit, for example “Net Qty. 500 g”.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(c)',
  },
  {
    id: 'LM-004',
    field: 'manufacture_date',
    title: 'Month and Year of Manufacture / Packing',
    description:
      'The package should carry a legible month and year of manufacture, pre-packing, or import as applicable.',
    required: true,
    severity: 'high',
    validation: (value) => {
      if (!value) return 'missing';
      const hasYear = /\b(?:19|20)\d{2}\b/.test(value);
      const hasMonth =
        /\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?|0?[1-9]|1[0-2])\b/i.test(
          value,
        );
      return hasYear && hasMonth ? 'compliant' : 'warning';
    },
    recommendation:
      'Verify that a clear month and four-digit year of manufacture or packing is printed.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(d)',
  },
  {
    id: 'LM-005',
    field: 'mrp',
    title: 'Retail Sale Price / MRP',
    description:
      'The retail sale price should be clearly identified and include a currency amount.',
    required: true,
    severity: 'critical',
    validation: (value) => {
      if (!value) return 'missing';
      const hasLabel = /\b(?:mrp|maximum retail price|retail sale price)\b/i.test(
        value,
      );
      const hasAmount =
        /(?:₹|rs\.?|inr)\s*[:\-]?\s*\d+(?:[.,]\d{1,2})?/i.test(value);
      if (hasLabel && hasAmount) return 'compliant';
      if (hasAmount || /\d+(?:[.,]\d{1,2})?/.test(value)) return 'warning';
      return 'needs-verification';
    },
    recommendation:
      'Print a clearly labelled MRP or retail sale price with the rupee amount and verify the applicable tax wording.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(e)',
  },
  {
    id: 'LM-006',
    field: 'consumer_care',
    title: 'Consumer Complaint Contact',
    description:
      'The package should provide contact details for consumer complaints.',
    required: true,
    severity: 'high',
    validation: (value) => {
      if (!value) return 'missing';
      const hasEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(
        value,
      );
      const hasPhone = /(?:\+?91[\s-]?)?[6-9]\d{9}|1800[\s-]?\d{3}[\s-]?\d{4}/.test(
        value.replace(/[()]/g, ''),
      );
      if (hasEmail && hasPhone) return 'compliant';
      if (hasEmail || hasPhone) return 'warning';
      return 'needs-verification';
    },
    recommendation:
      'Verify the consumer complaint contact details and include a legible phone number and email or postal contact.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(2)',
  },
  {
    id: 'LM-007',
    field: 'country_of_origin',
    title: 'Country of Origin for Imported Product',
    description:
      'Country of origin is checked when importer details or an origin declaration indicate that the package is imported.',
    required: false,
    appliesWhen: (values) =>
      Boolean(text(values.importer?.value) || text(values.country_of_origin?.value)),
    severity: 'high',
    validation: (value) =>
      !value
        ? 'missing'
        : /\b(?:country of origin|made in|product of|origin)\b/i.test(value)
          ? 'compliant'
          : 'warning',
    recommendation:
      'For an imported package, verify that the country-of-origin declaration is clear and complete.',
    sourceReference:
      'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6(1)(aa)',
  },
];

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'dp-1',
    name: 'FreshBite Premium Atta',
    imageColor: 'bg-amber-100',
    mockExtractedFields: {
      net_quantity: 'Net Qty. 5 kg',
      mrp: 'MRP ₹250.00 (inclusive of all taxes)',
      manufacture_date: 'Packed: September 2026',
      best_before: 'Best before 3 months from packing',
      manufacturer:
        'FreshBite Mills Ltd, 12 Industrial Area, Phase 1, New Delhi 110020',
      packer: '',
      importer: '',
      country_of_origin: '',
      consumer_care:
        'Consumer Care: 1800-123-4567, care@freshbite.com, New Delhi 110020',
      batch_number: 'FB-0926-A17',
    },
  },
  {
    id: 'dp-2',
    name: 'NutriMix Protein Bar',
    imageColor: 'bg-stone-800 text-white',
    mockExtractedFields: {
      net_quantity: '50 g',
      mrp: '₹80.00',
      manufacture_date: '09/2026',
      best_before: '12 months',
      manufacturer: 'NutriMix Foods, Mumbai',
      packer: '',
      importer: '',
      country_of_origin: '',
      consumer_care: 'care@nutrimix.in',
      batch_number: 'NM-28',
    },
  },
  {
    id: 'dp-3',
    name: 'DailyFresh Snack Pack',
    imageColor: 'bg-red-100',
    mockExtractedFields: {
      net_quantity: '200',
      mrp: '150',
      manufacture_date: '',
      best_before: '',
      manufacturer: 'Sector 4, Noida',
      packer: '',
      importer: '',
      country_of_origin: '',
      consumer_care: '',
      batch_number: '',
    },
  },
];

const severityWeight: Record<Severity, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

const statusCredit: Record<Status, number> = {
  compliant: 1,
  warning: 0.6,
  'needs-verification': 0.25,
  missing: 0,
};

function fromLegacyMap(values: Record<string, string>): DetectedDeclarations {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      { value: text(value), confidence: value ? 0.99 : 0 },
    ]),
  );
}

export class ComplianceEngine {
  static analyze(
    productName: string,
    image: string,
    input: DetectedDeclarations | Record<string, string>,
  ): Analysis {
    const firstValue = Object.values(input)[0];
    const declarations =
      typeof firstValue === 'string'
        ? fromLegacyMap(input as Record<string, string>)
        : (input as DetectedDeclarations);
    const allValues: DetectedDeclarations = {
      ...declarations,
      product_name: {
        value: text(productName),
        confidence:
          productName && productName !== 'Unidentified Product' ? 0.95 : 0,
      },
    };

    const checks: ComplianceCheck[] = [];
    const fields: ExtractedField[] = [];
    let earned = 0;
    let possible = 0;

    for (const rule of COMPLIANCE_RULES) {
      if (rule.appliesWhen && !rule.appliesWhen(allValues)) continue;

      const declaration = allValues[rule.field] ?? {
        value: '',
        confidence: 0,
      };
      const value = rule.getValue
        ? rule.getValue(allValues)
        : text(declaration.value);
      const contributingDeclarations =
        rule.id === 'LM-001'
          ? [
              allValues.manufacturer,
              allValues.packer,
              allValues.importer,
            ].filter((item) => item?.value)
          : [declaration];
      const confidence = contributingDeclarations.length
        ? Math.max(...contributingDeclarations.map((item) => item.confidence))
        : 0;

      let status = rule.validation(value, allValues);
      const wasEdited =
        rule.id === 'LM-001'
          ? contributingDeclarations.some((item) => item.wasEdited)
          : declaration.wasEdited;
      if (value && confidence > 0 && confidence < 0.55 && !wasEdited) {
        status = 'needs-verification';
      }

      const weight = severityWeight[rule.severity];
      possible += weight;
      earned += weight * statusCredit[status];

      checks.push({
        ruleId: rule.id,
        requirement: rule.title,
        detectedValue: value || null,
        confidence,
        status,
        severity: rule.severity,
        recommendation: rule.recommendation,
        sourceReference: rule.sourceReference,
      });
    }

    for (const [key, declaration] of Object.entries(allValues)) {
      const relatedCheck =
        key === 'manufacturer' || key === 'packer' || key === 'importer'
          ? checks.find((check) => check.ruleId === 'LM-001')
          : checks.find(
              (check) =>
                COMPLIANCE_RULES.find((rule) => rule.id === check.ruleId)
                  ?.field === key,
            );
      fields.push({
        id: `field-${key.replaceAll('_', '-')}`,
        key,
        label: DECLARATION_LABELS[key] ?? key.replaceAll('_', ' '),
        value: text(declaration.value),
        confidence: declaration.confidence,
        status:
          declaration.value && relatedCheck
            ? relatedCheck.status
            : declaration.value
              ? 'compliant'
              : 'missing',
      });
    }

    const score = possible ? Math.round((earned / possible) * 100) : 0;
    const criticalMissing = checks.some(
      (check) =>
        check.severity === 'critical' &&
        (check.status === 'missing' ||
          check.status === 'needs-verification'),
    );
    const highMissing = checks.some(
      (check) => check.severity === 'high' && check.status === 'missing',
    );
    const hasReviewItems = checks.some(
      (check) => check.status !== 'compliant',
    );

    const overallStatus: Status =
      criticalMissing || highMissing || score < 65
        ? 'missing'
        : hasReviewItems || score < 90
          ? 'warning'
          : 'compliant';

    const passed = checks.filter(
      (check) => check.status === 'compliant',
    ).length;
    const missing = checks.filter((check) => check.status === 'missing').length;
    const verify = checks.filter(
      (check) =>
        check.status === 'warning' ||
        check.status === 'needs-verification',
    ).length;
    const summary =
      overallStatus === 'compliant'
        ? `${passed} of ${checks.length} applicable preliminary checks passed. No missing mandatory declaration was detected in the supplied image.`
        : `${passed} of ${checks.length} applicable checks passed; ${missing} declaration${missing === 1 ? '' : 's'} were not detected and ${verify} require verification. Review the original package because OCR and image quality can affect this assessment.`;

    return {
      assessmentId: `HL-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
      productName: text(productName) || 'Unidentified Product',
      image,
      timestamp: Date.now(),
      fields,
      checks,
      score,
      overallStatus,
      summary,
    };
  }
}
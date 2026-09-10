import { ComplianceRule, ComplianceCheck, ExtractedField, Status, Analysis, DemoProduct } from './types';

export const COMPLIANCE_RULES: ComplianceRule[] = [
  {
    id: 'CR-001',
    field: 'net_weight',
    title: 'Net Quantity Declaration',
    description: 'Must declare net quantity in standard units (g, kg, ml, L). Must be prominent and parallel to base.',
    required: true,
    severity: 'critical',
    validation: (val) => {
      if (!val) return 'missing';
      if (/^[0-9]+(\.[0-9]+)?\s*(g|kg|ml|L|mg|oz)$/i.test(val)) return 'compliant';
      return 'warning';
    },
    recommendation: 'Ensure net weight includes standard metric units with a space between number and unit.',
    sourceReference: 'Legal Metrology (Packaged Commodities) Rules, Rule 6(1)(c)'
  },
  {
    id: 'CR-002',
    field: 'mrp',
    title: 'Maximum Retail Price (MRP)',
    description: 'Must be explicitly labeled as "MRP" followed by currency symbol and amount, inclusive of all taxes.',
    required: true,
    severity: 'critical',
    validation: (val) => {
      if (!val) return 'missing';
      if (/MRP\s*(Rs\.?|₹)\s*[0-9]+(\.[0-9]{2})?\s*\(incl.*?taxes\)/i.test(val)) return 'compliant';
      if (/(Rs\.?|₹)\s*[0-9]+(\.[0-9]{2})?/.test(val)) return 'warning';
      return 'needs-verification';
    },
    recommendation: 'Format as "MRP ₹XX.XX (incl. of all taxes)".',
    sourceReference: 'Rule 6(1)(e)'
  },
  {
    id: 'CR-003',
    field: 'expiry_date',
    title: 'Use By / Expiry Date',
    description: 'Required for food and perishable items. Format should be unambiguous.',
    required: true,
    severity: 'high',
    validation: (val) => {
      if (!val) return 'missing';
      if (val.length > 5) return 'compliant';
      return 'warning';
    },
    recommendation: 'Add clear "Use by" or "Expiry Date" marking.',
    sourceReference: 'Food Safety and Standards (Packaging and Labelling) Regulations'
  },
  {
    id: 'CR-004',
    field: 'manufacturer_address',
    title: 'Manufacturer Details',
    description: 'Complete name and address of the manufacturer or packer must be present.',
    required: true,
    severity: 'high',
    validation: (val) => {
      if (!val) return 'missing';
      if (val.length > 20) return 'compliant';
      return 'warning';
    },
    recommendation: 'Provide complete registered address including PIN code.',
    sourceReference: 'Rule 6(1)(a)'
  },
  {
    id: 'CR-005',
    field: 'customer_care',
    title: 'Consumer Care Details',
    description: 'Must include phone number, email, and address for consumer complaints.',
    required: true,
    severity: 'medium',
    validation: (val) => {
      if (!val) return 'missing';
      const hasEmail = /@/.test(val);
      const hasPhone = /[0-9]{8,}/.test(val);
      if (hasEmail && hasPhone) return 'compliant';
      return 'warning';
    },
    recommendation: 'Include both an email address and a toll-free/contact number.',
    sourceReference: 'Rule 6(1)(m)'
  },
  {
    id: 'CR-006',
    field: 'vegetarian_mark',
    title: 'Vegetarian / Non-Vegetarian Mark',
    description: 'Appropriate color-coded symbol indicating veg (green dot) or non-veg (brown triangle).',
    required: false,
    severity: 'critical',
    validation: (val) => {
      if (!val || val.toLowerCase() === 'none') return 'missing';
      return 'compliant';
    },
    recommendation: 'Ensure standard green dot in green square is distinctly visible on principal display panel.',
    sourceReference: 'FSSAI Labelling Requirements'
  }
];

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'dp-1',
    name: 'FreshBite Premium Atta',
    targetScore: 96,
    overallStatus: 'compliant',
    imageColor: 'bg-amber-100',
    mockExtractedFields: {
      net_weight: '5 kg',
      mrp: 'MRP ₹250.00 (incl. of all taxes)',
      expiry_date: 'Best before 3 months from packaging',
      manufacturer_address: 'FreshBite Mills Ltd, 12 Industrial Area, Phase 1, New Delhi 110020',
      customer_care: 'Call: 1800-123-4567 | Email: care@freshbite.com',
      vegetarian_mark: 'Present (Green)'
    }
  },
  {
    id: 'dp-2',
    name: 'NutriMix Protein Bar',
    targetScore: 78,
    overallStatus: 'warning',
    imageColor: 'bg-stone-800 text-white',
    mockExtractedFields: {
      net_weight: '50g',
      mrp: '₹80.00', // Missing 'MRP' and 'incl taxes'
      expiry_date: '12/25', // Ambiguous
      manufacturer_address: 'NutriMix, Mumbai', // Too short
      customer_care: 'care@nutrimix.in', // Missing phone
      vegetarian_mark: 'Present (Green)'
    }
  },
  {
    id: 'dp-3',
    name: 'DailyFresh Snack Pack',
    targetScore: 51,
    overallStatus: 'missing',
    imageColor: 'bg-red-100',
    mockExtractedFields: {
      net_weight: '200', // Missing unit
      mrp: '150', // Missing currency and context
      // expiry_date missing
      manufacturer_address: 'Sector 4, Noida',
      // customer care missing
      vegetarian_mark: 'None'
    }
  }
];

export class ComplianceEngine {
  static analyze(productName: string, image: string, extractedMap: Record<string, string>): Analysis {
    const fields: ExtractedField[] = [];
    const checks: ComplianceCheck[] = [];
    
    let totalScore = 0;
    let maxScore = 0;

    COMPLIANCE_RULES.forEach((rule) => {
      const extractedValue = extractedMap[rule.field] || '';
      const status = rule.validation(extractedValue);
      
      const confidences: Record<Status, number> = {
        'compliant': 0.95,
        'warning': 0.82,
        'missing': 0.99,
        'needs-verification': 0.65
      };

      const fieldStatus = extractedValue ? status : 'missing';
      
      fields.push({
        id: `field_${Math.random().toString(36).substr(2, 9)}`,
        key: rule.field,
        label: rule.title,
        value: extractedValue || '[Not Detected]',
        confidence: confidences[fieldStatus],
        status: fieldStatus,
        boundingBox: { x: Math.random()*80, y: Math.random()*80, w: 20, h: 10 }
      });

      checks.push({
        ruleId: rule.id,
        requirement: rule.title,
        detectedValue: extractedValue || null,
        confidence: confidences[fieldStatus],
        status: fieldStatus,
        severity: rule.severity,
        recommendation: rule.recommendation
      });

      // Score calculation logic
      let weight = 1;
      if (rule.severity === 'critical') weight = 3;
      if (rule.severity === 'high') weight = 2;

      maxScore += weight;
      if (status === 'compliant') totalScore += weight;
      else if (status === 'warning') totalScore += (weight * 0.5);
    });

    const score = Math.round((totalScore / maxScore) * 100);
    
    let overallStatus: Status = 'compliant';
    if (score < 60 || checks.some(c => c.status === 'missing' && c.severity === 'critical')) {
      overallStatus = 'missing';
    } else if (score < 90 || checks.some(c => c.status !== 'compliant')) {
      overallStatus = 'warning';
    }

    let summary = '';
    if (overallStatus === 'compliant') {
      summary = 'The packaging meets all core Legal Metrology and FSSAI requirements analyzed. All mandatory fields are present and correctly formatted.';
    } else if (overallStatus === 'warning') {
      summary = 'Several compliance warnings detected. Primarily related to incomplete formatting of mandatory fields like MRP or manufacturer address. Immediate remediation recommended to avoid penalties.';
    } else {
      summary = 'CRITICAL NON-COMPLIANCE. Essential declarations are missing or severely malformed. Distributing this product risks significant regulatory action, fines, or seizure under the Legal Metrology Act.';
    }

    return {
      assessmentId: `HL-${Date.now().toString().slice(-6)}-${Math.floor(Math.random()*1000)}`,
      productName,
      image,
      timestamp: Date.now(),
      fields,
      checks,
      score,
      overallStatus,
      summary
    };
  }
}

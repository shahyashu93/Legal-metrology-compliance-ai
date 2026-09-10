export type Status = 'compliant' | 'warning' | 'missing' | 'needs-verification';
export type Severity = 'low' | 'medium' | 'high' | 'critical';

export interface ExtractedField {
  id: string;
  key: string;
  label: string;
  value: string;
  confidence: number;
  status: Status;
  boundingBox?: { x: number; y: number; w: number; h: number };
}

export interface ComplianceRule {
  id: string;
  field: string;
  title: string;
  description: string;
  required: boolean;
  severity: Severity;
  validation: (value: string | undefined) => Status;
  recommendation: string;
  sourceReference: string;
}

export interface ComplianceCheck {
  ruleId: string;
  requirement: string;
  detectedValue: string | null;
  confidence: number;
  status: Status;
  severity: Severity;
  recommendation: string;
}

export interface Analysis {
  assessmentId: string;
  productName: string;
  image: string;
  timestamp: number;
  fields: ExtractedField[];
  checks: ComplianceCheck[];
  score: number;
  overallStatus: Status;
  summary: string;
}

export interface DemoProduct {
  id: string;
  name: string;
  targetScore: number;
  overallStatus: Status;
  imageColor: string;
  mockExtractedFields: Partial<Record<string, string>>;
}

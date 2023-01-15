export interface Step {
  id: string;
  description: string;
  complete: boolean;
}

export type LeaseType = 'FINANCIAL_AND_OPERATIONAL' | 'SALE_AND_LEASEBACK';

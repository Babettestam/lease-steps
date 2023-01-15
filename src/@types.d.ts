export type StepId =
  | 'MACHINE_DATA'
  | 'RENTAL'
  | 'LEASE_DETAIL'
  | 'MILAGE'
  | 'SUPPLIER'
  | 'VAT_FINANCING';

export interface Step {
  id: StepId;
  description: string;
}

export type LeaseType = 'FINANCIAL' | 'OPERATIONAL' | 'SALE_AND_LEASEBACK';

export type ConditionType = 'USED' | 'NEW';

export interface MachineForm {
  brand: string;
  model: string;
  buildYear: string;
  condition: ConditionType;
  value: number;
  leaseType: LeaseType;
}
export interface CustomGlobalState {
  MACHINE: MachineForm;
}

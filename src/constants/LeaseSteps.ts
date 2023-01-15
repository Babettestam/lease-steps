import { Step } from '@types';

const machineDataStep: Step = {
  id: 'MACHINE_DATA',
  description: 'Kloppen de gegevens nog?',
};

const rentalStep: Step = {
  id: 'RENTAL',
  description: '...',
};

const leaseDetailStep: Step = {
  id: 'LEASE_DETAIL',
  description: '...',
};

export const milageStep: Step = {
  id: 'MILAGE',
  description: '...',
};

// Financial and operational leases
export const FINANCIAL_AND_OPERATIONAL_STEPS: Step[] = [
  machineDataStep,
  {
    id: 'SUPPLIER',
    description: '...',
  },
  rentalStep,
  leaseDetailStep,
  {
    id: 'VAT_FINANCING',
    description: '...',
  },
];

// Sale & leaseback-leases
export const SALE_AND_LEASEBACK_STEPS: Step[] = [machineDataStep, rentalStep, leaseDetailStep];

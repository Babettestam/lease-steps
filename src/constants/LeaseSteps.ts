import { Step } from '@types';

const machineDataStep: Step = {
  id: 'MACHINE_DATA',
  description: 'Kloppen de gegevens nog?',
  complete: false,
};

const rentalStep: Step = {
  id: 'RENTAL',
  description: '...',
  complete: false,
};

const leaseDetailStep: Step = {
  id: 'LEASE_DETAIL',
  description: '...',
  complete: false,
};

export const milageStep: Step = {
  id: 'MILAGE',
  description: '...',
  complete: false,
};

// Financial and operational leases
export const FINANCIAL_AND_OPERATIONAL_STEPS: Step[] = [
  machineDataStep,
  {
    id: 'SUPPLIER',
    description: '...',
    complete: false,
  },
  rentalStep,
  leaseDetailStep,
  {
    id: 'VAT_FINANCING',
    description: '...',
    complete: false,
  },
];

// Sale & leaseback-leases
export const SALE_AND_LEASEBACK_STEPS: Step[] = [machineDataStep, rentalStep, leaseDetailStep];

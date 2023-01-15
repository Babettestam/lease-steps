import { Step } from '@types';

const machineDataStep: Step = {
  id: 'machine_data',
  description: 'Kloppen de gegevens nog?',
  complete: false,
};

const rentalStep: Step = {
  id: 'rental',
  description: '...',
  complete: false,
};

const leaseDetailStep: Step = {
  id: 'lease_details',
  description: '...',
  complete: false,
};

export const milageStep: Step = {
  id: 'milage',
  description: '...',
  complete: false,
};

// Financial and operational leases
export const FINANCIAL_AND_OPERATIONAL_STEPS: Step[] = [
  machineDataStep,
  {
    id: 'supplier',
    description: '...',
    complete: false,
  },
  rentalStep,
  leaseDetailStep,
  {
    id: 'vat_financing',
    description: '...',
    complete: false,
  },
];

// Sale & leaseback-leases
export const SALE_AND_LEASEBACK_STEPS: Step[] = [machineDataStep, rentalStep, leaseDetailStep];

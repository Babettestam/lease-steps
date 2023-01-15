import { CustomGlobalState, MachineForm } from '@types';

export const MACHINE_DEFAULT_VALUES: MachineForm = {
  brand: 'Scania',
  model: 'R730',
  buildYear: String(new Date().getFullYear()),
  condition: 'USED',
  value: 0,
  leaseType: 'FINANCIAL',
};

export const INITIAL_FORMS: CustomGlobalState = {
  MACHINE: MACHINE_DEFAULT_VALUES,
};

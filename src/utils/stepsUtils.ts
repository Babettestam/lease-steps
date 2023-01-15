import { LeaseType, Step } from '@types';
import { FINANCIAL_AND_OPERATIONAL_STEPS, SALE_AND_LEASEBACK_STEPS } from 'constants/LeaseSteps';

export const getStepsBasedOnType = (leaseType?: LeaseType): Step[] => {
  if (leaseType === 'FINANCIAL_AND_OPERATIONAL') {
    return FINANCIAL_AND_OPERATIONAL_STEPS;
  } else if (leaseType === 'SALE_AND_LEASEBACK') {
    return SALE_AND_LEASEBACK_STEPS;
  }
  return [];
};

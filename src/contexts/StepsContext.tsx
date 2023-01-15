import { Step, LeaseType } from '@types';
import React, { ReactElement, createContext, useEffect, useState, useMemo } from 'react';
import { getStepsBasedOnType } from 'utils/stepsUtils';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export interface StepsContextValues {
  steps: Step[];
  activeStepIndex: number;
  activeStep?: Step;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  leaseType?: LeaseType;
  setLeaseType: React.Dispatch<React.SetStateAction<LeaseType | undefined>>;
}

const StepsContext = createContext<StepsContextValues>({
  steps: [],
  activeStepIndex: 0,
  activeStep: undefined,
  goToPreviousStep: () => console.warn('Provider not implemented'),
  goToNextStep: () => console.warn('Provider not implemented'),
  leaseType: 'FINANCIAL',
  setLeaseType: () => console.warn('Provider not implemented'),
});

const StepsProvider = ({ children }: Props): ReactElement => {
  const [leaseType, setLeaseType] = useState<LeaseType | undefined>('FINANCIAL');
  const [steps, setSteps] = useState<Step[]>(() => getStepsBasedOnType(leaseType));
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = useMemo<Step | undefined>(
    () => steps[activeStepIndex],
    [steps, activeStepIndex]
  );

  useEffect(() => {
    setActiveStepIndex(0);
    setSteps(getStepsBasedOnType(leaseType));
  }, [leaseType]);

  const goToPreviousStep = (): void => changeStep(activeStepIndex - 1);
  const goToNextStep = (): void => changeStep(activeStepIndex + 1);
  const changeStep = (newStepIndex: number): void => {
    const hasAnotherStep = steps[newStepIndex] !== undefined;
    if (newStepIndex >= 0 && hasAnotherStep) {
      setActiveStepIndex(newStepIndex);
    }
  };

  return (
    <StepsContext.Provider
      value={{
        steps,
        activeStepIndex,
        activeStep,
        goToPreviousStep,
        goToNextStep,
        leaseType,
        setLeaseType,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export { StepsProvider };

export default StepsContext;

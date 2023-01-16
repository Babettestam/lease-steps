import { Step } from '@types';
import React, { ReactElement, createContext, useState, useMemo } from 'react';
import { getStepsBasedOnType } from 'utils/stepsUtils';
import { useStateMachine } from 'little-state-machine';
import { milageStep } from 'constants/LeaseSteps';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export interface StepsContextValues {
  steps: Step[];
  activeStepIndex: number;
  activeStep?: Step;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  goToStep: ({ stepId }: { stepId: string }) => void;
  resetStep: () => void;
}

const StepsContext = createContext<StepsContextValues>({
  steps: [],
  activeStepIndex: 0,
  activeStep: undefined,
  goToPreviousStep: () => console.warn('Provider not implemented'),
  goToNextStep: () => console.warn('Provider not implemented'),
  goToStep: () => console.warn('Provider not implemented'),
  resetStep: () => console.warn('Provider not implemented'),
});

const StepsProvider = ({ children }: Props): ReactElement => {
  const { state } = useStateMachine();
  const steps = useMemo<Step[]>(() => {
    const stepsBase = getStepsBasedOnType(state.MACHINE.leaseType);

    if (state.MACHINE.condition === 'USED') {
      // When machine condition is USED we need an additional step: milage
      return [...stepsBase, milageStep];
    }

    return stepsBase;
  }, [state, state.MACHINE.leaseType, state.MACHINE.condition]);

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = useMemo<Step | undefined>(
    () => steps[activeStepIndex],
    [steps, activeStepIndex]
  );

  const goToPreviousStep = (): void => changeStep(activeStepIndex - 1);
  const goToNextStep = (): void => changeStep(activeStepIndex + 1);
  const resetStep = (): void => setActiveStepIndex(0);
  const goToStep = ({ stepId }: { stepId: string }): void => {
    const stepIndex = steps.findIndex(({ id }): boolean => id === stepId);
    changeStep(stepIndex);
  };
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
        goToStep,
        resetStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export { StepsProvider };

export default StepsContext;

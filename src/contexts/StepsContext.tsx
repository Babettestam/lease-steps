import { Step, LeaseType } from '@types';
import React, {
  ReactElement,
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { getStepsBasedOnType } from 'utils/stepsUtils';

interface Props {
  leaseType?: LeaseType;
}

export interface StepsContextValues {
  steps: Step[];
  activeStepIndex: number;
  activeStep?: Step;
}

const StepsContext = createContext<StepsContextValues>({
  steps: [],
  activeStepIndex: 0,
  activeStep: undefined,
});

const StepsProvider = ({ children, leaseType }: PropsWithChildren<Props>): ReactElement => {
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

  return (
    <StepsContext.Provider
      value={{
        steps,
        activeStepIndex,
        activeStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export { StepsProvider };

export default StepsContext;

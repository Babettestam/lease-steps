import { useContext } from 'react';
import StepsContext, { StepsContextValues } from 'contexts/StepsContext';

const useStepsContext = (): StepsContextValues => {
  return useContext(StepsContext);
};

export default useStepsContext;

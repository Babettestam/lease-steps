import { Step } from '@types';
import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

const Container = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

const SingleIndicator = styled.div<{ active: boolean }>`
  background: ${(props): string => (props.active ? '#b8babd' : '#e5e6e7')};
  height: 0.25rem;
  width: 100%;
  border-radius: 0.5rem;
`;

interface Props {
  steps: Step[];
  activeStepIndex: number;
}

const StepIndicator: React.FC<Props> = ({ steps, activeStepIndex }) => {
  return (
    <Container>
      {steps.map(({ id }, index) => {
        const isActive = index === activeStepIndex;

        return <SingleIndicator key={id} active={isActive} />;
      })}
    </Container>
  );
};

export default StepIndicator;

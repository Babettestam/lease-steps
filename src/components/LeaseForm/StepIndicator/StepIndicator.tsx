import { Step } from '@types';
import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

const Container = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

const SingleIndicator = styled.div<{ active: boolean }>`
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    height: 0.25rem;
    width: 100%;
    background: ${(props): string => (props.active ? '#b8babd' : '#e5e6e7')};
    border-radius: 0.5rem;
  }
`;

interface Props {
  steps: Step[];
  activeStepIndex: number;
  onStepClick: ({ stepId }: { stepId: string }) => void;
}

const StepIndicator: React.FC<Props> = ({ steps, activeStepIndex, onStepClick }) => {
  return (
    <Container>
      {steps.map(({ id }, index) => {
        const isActive = index === activeStepIndex;
        const onClick = (): void => onStepClick({ stepId: id });

        return (
          <SingleIndicator
            key={id}
            active={isActive}
            onClick={onClick}
            data-testid="single-indicator"
          />
        );
      })}
    </Container>
  );
};

export default StepIndicator;

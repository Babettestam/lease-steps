import React from 'react';
import { Step } from '@types';
import StepIndicator from 'components/LeaseForm/StepIndicator/StepIndicator';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const stepsMock: Step[] = [
  { id: 'MACHINE_DATA', description: '...' },
  { id: 'LEASE_DETAIL', description: '...' },
  { id: 'MILAGE', description: '...' },
];

const mockStepClick = jest.fn();

describe('StepIndicator test', () => {
  beforeEach(() => {
    render(<StepIndicator steps={stepsMock} activeStepIndex={1} onStepClick={mockStepClick} />);
  });

  it('Renders all indicators', () => {
    const singleIndicator = screen.getAllByTestId('single-indicator');
    expect(singleIndicator).toHaveLength(3);
  });

  it('Click on indicator triggers onStepClick', () => {
    const singleIndicator = screen.getAllByTestId('single-indicator');

    userEvent.click(singleIndicator[0]);

    expect(mockStepClick).toBeCalledWith({ stepId: 'MACHINE_DATA' });
  });
});

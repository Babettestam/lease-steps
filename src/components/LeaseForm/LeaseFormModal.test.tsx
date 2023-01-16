import React from 'react';
import { render, screen } from '@testing-library/react';
import LeaseFormModal from 'components/LeaseForm/LeaseFormModal';
import { StateMachineProvider } from 'little-state-machine';
import useStepsContext from 'hooks/useStepsContext';
import { StepsContextValues } from 'contexts/StepsContext';

jest.mock('hooks/useStepsContext');
window.alert = jest.fn();

const mockCloseForm = jest.fn();
const mockResetStep = jest.fn();
const mockGoToNextStep = jest.fn();

const mockUseStepsContext = useStepsContext as jest.MockedFunction<typeof useStepsContext>;

const useStepsContextReturnDefault: StepsContextValues = {
  steps: [
    { id: 'MACHINE_DATA', description: 'Step description' },
    { id: 'LEASE_DETAIL', description: 'Step description' },
    { id: 'MILAGE', description: 'Step description' },
  ],
  activeStepIndex: 0,
  activeStep: { id: 'MACHINE_DATA', description: 'Step description' },
  goToPreviousStep: () => undefined,
  goToNextStep: mockGoToNextStep,
  goToStep: () => undefined,
  resetStep: mockResetStep,
};

const renderLeaseFormModal = (isOpen = true): void => {
  render(
    <StateMachineProvider>
      <LeaseFormModal isOpen={isOpen} closeForm={mockCloseForm} />
    </StateMachineProvider>
  );
};

describe('LeaseFormModal test', () => {
  it('LeaseFormModal closed', () => {
    mockUseStepsContext.mockReturnValue(useStepsContextReturnDefault);
    renderLeaseFormModal(false);

    const form = screen.queryByRole('form');
    expect(form).not.toBeInTheDocument();
  });

  it('if no activeStep, render null', () => {
    mockUseStepsContext.mockReturnValue({
      ...useStepsContextReturnDefault,
      activeStep: undefined,
    });

    renderLeaseFormModal();

    const form = screen.queryByRole('form');
    expect(form).not.toBeInTheDocument();
  });

  it('if not atFirstStep render Vorige button', () => {
    mockUseStepsContext.mockReturnValue({
      ...useStepsContextReturnDefault,
      activeStepIndex: 1,
    });

    renderLeaseFormModal();

    const previousButton = screen.queryByRole('button', { name: 'Vorige' });
    expect(previousButton).toBeInTheDocument();

    const nextButton = screen.queryByRole('button', { name: 'Volgende' });
    expect(nextButton).toBeInTheDocument();
  });

  it('show Verstuur button at last step', () => {
    mockUseStepsContext.mockReturnValue({
      ...useStepsContextReturnDefault,
      activeStepIndex: 2,
    });

    renderLeaseFormModal();

    const submitButton = screen.queryByRole('button', { name: 'Verstuur' });
    expect(submitButton).toBeInTheDocument();
  });
});

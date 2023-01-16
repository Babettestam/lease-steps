import React from 'react';
import { screen, render } from '@testing-library/react';
import FormSectionContainer from 'components/LeaseForm/FormSectionContainer/FormSectionContainer';

// eslint-disable-next-line react/display-name
jest.mock('components/FormSections/MachineDataForm', () => (): React.ReactElement => {
  return <div data-testid="mocked-machine-data-form" />;
});

describe('FormSectionContainer test', () => {
  beforeEach(() => {
    render(<FormSectionContainer stepId="MACHINE_DATA" />);
  });

  it('Renders machine data form', () => {
    expect(screen.getByTestId('mocked-machine-data-form')).toBeInTheDocument();
  });
});

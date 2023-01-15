import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { StepId } from '@types';
import MachineDataForm from 'components/FormSections/MachineDataForm';

interface Props {
  stepId: StepId;
}

const FormSectionContainer: React.FC<Props> = ({ stepId }) => {
  if (stepId === 'MACHINE_DATA') {
    return <MachineDataForm />;
  }

  // Other forms...

  return (
    <Box>
      <Text>Form not yet implemented {stepId}</Text>
    </Box>
  );
};

export default FormSectionContainer;

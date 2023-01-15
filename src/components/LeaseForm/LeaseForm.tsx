import StepIndicator from 'components/LeaseForm/StepIndicator/StepIndicator';
import useStepsContext from 'hooks/useStepsContext';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
} from '@chakra-ui/react';

interface Props {
  closeForm: () => void;
}

const LeaseForm: React.FC<Props> = ({ closeForm }) => {
  const { steps, activeStepIndex, activeStep } = useStepsContext();

  if (!activeStep) return null;

  return (
    <Modal isOpen={!!steps.length} onClose={closeForm} size="xl" isCentered>
      <ModalContent>
        <ModalHeader padding="2rem">
          <ModalCloseButton />
          <Heading as="h2" size="md" fontWeight={600} marginBottom="1rem">
            {activeStepIndex + 1}. Scania R730 - Topline Hydroliek
          </Heading>
          <StepIndicator steps={steps} activeStepIndex={activeStepIndex} />
        </ModalHeader>
        <ModalBody>
          <Text fontWeight={500} fontSize="lg">
            {activeStep?.description}
          </Text>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LeaseForm;

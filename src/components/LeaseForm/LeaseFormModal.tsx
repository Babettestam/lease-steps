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
  Button,
  Divider,
} from '@chakra-ui/react';
import FormSectionContainer from 'components/LeaseForm/FormSectionContainer/FormSectionContainer';

interface Props {
  isOpen: boolean;
  closeForm: () => void;
}

const LeaseFormModal: React.FC<Props> = ({ isOpen, closeForm }) => {
  const { steps, activeStepIndex, activeStep, goToPreviousStep, goToNextStep } = useStepsContext();

  if (!activeStep) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeForm} size="xl" isCentered closeOnOverlayClick={false}>
      <ModalContent>
        <ModalHeader padding="2rem">
          <ModalCloseButton mt="1.2rem" mr="1.2rem" />
          <Heading as="h2" size="md" fontWeight={600} marginBottom="1rem">
            {activeStepIndex + 1}. Scania R730 - Topline Hydroliek
          </Heading>
          <StepIndicator steps={steps} activeStepIndex={activeStepIndex} />
        </ModalHeader>
        <ModalBody>
          <Text fontWeight={500} fontSize="lg" marginBottom="2rem">
            {activeStep.description}
          </Text>
          <FormSectionContainer stepId={activeStep.id} />
          <Divider mt="2rem" />
        </ModalBody>
        <ModalFooter>
          {activeStepIndex !== 0 && (
            <Button colorScheme="blackAlpha" bg="black" onClick={goToPreviousStep} mr="1rem">
              Vorige
            </Button>
          )}
          <Button colorScheme="blackAlpha" bg="black" onClick={goToNextStep}>
            Volgende
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LeaseFormModal;

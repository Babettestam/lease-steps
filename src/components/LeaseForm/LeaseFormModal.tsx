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
import { useForm, FormProvider } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { CustomGlobalState } from '@types';
import { INITIAL_FORMS } from 'constants/FormDetails';

interface Props {
  isOpen: boolean;
  closeForm: () => void;
}

function updateFormState(state: CustomGlobalState, payload: CustomGlobalState): CustomGlobalState {
  return {
    ...state,
    ...payload,
  };
}

function resetStore(): CustomGlobalState {
  return INITIAL_FORMS;
}

const LeaseFormModal: React.FC<Props> = ({ isOpen, closeForm }) => {
  const {
    steps,
    activeStepIndex,
    activeStep,
    goToStep,
    goToPreviousStep,
    goToNextStep,
    resetStep,
  } = useStepsContext();
  const { actions, state } = useStateMachine({ updateFormState, resetStore });

  const atFirstStep = activeStepIndex === 0;
  const atLastStep = activeStepIndex === steps.length - 1;

  const methods = useForm<CustomGlobalState>({
    defaultValues: state,
  });
  // const values = methods.watch();
  const onSubmit = (data: CustomGlobalState): void => {
    if (atLastStep) {
      alert(JSON.stringify(data));
      actions.resetStore();
      resetStep();
      methods.reset();
      closeForm();
    } else {
      actions.updateFormState(data);
    }

    goToNextStep();
  };

  if (!activeStep) return null;

  return (
    <FormProvider {...methods}>
      <Modal isOpen={isOpen} onClose={closeForm} size="xl" isCentered closeOnOverlayClick={false}>
        <form onSubmit={methods.handleSubmit(onSubmit)} aria-label="form">
          <ModalContent>
            <ModalHeader padding="2rem">
              <ModalCloseButton mt="1.2rem" mr="1.2rem" />
              <Heading as="h2" size="md" fontWeight={600} marginBottom="1rem">
                {activeStepIndex + 1}. Scania R730 - Topline Hydroliek
              </Heading>
              <StepIndicator
                steps={steps}
                activeStepIndex={activeStepIndex}
                onStepClick={goToStep}
              />
            </ModalHeader>
            <ModalBody>
              <Text fontWeight={500} fontSize="lg" marginBottom="2rem">
                {activeStep.description}
              </Text>
              <FormSectionContainer stepId={activeStep.id} />
              <Divider mt="2rem" />
            </ModalBody>
            <ModalFooter>
              {!atFirstStep && (
                <Button colorScheme="blackAlpha" bg="black" onClick={goToPreviousStep} mr="1rem">
                  Vorige
                </Button>
              )}
              <Button type="submit" colorScheme="blackAlpha" bg="black">
                {atLastStep ? 'Verstuur' : 'Volgende'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </FormProvider>
  );
};

export default LeaseFormModal;

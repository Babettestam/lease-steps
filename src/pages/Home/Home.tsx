import React from 'react';
import { Box, Button, Heading, useBoolean } from '@chakra-ui/react';
import { StepsProvider } from 'contexts/StepsContext';
import LeaseFormModal from 'components/LeaseForm/LeaseFormModal';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { INITIAL_FORMS } from 'constants/FormDetails';

createStore(INITIAL_FORMS);

const Home: React.FC = () => {
  const [modalActive, setModalActive] = useBoolean(false);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box display="flex" flexDirection="column" alignItems="center" gap="2rem">
        <Heading>Beequip assignment</Heading>
        <Button colorScheme="blue" onClick={setModalActive.on}>
          Start
        </Button>
      </Box>

      <StateMachineProvider>
        <StepsProvider>
          <LeaseFormModal isOpen={modalActive} closeForm={setModalActive.off} />
        </StepsProvider>
      </StateMachineProvider>
    </Box>
  );
};

export default Home;

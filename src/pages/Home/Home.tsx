import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { LeaseType } from '@types';
import { StepsProvider } from 'contexts/StepsContext';
import LeaseForm from 'components/LeaseForm/LeaseForm';

const Home: React.FC = () => {
  const [activeLeaseType, setActiveLeaseType] = useState<LeaseType>();
  const handleFinancialClick = (): void => setActiveLeaseType('FINANCIAL_AND_OPERATIONAL');
  const handleSaleClick = (): void => setActiveLeaseType('SALE_AND_LEASEBACK');

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box display="flex" gap="1rem">
        <Button colorScheme="blue" onClick={handleFinancialClick}>
          Start financial and operational lease
        </Button>
        <Button colorScheme="yellow" onClick={handleSaleClick}>
          Start sale and lease-back lease
        </Button>
      </Box>

      <StepsProvider leaseType={activeLeaseType}>
        <LeaseForm closeForm={(): void => setActiveLeaseType(undefined)} />
      </StepsProvider>
    </Box>
  );
};

export default Home;

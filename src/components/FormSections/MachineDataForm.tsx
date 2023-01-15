import React from 'react';
import {
  SimpleGrid,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react';
import StyledSelect from 'components/shared/StyledSelect';
import StyledFormLabel from 'components/shared/StyledFormLabel';
import { generateYearsList } from 'utils/years';
import StyledInput from 'components/shared/StyledInput';
import useStepsContext from 'hooks/useStepsContext';
import { LeaseType } from '@types';

const MachineDataForm: React.FC = () => {
  const { leaseType, setLeaseType } = useStepsContext();

  return (
    <SimpleGrid columns={2} spacing={5}>
      <FormControl>
        <StyledFormLabel>Merk</StyledFormLabel>
        <StyledInput />
      </FormControl>

      <FormControl>
        <StyledFormLabel>Model</StyledFormLabel>
        <StyledInput />
      </FormControl>

      <FormControl>
        <StyledFormLabel>Bouwjaar</StyledFormLabel>
        <StyledSelect placeholder="Selecteer model">
          {generateYearsList(1900)
            .reverse()
            .map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </StyledSelect>
      </FormControl>

      <FormControl>
        <StyledFormLabel>Conditie</StyledFormLabel>
        <RadioGroup colorScheme="orange">
          <Stack direction="row" gap="1rem" paddingTop=".5rem">
            <Radio size="sm" value="USED">
              Gebruikt
            </Radio>
            <Radio size="sm" value="NEW">
              Nieuw
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <StyledFormLabel>Waarde</StyledFormLabel>
        <InputGroup>
          <InputLeftAddon bg="#e5e6e7">€</InputLeftAddon>
          <StyledInput type="number" borderTopLeftRadius={0} borderBottomLeftRadius={0} />
        </InputGroup>
      </FormControl>

      <FormControl>
        <StyledFormLabel>Leasevorm</StyledFormLabel>
        <RadioGroup
          value={leaseType}
          onChange={(value): void => setLeaseType(value as LeaseType)}
          colorScheme="orange"
        >
          <Stack direction="row" gap="1rem" paddingTop=".5rem">
            <Radio size="sm" value="FINANCIAL">
              Financial
            </Radio>
            <Radio size="sm" value="OPERATIONAL">
              Operational
            </Radio>
            <Radio size="sm" value="SALE_AND_LEASEBACK">
              Sale & leaseback
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </SimpleGrid>
  );
};

export default MachineDataForm;

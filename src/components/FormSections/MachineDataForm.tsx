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
import { ConditionType, CustomGlobalState, LeaseType } from '@types';
import { useFormContext } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

// Only update the lease type so
function updateMachineState(
  state: CustomGlobalState,
  payload: Partial<CustomGlobalState['MACHINE']>
): CustomGlobalState {
  return {
    ...state,
    MACHINE: {
      ...state.MACHINE,
      ...payload,
    },
  };
}

const MachineDataForm: React.FC = () => {
  const { register, setValue, watch } = useFormContext();
  const watchCondition = watch('MACHINE.condition', false); // you can supply default value as second argument
  const watchLeaseType = watch('MACHINE.leaseType', false); // you can supply default value as second argument
  const { actions } = useStateMachine({ updateMachineState });

  return (
    <SimpleGrid columns={2} spacing={5}>
      <FormControl {...register('MACHINE.brand')}>
        <StyledFormLabel>Merk</StyledFormLabel>
        <StyledInput onChange={(e): void => setValue('MACHINE.brand', e.target.value)} />
      </FormControl>

      <FormControl {...register('MACHINE.model')}>
        <StyledFormLabel>Model</StyledFormLabel>
        <StyledInput onChange={(e): void => setValue('MACHINE.model', e.target.value)} />
      </FormControl>

      <FormControl {...register('MACHINE.buildYear')}>
        <StyledFormLabel>Bouwjaar</StyledFormLabel>
        <StyledSelect
          placeholder="Selecteer model"
          onChange={(e): void => setValue('MACHINE.buildYear', e.target.value)}
        >
          {generateYearsList(1900)
            .reverse()
            .map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </StyledSelect>
      </FormControl>

      <FormControl {...register('MACHINE.condition')}>
        <StyledFormLabel>Conditie</StyledFormLabel>
        <RadioGroup
          colorScheme="orange"
          value={watchCondition}
          onChange={(value): void => {
            setValue('MACHINE.condition', value);
            actions.updateMachineState({ condition: value as ConditionType });
          }}
        >
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

      <FormControl {...register('MACHINE.value')}>
        <StyledFormLabel>Waarde</StyledFormLabel>
        <InputGroup>
          <InputLeftAddon bg="#e5e6e7">€</InputLeftAddon>
          <StyledInput
            type="number"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            onChange={(e): void => setValue('MACHINE.value', e.target.value)}
          />
        </InputGroup>
      </FormControl>

      <FormControl {...register('MACHINE.leaseType')}>
        <StyledFormLabel>Leasevorm</StyledFormLabel>
        <RadioGroup
          value={watchLeaseType}
          onChange={(value): void => {
            setValue('MACHINE.leaseType', value);
            actions.updateMachineState({ leaseType: value as LeaseType });
          }}
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

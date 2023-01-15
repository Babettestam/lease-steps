import React from 'react';
import { FormLabel, FormLabelProps } from '@chakra-ui/react';

const StyledFormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => (
  <FormLabel fontWeight={400} {...props}>
    {children}
  </FormLabel>
);

export default StyledFormLabel;

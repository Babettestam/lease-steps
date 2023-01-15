import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';

const StyledInput: React.FC<InputProps> = ({ children, ...props }) => (
  <Input variant="filled" bg="gray.100" fontWeight={500} {...props}>
    {children}
  </Input>
);

export default StyledInput;

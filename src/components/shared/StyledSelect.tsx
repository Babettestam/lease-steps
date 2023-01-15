import React from 'react';
import { Select, SelectProps } from '@chakra-ui/react';

const StyledSelect: React.FC<SelectProps> = ({ children, ...props }) => (
  <Select fontWeight={500} variant="filled" bg="gray.100" {...props}>
    {children}
  </Select>
);

export default StyledSelect;

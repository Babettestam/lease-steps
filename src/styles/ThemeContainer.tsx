import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    800: '#d28500',
    700: '#ffa100',
  },
  gray: {
    100: '#f6f6f6',
  },
};

const sizes = {
  xl: '60rem',
};

const theme = extendTheme({ colors, sizes });

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const ThemeContainer: React.FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeContainer;

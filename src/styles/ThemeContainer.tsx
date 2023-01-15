import React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    800: '#d28500',
    700: '#ffa100',
  },
};

const theme = extendTheme({ colors });

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const ThemeContainer: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../shared/config';

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

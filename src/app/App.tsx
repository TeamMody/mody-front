import { QueryProvider, AppRouterProvider, AppThemeProvider } from './providers';
import { GlobalStyle } from './styles';

function App() {

  return (
    <>
      <AppThemeProvider>
        <QueryProvider>
          <GlobalStyle />
          <AppRouterProvider />
        </QueryProvider>
      </AppThemeProvider>
    </>
  );
}

export default App;

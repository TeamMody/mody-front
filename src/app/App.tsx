import { QueryProvider, AppRouterProvider } from './providers';
import { GlobalStyle } from './styles';

function App() {

  return (
    <>
      <QueryProvider>
        <GlobalStyle />
        <AppRouterProvider />
      </QueryProvider>
    </>
  );
}

export default App;

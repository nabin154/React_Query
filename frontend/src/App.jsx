import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Todos from './components/Todos';

function App() {
  return(
    <>
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;

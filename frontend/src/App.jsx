import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';

function App() {
  return(
    <div style={{display: 'flex'}}>
      <Todos />
      <AddTodos/>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;

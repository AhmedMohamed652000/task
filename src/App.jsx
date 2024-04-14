import logo from './logo.svg';
import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routers from './Routers/Routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

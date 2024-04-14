import logo from './logo.svg';
import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routers from './Routers/Routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Shared/navbar';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const url = "https://fakestoreapi.com";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => axios.get(`${url}${queryKey}`).then(response => response.data),
      refetchOnWindowFocus: true, 
    },
  },
});

export const QueryClientProviderWrapper = ({ children }) => {
  return (
    
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;

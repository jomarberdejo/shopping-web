import React, { createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const url = "https://fakestoreapi.com";


const QueryClientContext = createContext();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => axios.get(`${url}${queryKey}`).then(response => response.data),
      refetchOnWindowFocus: false, 
    },
  },
});

export const QueryClientProviderWrapper = ({ children }) => {
  return (
    <QueryClientContext.Provider value={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </QueryClientContext.Provider>
  );
};

export const useQueryClient = () => {
  return useContext(QueryClientContext);
};

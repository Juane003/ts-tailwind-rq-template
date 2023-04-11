import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World!</h1>
    </QueryClientProvider>
  );
};

export default App;

import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./routes";
import Header from "./components/layout/header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;

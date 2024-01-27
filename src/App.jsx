import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./routes";

import {NextUIProvider} from "@nextui-org/react";

const queryClient = new QueryClient();

function App() {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;

import { RouterPaths } from "./Routes/RouterPaths.routes"
import { AuthProvider } from "./assets/contexts/AuthContext/AuthProvider";
import { CartContextProvider } from "./assets/contexts/CartContext";
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartContextProvider>
                  <RouterPaths />
          </CartContextProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App

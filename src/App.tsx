import { RouterPaths } from "./Routes/RouterPaths.routes"
import { AuthProvider } from "./assets/contexts/AuthContext/AuthProvider";
import { CartContextProvider } from "./assets/contexts/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
                <RouterPaths />
        </CartContextProvider>
      </AuthProvider>
    </>
  );
}

export default App

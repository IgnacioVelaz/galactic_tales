import { RouterPaths } from "./Routes/RouterPaths.routes"
import { AuthProvider } from "./assets/contexts/AuthContext/AuthProvider";
import { BooksContextProvider } from "./assets/contexts/BooksContext";
import { CartContextProvider } from "./assets/contexts/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <BooksContextProvider>
                <RouterPaths />
          </BooksContextProvider>
        </CartContextProvider>
      </AuthProvider>
    </>
  );
}

export default App

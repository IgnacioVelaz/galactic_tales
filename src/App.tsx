import { RouterPaths } from "./Routes/RouterPaths.routes"
import { BooksContextProvider } from "./assets/contexts/BooksContext";
import { CartContextProvider } from "./assets/contexts/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <BooksContextProvider>
              <RouterPaths />
        </BooksContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App

import { RouterPaths } from "./Routes/RouterPaths.routes"
import { BooksContextProvider } from "./assets/contexts/BooksContext";

function App() {
  return (
    <>
      <BooksContextProvider>
            <RouterPaths />
      </BooksContextProvider>
    </>
  );
}

export default App

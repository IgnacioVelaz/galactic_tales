import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { BookInterface } from "../../Interfaces/BookInterface";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";

export type BooksContextType = {
    books: BookInterface[],
    setBooks: Dispatch<SetStateAction<BookInterface[]>>,
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
}

export const BooksContext = createContext<BooksContextType>({
    books: [],
    setBooks: ()=>{},
    cart: [],
    setCart: ()=>{},
    updateCartQuantity: ()=>{}
});

type BooksContextProviderProps = {
    children: ReactNode
}

export const BooksContextProvider = ({ children }: BooksContextProviderProps) => {
    const [books, setBooks] = useState<BookInterface[]>([]);
    const [cart, setCart] = useState<CartItemInterface[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("src/assets/database/data.json");
            const data = await res.json();
            setBooks(data);
        }
        getData();
    }, []);

    const updateCartQuantity = (item: BookInterface, quantity = 1) => {
        setCart(prevCart => prevCart.map(prevItem => {
          if(prevItem.isbn === item.isbn){
            return {...prevItem, quantity: prevItem.quantity + quantity};
          }
          return prevItem;
        }));
      }

    return (
        <BooksContext.Provider value={{ updateCartQuantity, books, setBooks, cart, setCart }}>
            {children}
        </BooksContext.Provider>
    )
}

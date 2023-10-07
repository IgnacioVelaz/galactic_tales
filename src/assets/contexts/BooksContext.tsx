import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { BookInterface } from "../../Interfaces/BookInterface";

export type BooksContextType = {
    books: BookInterface[],
    setBooks: Dispatch<SetStateAction<BookInterface[]>>,
}

export const BooksContext = createContext<BooksContextType>({
    books: [],
    setBooks: ()=>{},
});

type BooksContextProviderProps = {
    children: ReactNode
}

export const BooksContextProvider = ({ children }: BooksContextProviderProps) => {
    const [books, setBooks] = useState<BookInterface[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("src/assets/database/data.json");
            const data = await res.json();
            setBooks(data);
        }
        getData();
    }, []);

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    )
}

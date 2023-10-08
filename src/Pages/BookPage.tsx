import { useParams } from "react-router-dom"
import { BookCard } from "../components/Books/BookCard/BookCard"
import { BooksContext } from "../assets/contexts/BooksContext"
import { useContext } from "react"
import { BookInterface } from "../Interfaces/BookInterface"
import { BooksContextType } from "../assets/contexts/BooksContext"


export const BookPage = ()=>{
    const { isbn } = useParams()
    const context = useContext<BooksContextType>(BooksContext);
    const { books } = context
    
    const selectedBook = books?.find((book:BookInterface)=> book.isbn === parseInt(isbn))
    
    return (
        <>
            {selectedBook? <BookCard book={selectedBook}/> : <p>There's no book with that isbn</p>}
        </>
    )
}

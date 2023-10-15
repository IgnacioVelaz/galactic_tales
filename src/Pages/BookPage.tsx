import { useParams } from "react-router-dom"
import { BookInterface } from "../Interfaces/BookInterface"
import { useFetch } from "../Hooks/useFetch"
import { BookContent } from "../components/Books/BookContent/BookContent"


export const BookPage = ()=>{
    const { data, state, error  } = useFetch<[BookInterface]>("http://localhost:3000/books")

    if(state === "loading" || state === "idle"){
        return <p>Loading...</p>
    }
    
    if(state === "error" || !data){
        return <p>{error?.message}</p>
    }

    const { title } = useParams()
    
    const  books = data
    console.log(books)
    
    const selectedBook = books?.find((book:BookInterface)=> book.title === title)
    
    return (
        <>
            {selectedBook? <BookContent book={selectedBook}/> : <p>There's no book with that title</p>}
        </>
    )
}

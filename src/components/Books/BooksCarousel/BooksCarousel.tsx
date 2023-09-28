import { BookCard } from "../BookCard/BookCard"
import data from '../../../assets/database/data.json'


export const BooksCarousel = ()=>{
    console.log(data[0])
    const booksCards = data.map(book=>{
        return <BookCard key={book.isbn} book={book}/>
    })

    return (
        <div className="grid grid-cols-3">
            {booksCards}
        </div>
    )
}
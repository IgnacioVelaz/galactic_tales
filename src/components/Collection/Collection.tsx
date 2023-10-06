import { FC } from "react"
import { BooksCarousel } from "../Books/BooksCarousel/BooksCarousel"
import { GiBookAura, GiBurningBook } from "react-icons/gi"
import { useContext } from "react"
import { BooksContext } from "../../assets/contexts/BooksContext"
import { BookInterface } from "../../Interfaces/BookInterface"

type CollectionProps = {
    collection: string
}

export const Collection:FC<CollectionProps> = ({collection})=>{
    const context = useContext<BooksContextType>(BooksContext);
    const { books } = context

    const collectionBooks = books.filter((book:BookInterface)=>{
        return book.collections.includes(collection)
    })

    const collectionIcon = 
        collection === "Popular"? <GiBurningBook className="text-2xl" /> :
        collection === "Classic"? <GiBookAura className="text-2xl" /> : undefined


    return (
        <section>
            <div className="flex justify-center items-center gap-2 p-6">
                <h2 className="text-center text-2xl ">{collection}</h2> 
                {collectionIcon?? collectionIcon}
            </div>
            <BooksCarousel booksArray={collectionBooks}/>
        </section>
    )
}
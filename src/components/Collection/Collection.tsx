import { FC } from "react"
import data from '../../assets/database/data.json'
import { BooksCarousel } from "../Books/BooksCarousel/BooksCarousel"
import { GiBookAura, GiBurningBook } from "react-icons/gi"

type CollectionProps = {
    collection: string
}

export const Collection:FC<CollectionProps> = ({collection})=>{
    const collectionBooks = data.filter(book=>{
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
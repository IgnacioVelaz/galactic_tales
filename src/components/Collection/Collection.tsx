import { FC } from "react"
import { BooksCarousel } from "../Books/BooksCarousel/BooksCarousel"
import { GiBookAura, GiBurningBook } from "react-icons/gi"
import { BookInterface } from "../../Interfaces/BookInterface"

type CollectionProps = {
    collection: string,
    data: BookInterface[],
}

export const Collection:FC<CollectionProps> = ({ collection, data })=>{

    const collectionBooks = data.filter(({collections})=>{
        return collections && collections.includes(collection) 
    })

    const collectionIcon = 
        collection === "Popular"? <GiBurningBook className="text-2xl" /> :
        collection === "Classic"? <GiBookAura className="text-2xl" /> : undefined

    return (
        <section className="mt-12">
            <div className="flex justify-center items-center gap-2 mt-6">
                <h2 className="text-center text-2xl">{collection}</h2> 
                {collectionIcon?? collectionIcon}
            </div>
            <BooksCarousel booksArray={collectionBooks}/>
        </section>
    )
}
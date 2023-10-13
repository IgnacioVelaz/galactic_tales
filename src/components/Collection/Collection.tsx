import { FC } from "react"
import { BooksCarousel } from "../Books/BooksCarousel/BooksCarousel"
import { GiBookAura, GiBurningBook } from "react-icons/gi"
import { BookInterface } from "../../Interfaces/BookInterface"
import { useFetch } from "../../Hooks/useFetch"

type CollectionProps = {
    collection: string
}

export const Collection:FC<CollectionProps> = ({collection})=>{
    const { data, state, error  } = useFetch("http://localhost:3000/books")
    console.log("booksData:", data)

    if(state === "loading" || state === "idle"){
        return <div>Loading...</div>
    }
    
    if(state === "error" || !data){
        return <div>Error</div>
    }

    const collectionBooks = data.filter((book:BookInterface)=>{
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
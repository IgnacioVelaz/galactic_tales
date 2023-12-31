import { ChangeEvent } from "react"
import { BiSearch } from "react-icons/bi"
import { Link, useSearchParams } from "react-router-dom"
import { BookInterface } from "../../Interfaces/BookInterface"

type SearchBarPropsType = {
    data: BookInterface[]
}

export const SearchBar = ({ data }: SearchBarPropsType) => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const books = data
    
    const handleQuery = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: e.target.value })
    }

    const query = searchParams.get('q') ?? ""

    return (
    <div className="flex flex-col items-center justify-center pt-4 bg-bgPrimary">
        <div className="flex bg-white h-12 px-4 py-2 shadow-solidS border-cGray border items-center relative">
            <BiSearch className="h-6 w-6 mr-2" />
            <input 
            type="search"
            placeholder="Enter book or author name..."
            value={query}
            onChange={handleQuery}
            className="
            h-full
            w-full
            focus:outline-none
            "
            />
            {query && <div className="bg-white border border-cGray mt-2 max-w-[80%] absolute top-[40px]">
            {books.filter(book => {
                return (
                    book && 
                    book.title.toLowerCase().includes(query.toLowerCase()) ||
                    book.author.toLowerCase().includes(query.toLowerCase()) )
            }).map(book=> (
            <Link key={book.id} to={`/books/${book.title}`}>
                <div className="flex items-center p-2 gap-2">
                    <p>{book.title}</p>
                    <p className="text-xs">{book.author}</p>
                </div>
            </Link>
            ))}
        </div>}
        </div>
        
    </div>
    
  )
}

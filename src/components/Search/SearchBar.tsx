import { ChangeEvent, FC } from "react"
import { BiSearch } from "react-icons/bi"
import { Link, useSearchParams } from "react-router-dom"

export const SearchBar = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const books = data
    
    const handleQuery = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: e.target.value })
    }

    const query = searchParams.get('q') ?? ""

    return (
    <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex bg-white h-12 px-4 py-2 shadow-solidS border-cGray border items-center">
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
        </div>
        {query && <div className="bg-white border border-cGray mt-2 max-w-[80%]">
            {books.filter(book => {
                return (
                    book && 
                    book.title.toLowerCase().includes(query.toLowerCase()) ||
                    book.author.toLowerCase().includes(query.toLowerCase()) )
            }).map(book=> (
            <Link key={book.isbn} to={`/books/${book.title}`}>
                <div className="flex items-center p-2 gap-2">
                    <p>{book.title}</p>
                    <p className="text-xs">{book.author}</p>
                </div>
            </Link>
            ))}
        </div>}
    </div>
    
  )
}

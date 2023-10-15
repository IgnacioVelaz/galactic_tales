import { AtcButton } from '../../AtcButton/AtcButton'
import { FC } from 'react'
import { BookInterface } from '../../../Interfaces/BookInterface'
import { Link } from 'react-router-dom'


type BookCardProps= {
    book: BookInterface
}

export const BookCard:FC<BookCardProps> = ({book}) => {

    const {id, images, title, author, comparePrice, price} = book
    const featuredImage = images[0]

    return (
      <div
        className="border-4 
                            border-cGray 
                            relative 
                            w-fit 
                            p-4 
                            bg-white
                            shadow-solidL
                            flex
                            flex-col
                            gap-2
                            "
        id={`"${id}"`}
      >
        <div className="flex relative">
          <Link to={`/books/${title}`}>
            <img
              src={featuredImage}
              alt={`${title} Cover`}
              className="h-[450px]"
            />
          </Link>
          
        </div>
        <p className="text-sm font-bold">By {author}</p>
        <p className="text-lg">{title}</p>
        <div className="flex gap-4 text-lg">
          <span className="text-accTertiary line-through">${comparePrice}</span>
          <span>${price}</span>
        </div>

        <AtcButton data={book} quantity={1} />
      </div>
    );
}
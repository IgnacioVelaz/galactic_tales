import { GoBookmark } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { AtcButton } from '../../AtcButton/AtcButton'
import { FC } from 'react'
import { BookInterface } from '../../../Interfaces/BookInterface'

type BookCardProps= {
    book: BookInterface
}

export const BookCard:FC<BookCardProps> = ({book}) => {

    const {isbn, images, title, author, comparePrice, price} = book

    return (
            <div className="border-4 border-cGray w-fit p-4" id={`"${isbn}"`}>
                <div className="flex relative">
                    <img src={images[0]} alt={`${title} Cover`} />
                    <div className="bg-cGray h-fit p-2 rounded-full absolute right-2 top-2">
                        <GoBookmark className="w-8 h-8 text-white" />
                    </div>
                </div>
                <div className="flex">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
                <p>By {author}</p>
                <p>{title}</p>
                <div className="flex">
                    <span className="text-accTertiary" >{comparePrice}</span>
                    <span>{price}</span>
                </div>
                <AtcButton/>
            </div>
        )
}
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
            <div className="border-4 
                            border-cGray 
                            relative 
                            w-fit 
                            p-4 
                            bg-white
                            before:content-[''] 
                            before:absolute 
                            before:bg-cGray
                            before:h-full
                            before:w-full
                            before:left-4
                            before:top-4
                            before:-z-10
                            flex
                            flex-col
                            gap-2
                            " 
                            id={`"${isbn}"`}>
                <div className="flex relative">
                    <img src={images[0]} alt={`${title} Cover`} className="h-[450px]"/>
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
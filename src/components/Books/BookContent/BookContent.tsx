import { AtcButton } from '../../AtcButton/AtcButton'
import { FC, useState } from 'react'
import { BookInterface } from '../../../Interfaces/BookInterface'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


type BookContentProps= {
    book: BookInterface
}

export const BookContent:FC<BookContentProps> = ({book}) => {
    const {id, images, title, author, comparePrice, price, description, pages, stock} = book
    const featuredImage = images[0]
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1 )
    }

    const decreaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity -1)
    }

    return (
      <div>
        <div id={`"${id}"`} className="px-10 py-5 bg-bgPrimary">
          <h2 className="text-2xl text-center bg-white py-2 px-4 shadow-solidS border-cGray border">
            {title}
          </h2>
          <div className="flex relative">
            <img src={featuredImage} alt={`${title} Cover`} className="mt-5" />
          </div>
          <p className="font-bold text-cGray">By {author}</p>
          <div className="flex py-4 gap-2">
            <span className="text-accTertiary text-xl line-through">
              ${comparePrice}
            </span>
            <span className="text-xl">${price}</span>
          </div>
          <p className="italic">{pages} pages</p>
          <p className="mt-4">{description}</p>
        </div>
        <div className="sticky bg-bgPrimary shadow-solidS p-5 bottom-[80px] grid grid-cols-2">
        {  stock > 0 &&
          <div className="grid grid-cols-3 items-center gap-2">
          <button aria-label="reduce quantity" 
            className="
              bg-accPrimary
              flex
              justify-center
              items-center
              w-10
              aspect-square
              border-2
              border-cGray
              shadow-solidXS
              disabled:opacity-40"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              >
            <AiOutlineMinus />
          </button>
          <input aria-label="quantity" type="number" value={quantity} readOnly className="text-center w-10 text-xl bg-none"/>
          <button aria-label="increase quantity" 
            className="
              bg-accPrimary 
              flex justify-center 
              items-center 
              w-10
              aspect-square
              border-2 
              border-cGray 
              shadow-solidXS
              disabled:opacity-40"
              onClick={increaseQuantity}
              disabled={quantity === stock}
              >
            <AiOutlinePlus/>  
          </button>
        </div>}
          <AtcButton data={book} quantity={quantity}/>
        </div>
      </div>
    );
}


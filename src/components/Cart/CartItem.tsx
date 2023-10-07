import { FC, useContext } from "react"
import { CartItemInterface } from "../../Interfaces/CartItemInterface"
import { BiSolidTrashAlt } from "react-icons/bi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CartContext } from "../../assets/contexts/CartContext"

type CartItemProps = {
  book: CartItemInterface
}

export const CartItem:FC<CartItemProps> = ({ book }) => {
  const { title, quantity, price, images } = book
  const { handleQuantityDecrease, handleQuantityIncrease, removeItemFromCart } = useContext(CartContext)
  const featuredImage = images[0]

  
  return (
    <div className="
    border-4 
    z-10
    border-cGray 
    relative 
    w-fit 
    shadow-solidS
    gap-2
    grid
    bg-white 
    grid-cols-5
    " 
    >
      <img src={featuredImage} alt={`${title} cover`} className="p-2 col-span-2 h-full"/>
      <div className="col-span-3 p-2 grid items-center grid-cols-3 grid-rows-2">
        <h3 className="col-span-2">{title}</h3>
        <BiSolidTrashAlt className="
          ml-auto
          h-8 
          w-8 
          text-white 
          bg-cGray 
          p-1"
          onClick={()=> removeItemFromCart(book)}
        />
        <p>${price*quantity}</p>
        <div className=" col-span-2 grid grid-cols-3 items-center">
          <button aria-label="reduce quantity" 
            className="
              bg-accPrimary
              flex
              justify-center
              items-center
              w-[80%]
              ml-[10%]
              aspect-square
              border-2
              border-cGray
              shadow-solidXS"
              onClick={()=> handleQuantityDecrease(book)}>
            <AiOutlineMinus />
          </button>
          <input  aria-aria-label="quantity" type="number" value={quantity} className="text-center"/>
          <button aria-aria-label="increase quantity" 
            className="
              bg-accPrimary 
              flex justify-center 
              items-center 
              w-[80%]
              ml-[10%]
              aspect-square
              border-2 
              border-cGray 
              shadow-solidXS"
              onClick={()=> handleQuantityIncrease(book)}>
            <AiOutlinePlus/>  
          </button>
        </div>
      </div>
    </div>
  )
}


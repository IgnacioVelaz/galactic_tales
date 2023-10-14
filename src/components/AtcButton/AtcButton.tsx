import { BsHandbag } from 'react-icons/bs';
import { FC, useContext } from 'react';
import { BookInterface } from '../../Interfaces/BookInterface'
import { CartContext, CartContextType } from '../../assets/contexts/CartContext'


type AtcButtonProps = {
  data: BookInterface
}

export const AtcButton: FC<AtcButtonProps> = ({data}) => {
  const context = useContext<CartContextType>(CartContext)

  const { handleQuantityIncrease, cart, setCart } = context

  const addToCart = () => {
    const cartMatch = cart.find((item) => item.isbn === data.isbn)
    cartMatch ? handleQuantityIncrease(cartMatch) : addNewBookToCart()  
  }

  const addNewBookToCart = (quantity = 1) => {
    setCart([...cart, {...data, quantity: quantity}])
  }

  return (
    <button
      className="flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center"
      onClick={()=> addToCart()}
    >
      <span className="uppercase">Add to Cart</span>
      <BsHandbag />
    </button>
  );
};



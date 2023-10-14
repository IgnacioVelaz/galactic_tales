import { BsHandbag } from 'react-icons/bs';
import { FC, useContext } from 'react';
import { BookInterface } from '../../Interfaces/BookInterface'
import { CartContext, CartContextType } from '../../assets/contexts/CartContext'


type AtcButtonProps = {
  data: BookInterface
}

export const AtcButton: FC<AtcButtonProps> = ({data}) => {
  const context = useContext<CartContextType>(CartContext)

  const { addToCart } = context

  return (
    <button
      className="flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center"
      onClick={()=> addToCart(data)}
    >
      <span className="uppercase">Add to Cart</span>
      <BsHandbag />
    </button>
  );
};



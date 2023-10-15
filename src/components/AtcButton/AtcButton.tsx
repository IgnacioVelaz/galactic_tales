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
      className="flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center disabled:opacity-50"
      onClick={()=> addToCart(data)}
      disabled={data.stock === 0}
    >
      <span className="uppercase">{ data.stock > 0 ? "Add to Cart" : "Out of Stock" }</span>
      {data.stock > 0 &&<BsHandbag />}
    </button>
  );
};



import { BsFillHandbagFill } from 'react-icons/bs';
import { FC, useContext } from 'react';
import { BookInterface } from '../../Interfaces/BookInterface'
import { CartContext, CartContextType } from '../../assets/contexts/CartContext'


type AtcButtonProps = {
  data: BookInterface, 
  quantity: number
}

export const AtcButton: FC<AtcButtonProps> = ({data, quantity}) => {
  const { addToCart } = useContext<CartContextType>(CartContext)

  return (
    <button
      className="
          flex
          bg-accPrimary 
          p-4 border-2 
          border-cGray 
          w-full 
          justify-center 
          disabled:opacity-50
          shadow-solidXS
          items-center
          gap-2"
      onClick={() => addToCart(data, quantity)}
      disabled={data.stock === 0}
    >
      <span className="uppercase">
        {data.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </span>
      {data.stock > 0 && <BsFillHandbagFill />}
    </button>
  );
};



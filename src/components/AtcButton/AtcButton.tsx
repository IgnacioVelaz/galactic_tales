import { BsHandbag } from 'react-icons/bs';
import { FC, useContext } from 'react';
import { BooksContext } from '../../assets/contexts/BooksContext';
import { BookInterface } from '../../Interfaces/BookInterface';
import { BooksContextType } from '../../assets/contexts/BooksContext';

type AtcButtonProps = {
  data: BookInterface
}

export const AtcButton: FC<AtcButtonProps> = ({data}) => {
  console.log('data:', data)
  const context = useContext<BooksContextType>(BooksContext);
  const { updateCartQuantity, cart, setCart } = context

  const addToCart = () => {
    const cartMatch = cart.find((item) => item.isbn === data.isbn);
    cartMatch ? updateCartQuantity(cartMatch) : addNewBookToCart();
  }


  // const updateCartQuantity = (item: BookInterface, quantity = 1) => {
  //   setCart(prevCart => prevCart.map(prevItem => {
  //     if(prevItem.isbn === item.isbn){
  //       return {...prevItem, quantity: prevItem.quantity + quantity};
  //     }
  //     return prevItem;
  //   }));
  // }

  const addNewBookToCart = (quantity = 1) => {
    setCart([...cart, {...data, quantity: quantity}]);
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

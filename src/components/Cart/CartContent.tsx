import { CartItem } from "./CartItem"
import { useContext } from "react"
import { BooksContext } from "../../assets/contexts/BooksContext"
import { CartItemInterface } from "../../Interfaces/CartItemInterface"
import { BooksContextType } from "../../assets/contexts/BooksContext"


export const CartContent = () => {
  const context = useContext<BooksContextType>(BooksContext);
  const { cart } = context

  let cartItems

  if(cart.length > 0){
    cartItems = cart.map((cartItem: CartItemInterface) => <CartItem book={cartItem} key={cartItem.isbn}/>)
  }  
  if(cart.length === 0){
    cartItems = <h1>There are no items in Cart. Add something</h1>
  }

  return (
    <div className="p-6 grid auto-rows-auto gap-10">
      { cartItems }
    </div>
  )
}


import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartItemInterface } from "../../Interfaces/CartItemInterface"
import { CartContext, CartContextType } from "../../assets/contexts/CartContext"


export const CartContent = () => {
  const context = useContext<CartContextType>(CartContext);
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


import { CartItem } from "./CartItem"
import { useContext } from "react"
import { CartItemInterface } from "../../Interfaces/CartItemInterface"
import { CartContext, CartContextType } from "../../assets/contexts/CartContext"
import { Link } from "react-router-dom"


export const CartContent = () => {
  const context = useContext<CartContextType>(CartContext);
  const { cart, cartTotal } = context
  
  let cartItems

  if(cart.length > 0){
    cartItems = cart.map((cartItem: CartItemInterface) => <CartItem book={cartItem} key={cartItem.isbn}/>)
  }  
  if(cart.length === 0){
    cartItems = <h1>There are no items in Cart. Add something</h1>
  }

  return (
    <>
      <div className="p-6 grid auto-rows-auto gap-10">
        { cartItems }
      </div>
      {  cart.length > 0 &&
        (<div className="sticky bottom-0 z-10 p-6 bg-bgPrimary">
        <div className="flex justify-between">
          <p>Total Amount:</p>
          <p>${cartTotal}</p>
        </div>  
        <Link to="/checkout">
          <button className="w-full text-center py-4 bg-accPrimary">Go to Checkout</button>
        </Link>
      </div>)
      }
    </>
  )
}


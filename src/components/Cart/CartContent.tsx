import { CartItem } from "./CartItem"
import { useContext, useEffect, useState } from "react"
import { CartItemInterface } from "../../Interfaces/CartItemInterface"
import { CartContext, CartContextType } from "../../assets/contexts/CartContext"


export const CartContent = () => {
  const context = useContext<CartContextType>(CartContext);
  const { cart } = context
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(()=>{
    setCartTotal(cart.reduce(getCartTotal, 0))
  }, [cart])

  const getCartTotal = (accumulator, currentValue) => {
    return Math.round((accumulator + currentValue.price * currentValue.quantity)*100) /100
  }

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
      <div className="sticky bottom-0 z-10 p-6 bg-bgPrimary">
        <div className="flex justify-between">
          <p>Total Amount:</p>
          <p>${cartTotal}</p>
        </div>  
        <button className="w-full text-center py-4 bg-accPrimary">Go to Checkout</button>
      </div>
    </>
  )
}


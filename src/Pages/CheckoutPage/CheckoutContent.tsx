import { useContext } from "react";
import { CartContext } from "../../assets/contexts/CartContext";
import { Link } from "react-router-dom";

export function CheckoutContent(){
  const { cart, cartTotal } = useContext(CartContext)

  return (
  <> 
    <div className="p-4 min-h-full relative">
        <div className="p-4 flex flex-col bg-white shadow-solidS border-cGray border-2">
        <h3 className="font-semibold text-center text-lg">Order Summary</h3>
        <div className="mt-6 grid grid-cols-4 gap-y-4">
            <p className="col-span-2 text-center font-medium">Item</p>
            <p className="text-center font-medium">Quantity</p>
            <p className="text-center font-medium">Price</p>
            {cart.map(cartItem =>{
            return (
            <>
                <p className="col-span-2 text-sm">{cartItem.title}</p>
                <p className="text-sm text-center">{cartItem.quantity}</p>
                <p className="text-sm text-center">${cartItem.price * cartItem.quantity}</p>
            </>
            )
            })}
        </div>
        <div className="flex justify-between mt-10 mx-6 text-lg font-bold">
            <p className="uppercase">Total:</p>
            <p className="col-span-3 text-right">${cartTotal}</p>
        </div>
        </div>
    </div>
    <div className="sticky bottom-0 z-10 p-6 bg-bgPrimary">
        <div className="flex justify-between">
            <p>Total Amount:</p>
            <p>${cartTotal}</p>
        </div>  
        <Link to="/checkout">
            <button className="w-full text-center py-4 bg-accPrimary uppercase">Confirm order</button>
        </Link>
    </div>
  </> 
  )
}

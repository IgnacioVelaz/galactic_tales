import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";
import { BookInterface } from "../../Interfaces/BookInterface";
import { toast } from 'react-toastify'




export type CartContextType = {
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
    handleQuantityIncrease: (item:CartItemInterface)=>void,
    handleQuantityDecrease: (item:CartItemInterface)=>void,
    removeItemFromCart: (item:CartItemInterface)=> void
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: ()=>{},
    handleQuantityIncrease: ()=>{},
    handleQuantityDecrease: ()=>{},
    removeItemFromCart: ()=>{}
});

type CartContextProviderProps = {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const localCart = localStorage.getItem('cart')
    const [cart, setCart] = useState<CartItemInterface[]>(localCart? JSON.parse(localCart): []);

    useEffect(()=>{
        cart? localStorage.setItem('cart', JSON.stringify(cart)) : null
    }, [cart])

    const updateCartQuantity = (item: BookInterface, quantity = 1) => {
        setCart(prevCart => prevCart.map(prevItem => {
          if(prevItem.isbn === item.isbn){
            return {...prevItem, quantity: prevItem.quantity + quantity};
          }
          return prevItem;
        }));
      }

    const handleQuantityIncrease = (item: CartItemInterface)=>{
        console.log('quantity increase')
        console.log(item.stock, item.quantity)
        if(item.stock >= item.quantity + 1) updateCartQuantity(item)
        if(item.stock === item.quantity) toast('All available units are in your cart')
    }

    const handleQuantityDecrease = (item: CartItemInterface)=>{
        if(item.quantity > 1) updateCartQuantity(item, -1)
        if(item.quantity === 1 ) removeItemFromCart(item)   
    }
    
    const removeItemFromCart = (item: CartItemInterface)=>{
        console.log("Removed")
        console.log(item.isbn)
        setCart(prevCart=> {
            const itemIndex = prevCart.findIndex(prevItem => prevItem.isbn === item.isbn)
            const firstHalf = [...prevCart].slice(0, itemIndex)
            const secondHalf = [...prevCart].slice(itemIndex+1)
            return [...firstHalf, ...secondHalf]
        })
    }

    return (
        <CartContext.Provider value={{ cart, setCart, handleQuantityIncrease, handleQuantityDecrease, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

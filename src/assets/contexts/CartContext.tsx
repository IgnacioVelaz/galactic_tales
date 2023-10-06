import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";
import { BookInterface } from "../../Interfaces/BookInterface";

export type CartContextType = {
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: ()=>{},
    updateCartQuantity: ()=>{}
});

type CartContextProviderProps = {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cart, setCart] = useState<CartItemInterface[]>([]);

    const updateCartQuantity = (item: BookInterface, quantity = 1) => {
        setCart(prevCart => prevCart.map(prevItem => {
          if(prevItem.isbn === item.isbn){
            return {...prevItem, quantity: prevItem.quantity + quantity};
          }
          return prevItem;
        }));
      }

    return (
        <CartContext.Provider value={{ cart, setCart, updateCartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

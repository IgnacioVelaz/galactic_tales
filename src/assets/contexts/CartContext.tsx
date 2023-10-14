import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction, useContext } from "react";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";
import { BookInterface } from "../../Interfaces/BookInterface";
import { toast } from 'react-toastify'
import { AuthContext } from "./AuthContext/AuthContext";
import { useMutation } from "react-query";
import { editUser } from "../../handleUsers/handleUsers";

export type CartContextType = {
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
    cartTotal: number,
    handleQuantityIncrease: (item:CartItemInterface)=>void,
    handleQuantityDecrease: (item:CartItemInterface)=>void,
    removeItemFromCart: (item:CartItemInterface)=> void
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: ()=>{},
    cartTotal: 0,
    handleQuantityIncrease: ()=>{},
    handleQuantityDecrease: ()=>{},
    removeItemFromCart: ()=>{}
});

type CartContextProviderProps = {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const editUserMutation = useMutation(editUser)
    const { isLogged, user } = useContext(AuthContext)
    
    const localCart = localStorage.getItem('cart')
    const initialCart = localCart? JSON.parse(localCart) : []
    const [cart, setCart] = useState<CartItemInterface[]>(initialCart);
    const [cartTotal, setCartTotal] = useState(0)

    // useEffect(()=>{
    //     if(isLogged){
    //         const editedUser = {...user, cart: cart}
    //         editUserMutation.mutate(editedUser)
    //       }
    // }, [cart])
    

    //Chequear primero si hay items en el cart
    useEffect(()=>{
        setCartTotal(cart.reduce(getCartTotal, 0))
    }, [cart])

    const getCartTotal = (accumulator:number, currentValue: CartItemInterface) => {
        return Math.round((accumulator + currentValue.price * currentValue.quantity)*100) /100
    }

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

      const addToCart = (data) => {
        console.log('data:',data)
        const cartMatch = cart.find((item) => item.isbn === data.isbn)
        cartMatch ? handleQuantityIncrease(cartMatch) : addNewBookToCart(data)  
      }
    
      const addNewBookToCart = (data, quantity = 1) => {
        setCart([...cart, {...data, quantity: quantity}])
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
        <CartContext.Provider value={{ cart, setCart, cartTotal, handleQuantityIncrease, handleQuantityDecrease, removeItemFromCart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

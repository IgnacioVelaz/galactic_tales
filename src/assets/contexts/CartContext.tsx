import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction, useContext } from "react";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";
import { BookInterface } from "../../Interfaces/BookInterface";
import { toast } from 'react-toastify'
import { AuthContext } from "./AuthContext/AuthContext";
import { useMutation } from "react-query";
import { editUser } from "../../handleUsers/handleUsers";
import { UserInterface } from "../../Interfaces/UserInterface";

export type CartContextType = {
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
    cartTotal: number,
    handleQuantityIncrease: (item:CartItemInterface)=>void,
    handleQuantityDecrease: (item:CartItemInterface)=>void,
    removeItemFromCart: (item:CartItemInterface)=> void,
    addToCart: (data:BookInterface, quantity:number) => void,
    cartQuantity: number
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: ()=>{},
    cartTotal: 0,
    handleQuantityIncrease: ()=>{},
    handleQuantityDecrease: ()=>{},
    removeItemFromCart: ()=>{}, 
    addToCart: ()=>{},
    cartQuantity: 0
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
    const [cartQuantity, setCartQuantity] = useState(0)

    useEffect(()=>{
        setCartQuantity(cart.reduce(getCartQuantity, 0))
    })
   
    useEffect(()=>{
        setCartTotal(cart.reduce(getCartTotal, 0))
    }, [cart])

    const getCartTotal = (accumulator:number, currentValue: CartItemInterface) => {
        return Math.round((accumulator + currentValue.price * currentValue.quantity)*100) /100
    }

    const getCartQuantity = (accumulator:number, currentValue: CartItemInterface) => {
        return (accumulator + currentValue.quantity)
    }

    useEffect(()=>{
        if(isLogged){
            const editedUser = {...user, cart: cart} as UserInterface
            editUserMutation.mutate(editedUser)
          }
    }, [cart])
    
    useEffect(()=>{
        cart? localStorage.setItem('cart', JSON.stringify(cart)) : null
    }, [cart])

    const addToCart = (data:BookInterface, quantity = 1) => {
        const cartMatch = cart.find((item) => item.id === data.id)
        cartMatch ? handleQuantityIncrease(cartMatch, quantity) : addNewBookToCart(data, quantity)  
        console.log(cart.length+1)
    }

    const addNewBookToCart = (data:BookInterface, quantity = 1) => {
        setCart([...cart, {...data, quantity: quantity}])
    }

    const handleQuantityIncrease = (item: CartItemInterface, quantity = 1)=>{
        if(item.stock >= item.quantity + 1) updateCartQuantity(item, quantity)
        if(item.stock === item.quantity) toast('All available units are in your cart')
    }

    const handleQuantityDecrease = (item: CartItemInterface)=>{
        if(item.quantity > 1) updateCartQuantity(item, -1)
        if(item.quantity === 1 ) removeItemFromCart(item)   
    }

    const updateCartQuantity = (item: BookInterface, quantity = 1) => {
        setCart(prevCart => prevCart.map(prevItem => {
          if(prevItem.id === item.id){
            return {...prevItem, quantity: prevItem.quantity + quantity};
          }
          return prevItem;
        }));
    }
    
    const removeItemFromCart = (item: CartItemInterface)=>{
        setCart(prevCart=> {
            const itemIndex = prevCart.findIndex(prevItem => prevItem.id === item.id)
            const firstHalf = [...prevCart].slice(0, itemIndex)
            const secondHalf = [...prevCart].slice(itemIndex+1)
            return [...firstHalf, ...secondHalf]
        })
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cartTotal, handleQuantityIncrease, handleQuantityDecrease, removeItemFromCart, addToCart, cartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

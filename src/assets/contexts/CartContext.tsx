import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction, useContext } from "react";
import { CartItemInterface } from "../../Interfaces/CartItemInterface";
import { BookInterface } from "../../Interfaces/BookInterface";
import { toast } from 'react-toastify'
import { AuthContext } from "./AuthContext/AuthContext";
import { useMutation, useQuery } from "react-query";
import { editUser, getUsers } from "../../handleUsers/handleUsers";
import { mergeCarts } from "../../utils/mergeCarts";

export type CartContextType = {
    cart: CartItemInterface[],
    setCart: Dispatch<SetStateAction<CartItemInterface[]>>, 
    cartTotal: number,
    handleQuantityIncrease: (item:CartItemInterface)=>void,
    handleQuantityDecrease: (item:CartItemInterface)=>void,
    removeItemFromCart: (item:CartItemInterface)=> void,
    addToCart: (data:BookInterface) => void
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: ()=>{},
    cartTotal: 0,
    handleQuantityIncrease: ()=>{},
    handleQuantityDecrease: ()=>{},
    removeItemFromCart: ()=>{}, 
    addToCart: ()=>{}
});

type CartContextProviderProps = {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const editUserMutation = useMutation(editUser)
    const getUsersMutation = useMutation(getUsers)
    
    const { isLogged, user } = useContext(AuthContext)
    
    const localCart = localStorage.getItem('cart')
    const initialCart = localCart? JSON.parse(localCart) : []
    const [cart, setCart] = useState<CartItemInterface[]>(initialCart);
    const [cartTotal, setCartTotal] = useState(0)

   
    //Chequear primero si hay items en el cart
    useEffect(()=>{
        setCartTotal(cart.reduce(getCartTotal, 0))
    }, [cart])

    const getCartTotal = (accumulator:number, currentValue: CartItemInterface) => {
        return Math.round((accumulator + currentValue.price * currentValue.quantity)*100) /100
    }

    useEffect(()=>{
        if(isLogged){
            const editedUser = {...user, cart: cart}
            editUserMutation.mutate(editedUser)
          }
    }, [cart])

    useEffect(()=>{
        if(isLogged){
            const updateCart = async()=>{
                const users = await getUsers()
                const currentUser = users.find(serverUser => serverUser.id === user.id)
                setCart(prevCart => mergeCarts(prevCart, currentUser.cart))
            }
           updateCart()
        }
    }, [isLogged])
    
    useEffect(()=>{
        cart? localStorage.setItem('cart', JSON.stringify(cart)) : null
    }, [cart])

    const addToCart = (data:BookInterface) => {

        const cartMatch = cart.find((item) => item.isbn === data.isbn)
        cartMatch ? handleQuantityIncrease(cartMatch) : addNewBookToCart(data)  
    }

    const addNewBookToCart = (data:BookInterface, quantity = 1) => {
        setCart([...cart, {...data, quantity: quantity}])
    }

    const handleQuantityIncrease = (item: CartItemInterface)=>{
        if(item.stock >= item.quantity + 1) updateCartQuantity(item)
        if(item.stock === item.quantity) toast('All available units are in your cart')
    }

    const handleQuantityDecrease = (item: CartItemInterface)=>{
        if(item.quantity > 1) updateCartQuantity(item, -1)
        if(item.quantity === 1 ) removeItemFromCart(item)   
    }

    const updateCartQuantity = (item: BookInterface, quantity = 1) => {
        setCart(prevCart => prevCart.map(prevItem => {
          if(prevItem.isbn === item.isbn){
            return {...prevItem, quantity: prevItem.quantity + quantity};
          }
          return prevItem;
        }));
    }
    
    const removeItemFromCart = (item: CartItemInterface)=>{
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

import { Dispatch, SetStateAction, createContext } from "react";
import { CartItemInterface } from "../../../Interfaces/CartItemInterface";

type AuthContextType = {
    isLogged: boolean
    user: {
        id: string,
        name: string,
        password: string,
        cart: [],
        wishlist: []
    } | null
    login: (name:string, cart:CartItemInterface[], setCart:Dispatch<SetStateAction<CartItemInterface[]>>)=> void
    logout: ()=> void,
}

export const AuthContext = createContext<AuthContextType>({
    isLogged: false,
    user: null,
    login: ()=>{},
    logout: ()=>{}
})
import { Dispatch, ReactNode, SetStateAction, useEffect, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authTypes } from "./AuthTypes"
import { AuthReducer } from "./AuthReducer"
import { UserInterface } from "../../../Interfaces/UserInterface"
import { useMutation } from "react-query"
import { editUser, getUsers } from "../../../handleUsers/handleUsers"
import { mergeCarts } from "../../../utils/mergeCarts"
import { CartItemInterface } from "../../../Interfaces/CartItemInterface"

const init = () => {
    const localUser = localStorage.getItem('user')
    const user = localUser && JSON.parse(localUser)
    return {
        isLogged: !!user,
        user
    }
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init)
    const editUserMutation = useMutation(editUser)
    
    const login = (user:UserInterface, setCart:Dispatch<SetStateAction<CartItemInterface[]>>) =>{
        localStorage.setItem('user', JSON.stringify(user))

        const updateCart = async()=>{
            const users = await getUsers()
            const currentUser = users.find((serverUser:UserInterface) => serverUser.id === user.id)
            setCart(prevCart => mergeCarts(prevCart, currentUser.cart))
        }
        updateCart()

        dispatch({type: authTypes.login, payload: user})
    }

    const logout = (setCart:Dispatch<SetStateAction<CartItemInterface[]>>) => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        setCart([])
        localStorage.setItem('cart', '')
        dispatch({ type: authTypes.logout })
    }

    useEffect(()=>{
        if(authState.isLogged){
            const jsonCart = localStorage.getItem('cart')
            const cart = jsonCart && JSON.parse(jsonCart)
            if(cart){
            const editedUser = {...authState.user, cart: [...authState.user.cart, ...cart]}
            editUserMutation.mutate(editedUser)
        }
          }
    }, [authState.isLogged])

    return (<AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>{ children }</AuthContext.Provider>)
}
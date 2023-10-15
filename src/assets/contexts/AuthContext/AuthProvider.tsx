import { ReactNode, useEffect, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authTypes } from "./AuthTypes"
import { AuthReducer } from "./AuthReducer"
import { UserInterface } from "../../../Interfaces/UserInterface"
import { useMutation, useQuery } from "react-query"
import { editUser, getUsers } from "../../../handleUsers/handleUsers"
import { mergeCarts } from "../../../utils/mergeCarts"

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
    
    const login = (user:UserInterface, cart, setCart) =>{
        localStorage.setItem('user', JSON.stringify(user))
        console.log('run')
        const updateCart = async()=>{
            const users = await getUsers()
            const currentUser = users.find(serverUser => serverUser.id === user.id)
            setCart(prevCart => mergeCarts(prevCart, currentUser.cart))
        }
        updateCart()

        dispatch({type: authTypes.login, payload: user})
    }

    const logout = (setCart) => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        setCart([])
        localStorage.setItem('cart', '')
        dispatch({ type: authTypes.logout })
    }

    useEffect(()=>{
        if(authState.isLogged){
            const cart = JSON.parse(localStorage.getItem('cart'))
            if(cart){
            const editedUser = {...authState.user, cart: [...authState.user.cart, ...cart]}
            editUserMutation.mutate(editedUser)
        }
          }
    }, [authState.isLogged])

    return (<AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>{ children }</AuthContext.Provider>)
}
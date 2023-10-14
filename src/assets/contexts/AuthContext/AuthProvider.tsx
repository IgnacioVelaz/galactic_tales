import { ReactNode, useEffect, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authTypes } from "./AuthTypes"
import { AuthReducer } from "./AuthReducer"
import { UserInterface } from "../../../Interfaces/UserInterface"
import { useMutation } from "react-query"
import { editUser } from "../../../handleUsers/handleUsers"

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

    console.log(authState)

    const login = (user:UserInterface) =>{
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: authTypes.login, payload: user})
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
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
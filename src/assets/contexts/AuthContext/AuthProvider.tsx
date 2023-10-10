import { ReactNode, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authTypes } from "./AuthTypes"
import { AuthReducer } from "./AuthReducer"

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

    console.log(authState)

    const login = (name = '') =>{
        const user = {
            id: 1,
            name
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: authTypes.login, payload: user})
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        dispatch({ type: authTypes.logout })
    }

    return (<AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>{ children }</AuthContext.Provider>)
}
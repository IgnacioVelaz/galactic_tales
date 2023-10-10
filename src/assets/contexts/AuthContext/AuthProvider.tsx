import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authTypes } from "./AuthTypes"
import { AuthReducer } from "./AuthReducer"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        isLogged: !!user,
        user
    }
}

export const AuthProvider = ({children}) => {
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
        dispatch({ type: authTypes.logout })
    }

    return (<AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>{ children }</AuthContext.Provider>)
}
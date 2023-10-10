import { useContext } from "react"
import { AuthContext } from "../assets/contexts/AuthContext/AuthContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const { isLogged } = useContext(AuthContext)

    return isLogged ? children : <Navigate to="/login" />
}
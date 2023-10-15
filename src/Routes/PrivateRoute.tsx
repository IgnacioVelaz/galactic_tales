import { ReactNode, useContext } from "react"
import { AuthContext } from "../assets/contexts/AuthContext/AuthContext"
import { Navigate } from "react-router-dom"

type PrivateRouteProps = {
    children: ReactNode
}

export const PrivateRoute = ({children}:PrivateRouteProps) => {
    const { isLogged } = useContext(AuthContext)

    return isLogged ? children : <Navigate to="/login" replace={true}/>
}
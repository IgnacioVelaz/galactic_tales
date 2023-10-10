import { createContext } from "react";

type AuthContextType = {
    authState: boolean
    login: ()=> void
    logout: ()=> void
}

export const AuthContext = createContext<AuthContextType>({
    authState: false,
    login: ()=>{},
    logout: ()=>{}
})
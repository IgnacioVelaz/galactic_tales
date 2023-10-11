import { createContext } from "react";

type AuthContextType = {
    isLogged: boolean
    user: {
        id: number,
        name: string
    } | null
    login: (name?:string)=> void
    logout: ()=> void
}

export const AuthContext = createContext<AuthContextType>({
    isLogged: false,
    user: null,
    login: ()=>{},
    logout: ()=>{}
})
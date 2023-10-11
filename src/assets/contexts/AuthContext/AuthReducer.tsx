// import { UserInterface } from "../../../Interfaces/UserInterface";
import { authTypes } from "./AuthTypes";

// interface AuthState {
//     isLogged: boolean, 
//     user?: {
//         id: number,
//         name: string
//     } | null
// }

// type AuthAction = {
//     type: string, 
//     payload: UserInterface
// }
    

export const AuthReducer = (state, action) => {
    switch(action.type){
        case authTypes.login:
            return{
                ...state,
                isLogged: true,
                user: action.payload
            }
        case authTypes.logout:
            return {
                isLogged: false
            }
        default: state
    }
}

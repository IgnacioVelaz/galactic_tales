import { authTypes } from "./AuthTypes";

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

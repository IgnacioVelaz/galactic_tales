import { Link, NavLink } from "react-router-dom"
import { BsFillHandbagFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { useContext } from "react"
import { AuthContext } from "../../assets/contexts/AuthContext/AuthContext"
import './navbar.css'
import { CartContext } from "../../assets/contexts/CartContext"


export const NavBar = ()=>{
    const { isLogged, logout } = useContext(AuthContext)
    const { setCart, cartQuantity } = useContext(CartContext)
    console.log(isLogged)
    return (
        <div className="w-full sticky bottom-0 z-10 bg-bgPrimary p-5 border-t-black border-t-2">
            <nav className="w-full">
                <ul className="flex justify-center gap-3 ">
                    <li>
                        <NavLink to="/"><button><AiFillHome className="h-8 w-8"/></button></NavLink>
                    </li>
                    <li className="relative">
                        <NavLink to="/cart"><button><BsFillHandbagFill className="h-8 w-8"/></button></NavLink>
                        <span className="
                        absolute 
                        top-0 
                        right-0 
                        flex 
                        justify-center 
                        bg-accPrimary 
                        text-xs 
                        text-cGray 
                        w-5
                        pointer-events-none ">{cartQuantity}</span>
                    </li>
                    <li>
                        {isLogged? 
                            <button className="bg-accPrimary border-cGray border-2 py-1 px-2"
                            onClick={()=> logout(setCart)}>Logout</button> :
                            <Link to="/login">
                            <button className="bg-accPrimary border-cGray border-2 py-1 px-2">Login</button>
                            </Link>
                        }
                    </li>
                    {  !isLogged &&
                    <Link to="/register">
                        <button className="bg-accPrimary border-cGray border-2 py-1 px-2">Register</button>
                    </Link>}
                </ul>
            </nav>
        </div>
    )
}


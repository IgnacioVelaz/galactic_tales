import { NavLink } from "react-router-dom"
import { BsFillHandbagFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { useContext } from "react"
import { AuthContext } from "../../assets/contexts/AuthContext/AuthContext"
import './navbar.css'


export const NavBar = ()=>{
    const { isLogged, login, logout } = useContext(AuthContext)
    console.log(isLogged)
    return (
        <div className="w-full sticky bottom-0 z-10 bg-bgPrimary p-5 border-t-black border-t-2">
            <nav className="w-full">
                <ul className="flex justify-center gap-3 ">
                    <li>
                        <NavLink to="/"><button><AiFillHome className="h-8 w-8"/></button></NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"><button><BsFillHandbagFill className="h-8 w-8"/></button></NavLink>
                    </li>
                    <li>
                        {isLogged? 
                            <button className="bg-accPrimary border-cGray border-2 py-1 px-2"
                            onClick={logout}>Logout</button> :
                            <button className="bg-accPrimary border-cGray border-2 py-1 px-2" 
                            onClick={()=> login('Vela')}>Login</button>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
}


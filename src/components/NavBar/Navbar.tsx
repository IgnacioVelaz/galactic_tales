import { NavLink } from "react-router-dom"
import { BsFillHandbagFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import './navbar.css'


export const NavBar = ()=>{
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
                </ul>
            </nav>
        </div>
    )
}


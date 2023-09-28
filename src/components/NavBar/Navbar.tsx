import { NavLink } from "react-router-dom"
import './navbar.css'

export const NavBar = ()=>{
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><button>Home</button></NavLink>
                </li>
                <li>
                    <NavLink to="/book"><button>Book</button></NavLink>
                </li>
            </ul>
        </nav>
    )
}
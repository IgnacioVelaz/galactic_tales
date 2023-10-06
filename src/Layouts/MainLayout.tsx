import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar/Navbar"

export const MainLayout = ()=>{
    return (
        <div className="min-h-screen">
            <Outlet />
            <NavBar />
        </div>
    )
}
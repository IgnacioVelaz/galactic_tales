// import { NavBar } from "../components/NavBar/Navbar"
import { Collection } from "../components/Collection/Collection"



export const HomePage = ()=>{
    return (
        <>
            {/* <NavBar /> */}
            <Collection collection="Popular"/>
            <Collection collection="Classic"/>
        </>
    )
}


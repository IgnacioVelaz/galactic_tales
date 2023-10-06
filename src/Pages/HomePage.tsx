// import { NavBar } from "../components/NavBar/Navbar"
// import { Cart } from "../components/Books/Cart/Cart"
import { Collection } from "../components/Collection/Collection"



export const HomePage = ()=>{
    return (
        <>
            {/* <NavBar /> */}
            <Collection collection="Popular"/>
            <Collection collection="Classic"/>
            {/* <Cart/> */}
        </>
    )
}


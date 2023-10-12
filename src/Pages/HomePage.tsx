import { Collection } from "../components/Collection/Collection"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SearchBar } from "../components/Search/SearchBar"





export const HomePage = ()=>{
    return (
        <>
            <SearchBar />
            <Collection collection="Popular"/>
            <Collection collection="Classic"/>
            <ToastContainer />
        </>
    )
}


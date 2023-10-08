import { Collection } from "../components/Collection/Collection"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





export const HomePage = ()=>{
    return (
        <>
            <Collection collection="Popular"/>
            <Collection collection="Classic"/>
            <ToastContainer />
        </>
    )
}


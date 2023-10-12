import { CartContent } from "../components/Cart/CartContent"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LimitedHeader } from "../components/LimitedHeader/LimitedHeader"


export const CartPage = ()=>{
    return (
        <div className="min-h-screen bg-bgPrimary relative">
            <LimitedHeader title="your cart"/>
            <CartContent />
            <ToastContainer />
        </div>
    )
}
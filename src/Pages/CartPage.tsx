import { CartContent } from "../components/Cart/CartContent"
import { ToastContainer } from 'react-toastify'
import { LimitedHeader } from "../components/LimitedHeader/LimitedHeader"
import 'react-toastify/dist/ReactToastify.css'


export const CartPage = ()=>{
    return (
        <div className="min-h-screen bg-bgPrimary relative">
            <LimitedHeader title="your cart"/>
            <CartContent />
            <ToastContainer />
        </div>
    )
}
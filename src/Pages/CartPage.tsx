import { AiOutlineArrowLeft } from "react-icons/ai"
import { CartContent } from "../components/Cart/CartContent"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const CartPage = ()=>{
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen bg-bgPrimary relative">
            <header className="flex justify-center p-4 border-b-cGray border-b-4 relative">
                <nav>
                    <button onClick={navigateBack}>
                    <AiOutlineArrowLeft className="absolute left-4 h-8 w-8 bottom-[50%] translate-y-[50%]" />
                    </button>
                </nav>
                <h1 className="text-2xl uppercase">Your Cart</h1>
            </header>
            <CartContent />
            <ToastContainer />
        </div>
    )
}
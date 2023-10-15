import { LimitedHeader } from "../components/LimitedHeader/LimitedHeader"
import { RegisterForm } from "../components/RegisterForm/RegisterForm"
import { ToastContainer } from "react-toastify"



export const RegisterPage = ()=> {
  return (
    <div className="bg-bgPrimary flex flex-col">
      <LimitedHeader title="Register" />
      <div className="justify-center flex items-center h-[90vh]">
        <RegisterForm />
      </div>
      <ToastContainer />
    </div>
  )
}
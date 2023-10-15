import { LimitedHeader } from "../components/LimitedHeader/LimitedHeader"
import { LoginForm } from "../components/LoginForm/LoginForm"
import { ToastContainer } from 'react-toastify'




export const LoginPage = ()=> {
  return (
    <div className="bg-bgPrimary flex flex-col">
      <LimitedHeader title="Login" />
      <div className="justify-center flex items-center h-[90vh]">
        <LoginForm />
      </div>
      <ToastContainer />
    </div>
  )
}
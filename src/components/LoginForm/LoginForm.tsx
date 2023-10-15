import { useForm, SubmitHandler } from "react-hook-form"
import { useQuery } from 'react-query'
import { getUsers } from "../../handleUsers/handleUsers"
import { UserInterface } from "../../Interfaces/UserInterface"
import { useContext } from "react"
import { AuthContext } from "../../assets/contexts/AuthContext/AuthContext"
import { CartContext } from "../../assets/contexts/CartContext"
import { useNavigate } from "react-router-dom"

type Inputs = {
    name: string
    password: string
  }


export const LoginForm = () => {
    const { login } = useContext(AuthContext)
    const { setCart } = useContext(CartContext)
    const {register, handleSubmit, reset, formState: { errors }} = useForm<Inputs>({
        defaultValues: {
            name: '',
            password: ''
        }
      })

    const { isLoading, data: users, isError, error } = useQuery('users', getUsers)
    isLoading && console.log('loading')
    isError && error instanceof Error && console.log(error.message)
    users && console.log(users)
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = ({name, password}) => {
        const user = users.find((user:UserInterface) => user.name === name && user.password === password)
        if(user){
          login(user,setCart)
          setTimeout(()=> navigate(-1),2000)
        }
        {!user && console.log('Wrong username or password')}
        reset()
      }

    return (
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4 bg-white shadow-solidS border-cGray border-2 flex-none"
        >
          <div className="flex flex-col p-4">
            <label>Name:</label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "User name is required",
                },
              })}
              placeholder="Username"
            />
            {errors.name && (
              <p className="text-red-700 text-xs">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col p-4 flex-none">
            <label>Password:</label>
            <input
              className="max-w-sm"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-700 text-sm flex-none max-w-[220px]">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 uppercase flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center text-cGray"
          >
            Login
          </button>
        </form>
      </div>
    );
}
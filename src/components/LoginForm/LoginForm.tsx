import { useForm, SubmitHandler } from "react-hook-form"
import { useQuery } from 'react-query'
import { getUsers } from "../../handleUsers/handleUsers"
import { UserInterface } from "../../Interfaces/UserInterface"
import { useContext } from "react"
import { AuthContext } from "../../assets/contexts/AuthContext/AuthContext"
import { CartContext } from "../../assets/contexts/CartContext"

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

    // Set inside custom hook ? It must be called only after submitting the form   
    const { isLoading, data: users, isError, error } = useQuery('users', getUsers)
    isLoading && console.log('loading')
    isError && error instanceof Error && console.log(error.message)
    users && console.log(users)
    // End of the thing mentioned above

    const onSubmit: SubmitHandler<Inputs> = ({name, password}) => {
        const user = users.find((user:UserInterface) => user.name === name && user.password === password)
        {user && login(user, setCart)}
        {!user && console.log('Wrong username or password')}
        reset()
      }

    return (
        <div className="flex flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 bg-white shadow-solidS border-cGray border-2 flex-none">
            <div className="flex flex-col p-4">
              <label>Name:</label>
              <input 
              {...register("name", {
                      required: {
                      value: true,
                      message: 'User name is required'
                  }, 
                  })} 
              placeholder="Username" 
              />
              { errors.name && <p className="text-red-700 text-xs">{ errors.name.message }</p>}
            </div> 
            <div className="flex flex-col p-4 flex-none">
              <label>Password:</label>
              <input 
              className="max-w-sm"
              type="password"
              {...register("password", { 
                  required: {
                  value: true,
                  message: 'Password is required'
                  }, 
                  })} 
              placeholder="Password" 
              />
              { errors.password && <p className="text-red-700 text-sm flex-none max-w-[220px]">{ errors.password.message }</p> }
            </div>
            <button type="submit" className="mt-4 uppercase flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center text-cGray">Login</button>
          </form>
        </div>
      )
}
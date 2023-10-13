import { useForm, SubmitHandler } from "react-hook-form"
import { nanoid } from 'nanoid'
import { useMutation} from 'react-query'
import { createUser } from "../../handleUsers/handleUsers"


type Inputs = {
  name: string
  password: string,
  confirmpassword: string
}


export function LoginForm() {
  const createUserMutation = useMutation(createUser)

  const {register, handleSubmit, watch, reset, formState: { errors }} = useForm<Inputs>({
    defaultValues: {
        name: '',
        password: '',
        confirmpassword: ''
    }
  })

  const onSubmit: SubmitHandler<Inputs> = ({name, password}) => {
    const newUser = {
      id: nanoid(),
      name: name,
      password: password,
      cart: [],
      wishlist: []
    }
    console.log(newUser)
    
    createUserMutation.mutate(newUser)
    reset()
  }
    

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/g

  const confirmPasswordValidation = (value:string) => value === watch('password') || 'Passwords must match'


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
                  minLength: {
                  value: 4,
                  message: 'Minimum length is 4 characters'
              }, 
              maxLength: {
                  value: 16,
                  message: 'Max length is 16 characters'
              }})} 
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
              pattern: {
                  value: passwordRegex,
                  message: 'Password must contain 8-6 characters, at least 1 upper case letter, 1 lower case letter, 1 number and 1 special character'
              } })} 
          placeholder="Password" 
          />
          { errors.password && <p className="text-red-700 text-sm flex-none max-w-[220px]">{ errors.password.message }</p> }
        </div>
        <div className="flex flex-col p-4">
          <label>Confirm Password:</label>
          <input 
          type="password"
          {...register("confirmpassword", { 
              validate: confirmPasswordValidation
          })} 
          placeholder="Confirm Password" 
          />
          { errors.confirmpassword && <p className="text-red-700 text-xs">{ errors.confirmpassword.message }</p> }
        </div>
        <button type="submit" className="mt-4 uppercase flex bg-accPrimary p-4 border-2 border-cGray w-full justify-center text-cGray">Login</button>
      </form>
    </div>
  )
}

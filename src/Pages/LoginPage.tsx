import { LimitedHeader } from "../components/LimitedHeader/LimitedHeader"
import { LoginForm } from "../components/LoginForm/LoginForm"
import { getUsers } from "../handleUsers/handleUsers"
import { useQuery } from 'react-query'


export const LoginPage  = ()=> {

  const { isLoading, data: users, isError, error } = useQuery('users', getUsers)

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: { error.message }</div>

  return (
    <div className="bg-bgPrimary flex flex-col">
      <LimitedHeader title="Login" />
      <div className="justify-center flex items-center h-[90vh]">
        <LoginForm />
      </div>
      <div>
        { users.map(user=> <p key={user.id}>{user.name}</p>) }
      </div>
    </div>
  )
}
import axios from "axios"
import { UserInterface } from "../Interfaces/UserInterface"

const usersApi = axios.create({
    baseURL: "http://localhost:3000/users"
})

export const getUsers = async () => {
    const response = await usersApi.get('')
    return response.data
}

export const createUser = (user:UserInterface) => usersApi.post('', user)

export const deleteUser = (id:string) => usersApi.delete(`/${id}`)

export const editUser = (user:UserInterface) => usersApi.put(`/${user.id}`, user)



import axios from "axios"
import { UserInterface } from "../Interfaces/UserInterface"

const usersApi = axios.create({
    baseURL: "http://localhost:3000/users"
})

export const getUsers = async () => {
    const response = await usersApi.get('')
    return response.data
}

export const createUser = (user:UserInterface) => {
    usersApi.post('', user)
}
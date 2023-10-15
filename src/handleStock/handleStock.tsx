import axios from "axios"
import { BookInterface } from "../Interfaces/BookInterface"

const booksApi = axios.create({
    baseURL: "http://localhost:3000/books"
})

export const editBook = (book:BookInterface) => booksApi.put(`/${book.id}`, book)



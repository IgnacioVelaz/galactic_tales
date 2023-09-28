import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FC } from "react"
import { HomePage } from "../Pages/HomePage"
import { BookPage } from "../Pages/BookPage"


export const RouterPaths: FC = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/book" element={<BookPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
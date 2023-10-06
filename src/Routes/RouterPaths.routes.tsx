import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FC } from "react"
import { HomePage } from "../Pages/HomePage"
import { BookPage } from "../Pages/BookPage"
import { MainLayout } from "../Layouts/MainLayout"
import { CartPage } from "../Pages/CartPage"
import { NotFound } from "../Pages/NotFound"

export const RouterPaths: FC = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/books">
                        <Route path=":isbn" element={<BookPage />}/>
                    </Route>
                </Route>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


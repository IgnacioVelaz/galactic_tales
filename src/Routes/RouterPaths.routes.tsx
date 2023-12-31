import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FC } from "react"
import { HomePage } from "../Pages/HomePage"
import { BookPage } from "../Pages/BookPage"
import { MainLayout } from "../Layouts/MainLayout"
import { CartPage } from "../Pages/CartPage"
import { NotFound } from "../Pages/NotFound"
import { CheckoutPage } from "../Pages/CheckoutPage/CheckoutPage"
import { PrivateRoute } from "./PrivateRoute"
import { RegisterPage } from "../Pages/RegisterPage"
import { LoginPage } from "../Pages/LoginPage"
import { ThankYouPage } from "../Pages/ThankYouPage"


export const RouterPaths: FC = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/books">
                        <Route path=":title" element={<BookPage />}/>
                    </Route>
                </Route>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="/checkout" element={
                <PrivateRoute>
                    <CheckoutPage />
                </PrivateRoute> }
                />
                <Route path="/thankyou" element={
                <PrivateRoute>
                    <ThankYouPage />
                </PrivateRoute> }
                />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}


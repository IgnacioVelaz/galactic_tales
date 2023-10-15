import { BookInterface } from "./BookInterface";
import { CartItemInterface } from "./CartItemInterface";

export interface UserInterface{
    id: string,
    name: string, 
    password: string,
    cart: [] | CartItemInterface[],
    wishlist: [] | BookInterface
}
export interface CartItemInterface{
    isbn: number,
    title: string,
    author: string,
    comparePrice: string,
    price: number,
    description: string,
    images: string[],
    pages: number,
    rating: number,
    reviews: [number] | [] | never[],
    stock: number, 
    collections: [] | string[] | never[], 
    quantity: number
}
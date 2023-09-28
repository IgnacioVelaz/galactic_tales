export interface BookInterface{
    isbn: number,
    title: string,
    author: string,
    comparePrice: string,
    price: string,
    description: string,
    images: string[],
    pages: number,
    rating: number,
    reviews: [number] | [] | never[],
    stock: number 
}
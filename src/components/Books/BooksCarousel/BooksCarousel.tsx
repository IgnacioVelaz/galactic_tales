import { BookCard } from "../BookCard/BookCard"
import { FC } from "react";
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { BookInterface } from "../../../Interfaces/BookInterface";

import 'swiper/css'
import 'swiper/css/pagination';

type BooksCarouselProps = {
    booksArray: BookInterface[]
}

export const BooksCarousel:FC<BooksCarouselProps> = ({booksArray})=>{
    const booksCards = booksArray.map(book=>{
        return (
            <SwiperSlide key={book.isbn} className="flex justify-center p-10">
                <BookCard book={book}/>
            </SwiperSlide>
        )
    })

    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ dynamicBullets: true }}
        >
            {booksCards}
        </Swiper>
    )
}


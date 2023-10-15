export const HeroSection = () =>{
    const scrollToCollections = () =>{
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className="bg-bgPrimary p-4 pt-8 pb-10">
            <h2 className="uppercase text-4xl font-bold pr-4 ff-secondary">Find your next adventure!</h2>
            <p className="uppercase text-sm text-gray-500 mt-2">In the ultimate sci-fi only bookstore</p>
            <button className="
                    uppercase 
                    font-semibold 
                    bg-accPrimary 
                    mt-2 
                    px-6 
                    py-2 
                    text-sm 
                    border 
                    border-cGray 
                    shadow-solidXS
                    "
                    onClick={scrollToCollections}>Start exploring</button>
            <img src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1697408570/hero-image_cqj4bd.png" alt="Sci fi book illustration" />
        </div>
    )
}
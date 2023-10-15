import { Collection } from "../components/Collection/Collection"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SearchBar } from "../components/Search/SearchBar"
import { useFetch } from "../Hooks/useFetch"
import { BookInterface } from "../Interfaces/BookInterface"
import { HeroSection } from "../components/HeroSection/HeroSection"





export const HomePage = ()=>{
    const { data, state, error  } = useFetch<BookInterface[]>("http://localhost:3000/books")

    if(state === "loading" || state === "idle"){
        return <p>Loading...</p>
    }
    
    if(state === "error" || !data){
        return <p>{error?.message}</p>
    }

    return (
        
        <>
            <SearchBar data={data} />
            <HeroSection />
            <Collection collection="Popular" data={data} />
            <Collection collection="Classic" data={data} />
            <ToastContainer />
        </>
    )
}


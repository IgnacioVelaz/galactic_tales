import { useEffect, useState } from "react"

type UseFetchState<T> = {
    state: "idle" | "loading" | "error" | "success",
    data: null | T
    error: null | Error
}

export const useFetch = <T>(url: string):UseFetchState<T> =>{
    const [ fetchState, setFetchState ] = useState<UseFetchState<T>>({
        state: "idle",
        data: null,
        error: null
    })

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                setFetchState(prev => ({
                    ...prev,
                    state: "loading"
                }))
                const response = await fetch(url)
                if(response.ok) {
                    const json = await response.json()
                    setFetchState({
                        data: json,
                        state: "success",
                        error: null
                    })
                }
                if(!response.ok){
                    setFetchState({
                        data: null,
                        state: "error",
                        error: new Error(response.statusText)
                    })
                }
            
            } catch(error) {
                setFetchState({
                    data: null,
                    state: "error",
                    error: error as Error
                })
            }
        }
        fetchData()
    }, [url])

    return fetchState
}
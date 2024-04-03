import axios from "axios"
import { useEffect, useState } from "react"
import { MainNews } from "../components/organisms/MainNews"

export default function HomePage(){
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee21e6af2944c69a75046c9cf40e088')
                setData(response.data)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])


    return(
        <>
        <div className="pt-20 px-[5%]">
            <div className="rounded-lg bg-neutral-100 py-5 w-full text-center mb-7">
                <h1 className="tracking-widest text-sm">Welcome to Beenews</h1>
                <h1 className="font-bold">Your Gateway to <span className="text-sky-700">Smart</span> News Consumption</h1>
            </div>
            <MainNews/>
        </div>
        </>
    )
}
/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

export function MainNews(){
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ counter, setCounter ] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee21e6af2944c69a75046c9cf40e088')
                setData(response.data.articles[counter])
                setLoading(false)
            } catch(err){
                console.log(err)
                setLoading(false)
            }
        }

        fetchData()
    }, [counter])

    function handleNextNews(){
        setCounter(counter + 1)
        setLoading(true)
    }
    function handlePrevNews(){
        if(counter == 0){
            return
        }
        setCounter(counter - 1)
        setLoading(true)
    }


    if(loading){
        return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between">
            <h1 className="font-semibold">TOP HEADLINES 🔥</h1>
                <div className="flex gap-3">
                <IoMdArrowDropleft 
                onClick={handlePrevNews}
                className="border-2 border-sky-700 rounded-full text-2xl text-sky-700"/>
                <IoMdArrowDropright 
                onClick={handleNextNews}
                className="border-2 border-sky-700 rounded-full text-2xl text-sky-700"/>
                </div>
            </div>
            
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full h-44 bg-neutral-400 animate-pulse relative border-2 rounded-lg overflow-hidden shadow-sm md:w-96">
                </div>
                <div>
                    <p className="text-xs bg-neutral-300 animate-pulse rounded-md py-2 w-20 md:w-32">
                        
                    </p>
                    <h1 className="font-semibold mt-1 bg-neutral-300 animate-pulse rounded-md py-2 w-full md:w-60"></h1>
                    <p className="text-sm mt-2 bg-neutral-200 animate-pulse rounded-md py-4 w-full"></p>
                    <button className="mt-2 text-sky-600 border-b-2 border-sky-600 text-xs">Read Now</button>
                </div>
            </div>
            
        </div>
        )
    }

    return(
        <>
        <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between">
                <h1 className="font-semibold">TOP HEADLINES 🔥</h1>
                <div className="flex gap-3">
                    <IoMdArrowDropleft 
                    onClick={handlePrevNews}
                    className="border-2 border-sky-600 rounded-full text-2xl text-sky-600"/>
                    <IoMdArrowDropright 
                    onClick={handleNextNews}
                    className="border-2 border-sky-600 rounded-full text-2xl text-sky-600"/>
                </div>
            </div>
            
            <div className="flex flex-col mt-1 gap-5 md:flex-row">
                <div className="w-full h-44 relative border-2 rounded-lg overflow-hidden shadow-sm md:h-52 md:w-96">
                    <img 
                    src={data.urlToImage}
                    alt=""
                    className="w-full h-full absolute object-cover" 
                    />
                </div>
                <div className="md:w-80">
                    <p className="text-xs text-neutral-700">
                        {data && data.source.name && data.source.name} - {data.publishedAt.substr(0,10)}
                    </p>
                    <h1 className="font-semibold mt-1 text-base md:font-bold md:mt-2">{data.title}</h1>
                    <p className="text-sm mt-2">{data.description}</p>
                    <button className="mt-2 text-sky-600 border-b-2 border-sky-600 text-xs md:mt-4">Read Now</button>
                </div>
            </div>
            
        </div>
        </>
    )
}
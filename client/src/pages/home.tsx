import { useEffect, useState } from "react"
import InfoCard from "../components/InfoCard"
import Nav from "../components/Nav"
import Antares from "../helpers/Antares"
import "./Home.css"

function Home() {

    const [ airQuality, setAirQuality ] = useState("0")
    const [ data, setData ] = useState(["-", "-", "-", "-", "-", "-"])
    const [ error, setError ] = useState("null")

    useEffect(() => {
        Antares().then(res => {
            if (res.message === "error") setError(res.error)
            setAirQuality(res.body[6])
            setData(res.body.slice(0,6))
        })
    }, [data])

    if (error !== "null") {
        return(
            <p className="flex justify-center items-center h-screen font-bold text-lg">{error}!</p>
        )
    }

    return(
        <div id={`quality-${airQuality}`}>
            <Nav AirQuality={airQuality} /> 
            <InfoCard data={data} />
        </div>
    )
}

export default Home
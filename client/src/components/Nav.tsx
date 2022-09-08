import brandLogo from "../icons/Brand-Logo.png"
import "./Nav.css"

const AirQualityText = ["-", "Baik", "Sedang", "Tidak Sehat", "Sangat Tidak Sehat", "Berbahaya"]

function Nav(props: { AirQuality: string }) {
    return(
        <nav className="py-5 px-8 flex justify-between">
            <div className="flex items-center">
                <img 
                    className="w-16 inline-block"
                    src={brandLogo}
                    alt="shown brand logo of Air Pollution Dashboard" />            
                <h1 className="inline-block font-semibold text-sm w-24 ml-3">Air Pollution Dashboard</h1>
            </div>
            <div className="text-right float-right">
                <p className="text-xs">Kualitas udara</p>
                <p className="text-lg font-bold">{AirQualityText[Number(props.AirQuality)]}</p>
                <div className="rounded-lg h-3 w-24 mt-1 color-code"></div>
            </div>
        </nav>
    )
}

export default Nav
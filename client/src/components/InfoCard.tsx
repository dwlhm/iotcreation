import Location from "../icons/Location"
import Cloud from "../icons/Cloud"
import "./InfoCard.css"

function InfoCard(props: { data: string[]}) {
    return(
        <div id="info-card" className="rounded-lg m-5 mt-0 mb-2 p-6 relative overflow-hidden">
            <div className="relative z-10">
                <div>
                    <p className="flex items-center text-xs text-white mb-1">
                        <Location classes="w-5 h-5 pr-2" />Unit monitoring terdekat:
                    </p>
                    <p className="text-xl font-semibold text-white">Kota Tasikmalaya</p>
                </div>
                <div className="my-5">
                    <h2 className="text-2xl font-semibold text-white">Partikulat di udara</h2>
                    <div className="my-3">
                        <div className="bg-white rounded-lg shadow inline-block w-34 p-4 mr-3 mb-3">
                            <p className="text-base font-semibold">PM 1.0</p>
                            <div className="font-bold">
                                <p className="text-3xl inline-block px-3 my-4">{props.data[0]}</p>
                                <p className="text-xs inline-block">µg/m3</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow inline-block w-34 p-4 mr-3 mb-3">
                            <p className="text-base font-semibold">PM 2.5</p>
                            <div className="font-bold">
                                <p className="text-3xl inline-block px-3 my-4">{props.data[1]}</p>
                                <p className="text-xs inline-block">µg/m3</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow inline-block w-34 p-4 mr-3 mb-3">
                            <p className="text-base font-semibold">PM 10</p>
                            <div className="font-bold">
                                <p className="text-3xl inline-block px-3 my-4">{props.data[2]}</p>
                                <p className="text-xs inline-block">µg/m3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                <div className="my-10">
                    <h2 className="text-2xl font-semibold text-white">Suhu & Kelembaban Udara</h2>
                    <div className="my-3">
                        <div className="bg-white rounded-lg shadow inline-block w-full sm:w-80 p-4 mr-3">
                            <div className="inline-block border-r-2 border-slate-500 pr-5">
                                <p className="text-base font-semibold">Suhu</p>
                                <div className="font-bold">
                                    <p className="text-3xl inline-block px-3 my-4">{props.data[3]}</p>
                                    <p className="text-xs inline-block">°C</p>
                                </div>
                            </div>
                            <div className="inline-block pl-5">
                                <p className="text-base font-semibold">Kelembaban</p>
                                <div className="font-bold">
                                    <p className="text-3xl inline-block px-3 my-4">{props.data[4]}</p>
                                    <p className="text-xs inline-block">%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 ml-0 sm:ml-5">
                    <h2 className="text-2xl font-semibold text-white">Kecepatan Angin</h2>
                    <div className="my-3">
                        <div className="bg-white rounded-lg shadow inline-block w-full sm:w-52 p-4 mr-3">
                            <div className="inline-block pr-5">
                                <div className="font-bold">
                                    <p className="text-3xl inline-block px-3 my-4">{props.data[5]}</p>
                                    <p className="text-xs inline-block">m/s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="clouds" className="z-0">
                <Cloud classes="w-20 h-20 absolute cloud-1" />
                <Cloud classes="w-10 h-10 absolute cloud-2" />
            </div>
        </div>
    )
}

export default InfoCard
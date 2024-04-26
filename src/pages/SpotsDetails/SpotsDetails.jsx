import { useLoaderData } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";

const SpotsDetails = () => {
    const spots = useLoaderData();
    const { _id, names, photo, country, location, seasonality, cost, time, visitors, name, email, description } = spots;

    return (
        <div className="max-w-6xl mx-auto">
            <div className=" my-10">
                <div className="flex gap-5 flex-col-reverse lg:flex-row">
                    <div className="space-y-5">
                        <div className="flex gap-8 items-center font-bold">
                            <h2 className="text-4xl ">{names}</h2>
                            <p className="text-xl"><span className="text-cyan-500">{cost}</span> /person</p>
                        </div>
                        <p>{description}</p>
                        <div className="space-x-4">
                            <button className="btn text-base bg-cyan-400 text-white rounded-none">
                                <ImLocation2></ImLocation2>
                                {location}
                            </button>
                            <button className="btn text-base bg-cyan-400 text-white rounded-none">
                                <SlCalender></SlCalender>
                                {time}
                            </button>
                        </div>
                        <div className="max-w-xl pb-5">
                            <table className="table text-base">

                                <tbody>

                                    <tr className="">
                                        <td className="font-bold">Country</td>
                                        <td>{country}</td>
                                    </tr>
                                    <tr >
                                        <td className="font-bold">Visitors Per Year</td>
                                        <td>{visitors}</td>
                                    </tr>
                                    <tr >
                                        <td className="font-bold">Seasonality</td>
                                        <td>{seasonality}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="">
                        <img className="lg:max-w-2xl rounded-xl" src={photo} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpotsDetails;
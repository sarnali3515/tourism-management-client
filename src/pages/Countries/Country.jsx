import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";


const Country = () => {

    const spots = useLoaderData();
    console.log(spots)

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 max-w-6xl mx-auto">
            {
                spots.map(spot => <div className="flex card-wrapper" key={spot._id}>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img className="lg:h-48 lg:w-full" src={spot.photo} alt="spots" /></figure>
                        <div className="flex justify-between bg-cyan-500  text-white p-2">
                            <div className="flex items-center gap-2">
                                <ImLocation2></ImLocation2>
                                <p>{spot.location}, {spot.country}</p>
                            </div>

                        </div>
                        <div className="card-body flex-grow">
                            <div className="flex justify-between">
                                <h2 className="card-title font-bold">
                                    {spot.names}
                                </h2>

                            </div>

                            <div className="card-actions justify-between">

                                <div ><span className="font-semibold">Seasonality:</span> {spot.seasonality}</div>
                                <div ><span className="font-semibold">Average Cost:</span> {spot.cost}</div>
                                <div className="flex items-center gap-2">
                                    <SlCalender></SlCalender>
                                    <p>{spot.time}</p>
                                </div>

                            </div>
                            <Link to={`/spots/${spot._id}`}><div className="badge  text-cyan-500 badge-outline">View Details</div></Link>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Country;
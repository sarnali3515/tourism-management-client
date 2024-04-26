import { ImLocation2 } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const TouristSpots = ({ spot }) => {

    const { _id, names, photo, country, location, seasonality, cost, time, visitors, name, email, description } = spot;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="lg:h-60 lg:w-full" src={photo} alt="spots" /></figure>
            <div className="flex justify-between bg-cyan-500  text-white p-2">
                <div className="flex items-center gap-2">
                    <ImLocation2></ImLocation2>
                    <p>{location}</p>
                </div>
                <div className="flex items-center gap-2">
                    <SlCalender></SlCalender>
                    <p>{time}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {names}

                </h2>
                {description.length > 80 ?
                    <p>{description.slice(0, 80)} <Link
                        className="text-blue-600 font-semibold"
                        to={`/spots/${_id}`}
                    >See More...</Link></p>
                    :
                    <p>{description}</p>
                }
                <div className="card-actions justify-between">
                    <div className="font-semibold">{cost}/Person</div>
                    <Link to={`/spots/${_id}`}><div className="badge  text-cyan-500 badge-outline">View Details</div></Link>
                </div>
            </div>
        </div>

    );
};

export default TouristSpots;
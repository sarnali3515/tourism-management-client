import { useLoaderData } from "react-router-dom";
import AllTouristSpot from "./AllTouristSpot";


const AllTouristSpots = () => {
    const loadedSpots = useLoaderData();
    return (
        <div>
            <div className="grid mt-8 md:mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {
                    loadedSpots.map(spot => <AllTouristSpot
                        key={spot._id}
                        spot={spot}
                    ></AllTouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllTouristSpots;
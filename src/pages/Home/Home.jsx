import { useLoaderData } from "react-router-dom";
import TouristSpots from "./TouristSpots";


const Home = () => {

    const loadedSpots = useLoaderData();


    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl">This is Home</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    loadedSpots.map(spot => <TouristSpots
                        key={spot._id}
                        spot={spot}
                    ></TouristSpots>)
                }
            </div>
        </div>
    );
};

export default Home;
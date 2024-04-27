import { useLoaderData } from "react-router-dom";
import TouristSpots from "./TouristSpots";
import Banner from "./Banner";

const Home = () => {
    const loadedSpots = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            {
                loadedSpots.length > 0 &&
                <div className="grid mt-8 md:mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        loadedSpots.slice(0, 6).map(spot => <TouristSpots
                            key={spot._id}
                            spot={spot}
                        ></TouristSpots>)
                    }
                </div>
            }
            {
                loadedSpots.length === 0 &&
                <p>No tourist spots available.</p>
            }
        </div>
    );
};

export default Home;

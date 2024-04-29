import { useLoaderData } from "react-router-dom";
import TouristSpots from "./TouristSpots";
import Banner from "./Banner";
import Countries from "../Countries/Countries";
import Reviews from "../Reviews/Reviews";
import TravelTips from "../TravelTips/TravelTips";

const Home = () => {
    const loadedSpots = useLoaderData();
    console.log(loadedSpots)

    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <div className="text-center  mt-10">
                <h1 className="text-xl md:text-4xl font-bold my-4 text-center">Wonder Spots</h1>
                <p className="px-2 md:px-32">Experience the essence of travel as you discover enchanting tourist spots filled with history, culture, and breathtaking scenery. Let each destination captivate your senses and inspire your wanderlust.</p>

            </div>
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
            <div>
                <div className="text-center space-y-3 my-10">
                    <h1 className="text-xl md:text-3xl font-bold my-4 text-center">Explore All the Countries</h1>
                    <p className="px-2 md:px-32">Discover the beauty of different cultures, cuisines, and landscapes as you traverse the globe. Start your exploration today and create memories that will last a lifetime.</p>
                </div>
                <Countries></Countries>
            </div>
            <div>
                <div className="text-center space-y-3 my-10">
                    <h1 className="text-xl md:text-3xl font-bold">Traveling tips</h1>

                </div>
                <TravelTips></TravelTips>
            </div>
            <div>
                <div className="text-center space-y-3 mt-10">
                    <h1 className="text-xl md:text-3xl font-bold">Reviews and Ratings</h1>
                    <p className="px-2 md:px-32">Discover unforgettable experiences and hidden gems through the eyes of our visitors. Dive into their stories and be inspired to embark on your next adventure.</p>
                </div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;

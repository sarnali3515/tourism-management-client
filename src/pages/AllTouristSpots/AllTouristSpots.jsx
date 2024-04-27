import { useLoaderData } from "react-router-dom";
import AllTouristSpot from "./AllTouristSpot";
import { IoMdArrowDropdown } from "react-icons/io";


const AllTouristSpots = () => {
    const loadedSpots = useLoaderData();
    return (
        <div>
            <div className="text-center mt-8">
                <div className="dropdown dropdown-bottom b">
                    <div tabIndex={0} role="button" className="btn m-1 bg-cyan-500 text-white"><IoMdArrowDropdown></IoMdArrowDropdown>Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-cyan-700 font-semibold"><a>Average Cost</a></li>
                    </ul>
                </div>
            </div>
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
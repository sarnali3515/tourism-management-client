import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllTouristSpot from "./AllTouristSpot";
import { IoMdArrowDropdown } from "react-icons/io";

const AllTouristSpots = () => {
    const loadedSpots = useLoaderData();
    const [sortBy, setSortBy] = useState(null);

    // Function to sort spots by average cost
    const sortByCost = () => {
        const sortedSpots = [...loadedSpots].sort((a, b) => parseInt(a.cost) - parseInt(b.cost));
        setSortBy(sortedSpots);
    };

    return (
        <div>
            <div className="text-center mt-8">
                <div className="dropdown dropdown-bottom b">
                    <div tabIndex={0} role="button" className="btn m-1 bg-cyan-500 text-white">
                        <IoMdArrowDropdown />
                        Sort By
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* Add onClick handler to sort by cost */}
                        <li className="text-cyan-700 font-semibold" onClick={sortByCost}>
                            <a>Average Cost</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid mt-8 md:mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {/* Display sorted or unsorted spots based on sorting */}
                {(sortBy || loadedSpots).map((spot) => (
                    <AllTouristSpot key={spot._id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;

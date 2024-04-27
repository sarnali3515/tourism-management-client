import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const MyList = () => {


    const { user } = useContext(AuthContext)
    const spots = useLoaderData();
    console.log(spots);


    return (
        <div>
            {
                spots.map(spot =>
                    <div
                        key={spot.id}>{spot.email}, {spot.names}</div>)
            }
        </div>
    );
};
export default MyList;
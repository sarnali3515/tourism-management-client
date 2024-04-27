import { useLoaderData } from "react-router-dom";

const UpdateSpots = () => {
    const spots = useLoaderData();
    const { _id, names, photo, country, location, seasonality, cost, time, visitors, name, email, description } = spots;

    return (
        <div>
            <h1>{names}</h1>
        </div>
    );
};

export default UpdateSpots;
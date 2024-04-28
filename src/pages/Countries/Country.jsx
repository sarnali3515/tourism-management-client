
import { useLoaderData } from "react-router-dom";


const Country = () => {

    const countries = useLoaderData();
    console.log(countries)

    return (
        <div>
            {
                countries.map(country => <p key={country._id}>
                    {country.names}{country.country}
                </p>)
            }
        </div>
    );
};

export default Country;
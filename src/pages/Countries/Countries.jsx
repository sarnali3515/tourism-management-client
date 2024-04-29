import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map(country => (
                <div key={country.id} className="flex card-wrapper">
                    <Link to={`/spotsCountry/${country.country}`}>
                        <div className="flex flex-col h-full w-full bg-base-100 border-2 border-cyan-500">
                            <figure>
                                <img className="lg:h-60 lg:w-full" src={country.photo} alt="spots" />
                            </figure>
                            <div className="card-body flex-grow">
                                <h2 className="card-title border-b-4 border-cyan-500 text-3xl font-bold">
                                    {country.country}
                                </h2>
                                <p className="border-l-4 border-cyan-500 pl-2 font-semibold">{country.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Countries;

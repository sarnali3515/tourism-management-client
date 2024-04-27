import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdEdit, MdOpenInFull } from "react-icons/md";



const MyList = () => {


    const { user } = useContext(AuthContext)
    const loadedSpots = useLoaderData();

    const [spots, setSpots] = useState(loadedSpots);

    const handleDelete = id => {
        //make sure-------------
        fetch(`http://localhost:5000/spots/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    // remove from UI
                    const remainingSpots = spots.filter(spot => spot._id !== id);
                    setSpots(remainingSpots);
                }
            })
    }


    return (
        <div >
            <h2 className="text-3xl text-center mt-8 font-bold">My Tourist Spots List </h2>
            <div className="overflow-x-auto px-5">
                <table className="table bg-cyan-50 mt-5">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-black text-lg">
                            <th ></th>
                            <th >Tourist Spot Name </th>
                            <th >Location </th>
                            <th >Country </th>
                            <th >Average Cost </th>
                            <th ></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            spots.map(spot =>
                                user.email === spot.email &&
                                <tr key={spot._id}>
                                    <th>1</th>
                                    <td>{spot.names} </td>
                                    <td>{spot.location} </td>
                                    <td>{spot.country}</td>
                                    <td>{spot.cost}</td>
                                    <td>
                                        <Link to={`/spots/${spot._id}`}> <button className="btn btn-outline btn-primary"><MdOpenInFull></MdOpenInFull>View</button></Link>
                                    </td>

                                    <td>
                                        <button className="btn btn-info"><MdEdit></MdEdit>Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(spot._id)} className="btn btn-error">X  Delete</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyList;
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdEdit, MdOpenInFull } from "react-icons/md";
import Swal from "sweetalert2";



const MyList = () => {


    const { user } = useContext(AuthContext)
    const loadedSpots = useLoaderData();

    const [spots, setSpots] = useState(loadedSpots);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://tourism-management-server-pearl.vercel.app
/spots/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tourist Spots has been deleted.",
                                icon: "success"
                            });
                            const remainingSpots = spots.filter(spot => spot._id !== id);
                            setSpots(remainingSpots);
                        }
                    })
            }
        });
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
                                    <td>${spot.cost}</td>
                                    <td>
                                        <Link to={`/spots/${spot._id}`}> <button className="btn btn-outline btn-primary"><MdOpenInFull></MdOpenInFull>View</button></Link>
                                    </td>

                                    <td>
                                        <Link to={`/update/${spot._id}`}> <button className="btn btn-info"><MdEdit></MdEdit>Update</button></Link>

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
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { MdEdit } from "react-icons/md";


const MyList = () => {


    const { user } = useContext(AuthContext)
    const spots = useLoaderData();
    console.log(spots);


    return (
        <div >

            <div className="overflow-x-auto px-5">
                <table className="table bg-cyan-50 mt-8">
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
                                        <button className="btn btn-info"><MdEdit></MdEdit>Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-error">X  Delete</button>
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
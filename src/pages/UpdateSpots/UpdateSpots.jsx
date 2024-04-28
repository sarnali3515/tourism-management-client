import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpots = () => {
    const spots = useLoaderData();
    const { _id, names, photo, country, location, seasonality, cost, time, visitors, description } = spots;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const names = form.names.value;
        const photo = form.photo.value;
        const country = form.country.value;
        const location = form.location.value;
        const seasonality = form.seasonality.value;
        const cost = form.cost.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const description = form.description.value;

        const updateSpot = { names, photo, country, location, seasonality, cost, time, visitors, description };
        console.log(updateSpot);

        // send data to server
        fetch(`http://localhost:5000/spots/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
            })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-bold my-4">Update Information of {names},{country}</h2>
            <div className='bg-cyan-100 p-4 rounded-lg'>
                <form onSubmit={handleUpdate}>
                    {/* form row spot name photo */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" defaultValue={names} placeholder="Tourist Spot Name" name="names" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL"
                                defaultValue={photo} className="input input-bordered w-full" required />
                        </div>

                    </div>
                    {/* form row country name, location */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className='label'>
                                <span className="label-text">Country Name</span>
                            </label>
                            <select name="country" defaultValue={country} className="select mb-0 select-bordered  w-full ">
                                <option disabled>Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>VietNam</option>
                                <option>Cambodia</option>
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" defaultValue={location} className="input input-bordered w-full" required />

                        </div>

                    </div>
                    {/* form row category and details*/}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="seasonality" placeholder="Seasonality" defaultValue={seasonality} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" placeholder="Average Cost" defaultValue={cost} className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* form photo url row */}
                    <div className="flex mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="time" placeholder="Travel Time" defaultValue={time} className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" name="visitors" placeholder="Total Visitors Per Year" defaultValue={visitors} className="input input-bordered w-full" required />

                        </div>
                    </div>

                    {/* form photo url row */}
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Short Description" defaultValue={description} className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <input className="btn btn-block bg-cyan-600 text-white" type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateSpots;
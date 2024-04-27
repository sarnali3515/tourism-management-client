import Swal from 'sweetalert2'

const AddSpots = () => {
    const handleAddSpots = e => {
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
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;

        const newSpot = { names, photo, country, location, seasonality, cost, time, visitors, name, email, description };
        console.log(newSpot);

        // send data to server
        fetch('http://localhost:5000/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-bold my-4">Add Tourist spots You Visited</h2>
            <div className='bg-cyan-100 p-4 rounded-lg'>
                <form onSubmit={handleAddSpots}>
                    {/* form row spot name photo */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot Name" name="names" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>

                    </div>
                    {/* form row country name, location */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />

                        </div>

                    </div>
                    {/* form row category and details*/}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* form photo url row */}
                    <div className="flex mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="time" placeholder="Travel Time" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" name="visitors" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    {/* form photo url row */}
                    <div className="flex mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" name="name" placeholder="User name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    {/* form photo url row */}
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <input className="btn btn-block bg-cyan-600 text-white" type="submit" value="Add Spot" />
                </form>
            </div>
        </div>
    );
};

export default AddSpots;
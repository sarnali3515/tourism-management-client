

const AddSpots = () => {
    const handleAddSpots = e => {
        e.preventDefault();
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl">Add Spots</h2>
            <div>
                <form onSubmit={handleAddSpots}>
                    {/* form row spot name photo */}
                    <div className="md:flex mb-6 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot Name" name="names" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
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
                        <div className="form-control md:w-1/2 ml-4">
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
                        <div className="form-control md:w-1/2 ml-4">
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
                        <div className="form-control md:w-1/2 ml-4">
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
                        <div className="form-control md:w-1/2 ml-4">
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

                    <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Add Spot" />
                </form>
            </div>
        </div>
    );
};

export default AddSpots;
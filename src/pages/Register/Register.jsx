
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="lg:p-5">
            <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/ydpGCgJ/andrew-coelho-m6t-Aq-Zvy4-RM-unsplash.jpg)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                <div className="hero-content lg:w-1/2 text-center">
                    <div className="w-full">
                        <div className="w-full rounded-lg shadow-2xl bg-indigo-100">
                            <h1 className="text-center font-bold text-4xl pt-2">Register</h1>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>

                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
                                            className="input input-bordered w-full"
                                            required />
                                        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-indigo-700 text-white">Register</button>
                                </div>
                            </form>

                            <div className="flex items-center justify-center px-8 pb-3">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <div className="mx-4 text-gray-500">Or Register with</div>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mb-5 ">
                                <button className="btn  bg-red-600 text-white">
                                    <FaGoogle></FaGoogle>
                                    Google
                                </button>
                                <button className="btn  bg-black text-white">
                                    <FaGithub></FaGithub>
                                    GitHub
                                </button>
                            </div>
                            <p className="mb-4 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Login.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
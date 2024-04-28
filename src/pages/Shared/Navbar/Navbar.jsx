import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    }


    if (loading) {
        return (
            <div className="text-center my-4 md:my-6">
                <span className="loading loading-lg loading-spinner text-success"></span>
            </div>
        );
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className="navbar md:px-5 bg-cyan-300">
            <div className="navbar-start">

                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn p-1 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li className="text-blue-900 font-medium"><NavLink to="/">Home</NavLink></li>
                        <li className="text-blue-900 font-medium"><NavLink to="/allSpots">All Tourist Spots</NavLink></li>
                        <li className="text-blue-900 font-medium"><NavLink to="/addSpots">Add Tourist Spots</NavLink></li>
                        {user && <li className="text-blue-900 font-medium"><NavLink to={`/myList/${user.email}`}>My List</NavLink></li>}
                    </ul>
                </div>

                <div className="flex items-center">
                    <img className="h-7 md:h-10" src="https://i.ibb.co/rk5WtGm/travel-3-removebg-preview.png" alt="" />
                    <a className="btn btn-ghost m-0 pl-1 font-bold text-blue-900 text-lg md:text-2xl">Travel Trails</a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li className="text-blue-900 font-medium"><NavLink to="/">Home</NavLink></li>
                    <li className="text-blue-900 font-medium"><NavLink to="/allSpots">All Tourist Spots</NavLink></li>
                    <li className="text-blue-900 font-medium"><NavLink to="/addSpots">Add Tourist Spots</NavLink></li>
                    {user && <li className="text-blue-900 font-medium"><NavLink to={`/myList/${user.email}`}>My List</NavLink></li>}
                </ul>
            </div>

            <div className="navbar-end space-x-2 lg:mr-8">
                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {user ? (
                    <>
                        {/* User profile with hover display name */}
                        <div className="dropdown z-10 dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" title={user.displayName}>
                                    <img alt={user.displayName} src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-56">
                                {/* <li><button className="btn bg-cyan-500 text-white">Logged As {user.displayName}</button></li> */}
                                <li><button onClick={handleSignOut} className="btn bg-cyan-500 text-white"><RiLogoutCircleLine></RiLogoutCircleLine>Log Out</button></li>

                            </ul>
                        </div>
                    </>
                ) : (
                    <>

                        <Link to="/register"><button className="btn w-14 lg:w-16 bg-transparent text-blue-950 border-blue-900">Register</button></Link>
                        <Link to="/login"><button className="btn w-14 lg:w-16 bg-transparent text-blue-950 border-blue-900">Login</button></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;

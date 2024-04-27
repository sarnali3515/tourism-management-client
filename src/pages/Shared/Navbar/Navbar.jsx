import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center my-4 md:my-6">
            <span className="loading loading-lg loading-spinner text-success"></span>
        </div>
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks =
        <>
            <li className="text-blue-900 font-medium"><NavLink to="/">Home</NavLink></li>
            <li className="text-blue-900 font-medium"><NavLink to="/allSpots">All Tourist Spots</NavLink></li>
            <li className="text-blue-900 font-medium"><NavLink to="/addSpots">Add Tourist Spots</NavLink></li>
            <li className="text-blue-900 font-medium"><NavLink to={`/myList/${user?.email}`}>My List</NavLink></li>
        </>
    return (
        <div className="navbar md:px-5 bg-cyan-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn p-1 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="h-7 md:h-10" src="https://i.ibb.co/rk5WtGm/travel-3-removebg-preview.png" alt="" />
                    <a className="btn btn-ghost m-0 pl-1 font-bold text-blue-900 text-lg md:text-2xl">Travel Trails</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    {
                        user &&
                        <div className="w-10 rounded-full" >
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} title={user.displayName} />
                        </div>
                    }
                </div>
                {
                    user ?
                        <Link> <p onClick={handleSignOut} className="btn w-14 lg:w-16 bg-transparent text-blue-950 border-blue-900">SignOut</p></Link>
                        :
                        <>
                            <Link to="/register"> <a className="btn w-14 lg:w-16 bg-transparent text-blue-950 border-blue-900">Register</a></Link>
                            <Link to="/login"> <a className="btn w-14 lg:w-16 bg-transparent text-blue-950 border-blue-900">Login</a></Link></>
                }

            </div>
        </div>
    );
};

export default Navbar;
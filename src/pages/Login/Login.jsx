import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, googlePopup, githubPopup } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleLogIn = () => {
        googlePopup(googleProvider)
            .then(result => {
                console.log(result);
                toast.success('Login Successful')

                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');

            })
    }
    const handleGithubLogIn = () => {
        githubPopup(githubProvider)
            .then(result => {
                console.log(result);
                toast.success('Login Successful')
                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful')

                // navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                toast.error('Incorrect Email or Password');
            })
    }

    return (
        <div className="lg:p-5">
            <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/ydpGCgJ/andrew-coelho-m6t-Aq-Zvy4-RM-unsplash.jpg)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                <div className="hero-content lg:w-1/2 text-center">
                    <div className="w-full">
                        <div className="w-full rounded-lg shadow-2xl bg-cyan-50">
                            <h1 className="text-center font-bold text-4xl pt-2">Welcome Back to Travel Trails <br />Login to Explore</h1>
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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
                                    <button className="btn bg-cyan-600 text-white">Login</button>
                                </div>
                            </form>

                            <div className="flex items-center justify-center px-8 pb-3">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <div className="mx-4 text-gray-500">Or Register with</div>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mb-5 ">
                                {/* google */}
                                <Link><img onClick={handleGoogleLogIn} className="w-8" src="https://i.ibb.co/fNhG8bD/Logo-google-icon-PNG.png" alt="" /></Link>
                                {/* github */}
                                <Link><img onClick={handleGithubLogIn} className="w-8" src="https://i.ibb.co/0QtqQ02/kisspng-github-computer-icons-icon-design-github-5ab8a31e5b5395-6758034915220498223741.png" alt="" /></Link>
                            </div>
                            <p className="mb-4 text-center">Do not have any account? <Link to="/register" className="text-blue-600 font-semibold">Register.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
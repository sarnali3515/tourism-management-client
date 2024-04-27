
import { useContext } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, googlePopup, githubPopup } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googlePopup(googleProvider)
            .then(result => {
                console.log(result);
                toast.success('Registration Successful!');
                const name = result.user.displayName;
                const email = result.user.email;
                const photoURL = result.user.photoURL;
                console.log(name, email, photoURL)

                const user = { name, email, photo: photoURL };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration Failed!')
            })
    }

    const handleGithubSignIn = () => {
        githubPopup(githubProvider)
            .then(result => {
                console.log(result);
                toast.success('Registration Successful!');
                const name = result.user.displayName;
                const email = result.user.email;
                const photoURL = result.user.photoURL;
                console.log(name, email, photoURL)

                const user = { name, email, photo: photoURL };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration Failed!')
            })
    }



    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRequirement = password.length >= 6;

        if (!uppercaseRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }

        if (!lowercaseRegex.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }

        if (!lengthRequirement) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                //update
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch()
                toast.success('Registration Successful!');
                // navigate(location?.state ? location.state : '/');

                // new user created
                const user = { name, email, photoURL };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="lg:p-5">
            <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/ydpGCgJ/andrew-coelho-m6t-Aq-Zvy4-RM-unsplash.jpg)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                <div className="hero-content lg:w-1/2 text-center">
                    <div className="w-full">
                        <div className="w-full rounded-lg shadow-2xl bg-cyan-50">
                            <h1 className="text-center font-bold text-4xl pt-2">Welcome to Travel Trails <br />Register to Explore</h1>
                            <form onSubmit={handleRegister} className="card-body">
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
                                    <button className="btn bg-cyan-600 text-white">Register</button>
                                </div>
                            </form>

                            <div className="flex items-center justify-center px-8 pb-3">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <div className="mx-4 text-gray-500">Or Register with</div>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="flex items-center justify-center gap-5 mb-5 ">
                                {/* google */}
                                <Link><img onClick={handleGoogleSignIn} className="w-8" src="https://i.ibb.co/fNhG8bD/Logo-google-icon-PNG.png" alt="" /></Link>
                                {/* github */}
                                <Link><img onClick={handleGithubSignIn} className="w-8" src="https://i.ibb.co/0QtqQ02/kisspng-github-computer-icons-icon-design-github-5ab8a31e5b5395-6758034915220498223741.png" alt="" /></Link>
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
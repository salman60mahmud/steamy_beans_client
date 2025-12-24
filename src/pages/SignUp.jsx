import { useContext } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
    const navigate= useNavigate();
    const { handleRegisterwithEmail } = useContext(SteamyBeansContext);

    const signupHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleRegisterwithEmail(email, password)
            .then((userCredential) => {
                // Signed up 
                updateProfile(auth.currentUser, {
                    displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    navigate('/dashboard');
                    toast.success('Registration successful!');
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    toast.error(error.message)
                    // An error occurred
                    // ...
                });

            }).catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Navbar/>
            <form onSubmit={signupHandler} className="flex justify-center items-center flex-col md:flex-row gap-12 mx-4 md:mx-14 mb-10 md:mb-0">
                {/* form part */}
                <div className="mt-10 lg:mb-20 mb-5">
                    <h4 className="text-[16px] mb-3">Start Your Journey</h4>
                    <h2 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6 sm:mb-10">SignUP To Steamy Beans</h2>
                    <fieldset className="fieldset w-full max-w-[350px] bg-base-200 border-base-300 rounded-box border p-4">

                        <label className="text-[18px] sm:text-xl">Name</label>
                        <input type="text" name="username" className="input w-full" placeholder="Your Name" />

                        <label className="text-[18px] sm:text-xl">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email Address" />

                        <label className="text-[18px] sm:text-xl">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password" />

                        <button type="submit" className="btn text-base-100 bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal w-full">Continue</button>

                        <h3 className="text-[16px] mt-5">Forgot Password?</h3>
                        <h3 className="text-[16px]">
                            Already have an account?
                            <Link to='/login' className="text-blue-600 cursor-pointer ml-2 hover:underline">Click Here</Link ></h3>

                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox text-blue-600" />
                            <p className="text-[13px] ml-2 font-light">By continuing, I agree to the terms of use</p>
                        </div>
                    </fieldset>
                </div>

                {/* image part */}
                <div className="hidden md:block">
                    <img className="max-w-full h-auto" src="/src/images/signup-cover.png" alt="signup-cover" />
                </div>
            </form>
        </div>
    );
};

export default Signup;
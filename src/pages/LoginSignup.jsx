import { useState } from "react";
import Navbar from "../Components/Navbar";

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "", password: "", email: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center flex-col md:flex-row gap-12 mx-4 md:mx-14 mb-10 md:mb-0">
                {/* form part */}
                <div className="mt-10 lg:mb-20 mb-5">
                    <h4 className="text-[16px] mb-3">Start Your Journey</h4>
                    <h2 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6 sm:mb-10">{state} To Steamy Beans</h2>
                    <fieldset className="fieldset w-full max-w-[350px] bg-base-200 border-base-300 rounded-box border p-4">


                        {state === "Sign Up" ?

                            <> <label className="text-[18px] sm:text-xl">Name</label>
                                <input type="text" name="username" value={formData.username} onChange={changeHandler} className="input w-full" placeholder="Your Name" /></> : <></>}

                        <label className="text-[18px] sm:text-xl">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={changeHandler} className="input w-full" placeholder="Email Address" />

                        <label className="text-[18px] sm:text-xl">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={changeHandler} className="input w-full" placeholder="Password" />

                        <button onClick={() => { state === "Login" ? login() : signup() }} className="btn text-base-100 bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal w-full">Continue</button>

                        {state === "Sign Up" ? <><h3 className="text-[16px] mt-5">Already have an account? <span onClick={() => { setState("Login") }} className="text-blue-600 cursor-pointer hover:underline">Sign In</span></h3></> :
                            <><h3 className="text-[16px] mt-5">Forgot Password?</h3>
                                <h3 className="text-[16px]">Create an account <span onClick={() => { setState("Sign Up") }} className="text-blue-600 cursor-pointer ml-2 hover:underline">Click Here</span></h3></>}

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
            </div>
        </div>
    );
};

export default LoginSignup;
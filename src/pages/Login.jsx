import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { loginProcess } = useContext(SteamyBeansContext);
    const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
    const [isLoading, setIsLoading] = useState(false);

    const loginHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;

        // Basic validation
        if (!email || !password) {
            alert("Please fill in all fields"); // Consider using toast instead
            setIsLoading(false);
            return;
        }
        try {
            await loginProcess(email, password);
        } catch (error) {
            // Error is already handled in context, but we can add additional handling here//
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>
            <Navbar />
            <form onSubmit={loginHandler} className="flex justify-center items-center flex-col md:flex-row gap-12 mx-4 md:mx-14 mb-10 md:mb-0 mt-10">
                {/* form part */}
                <div className="mt-10 lg:mb-20 mb-5">
                    <h4 className="text-[16px] mb-3">Start Your Journey</h4>
                    <h2 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6 sm:mb-10">Login To Steamy Beans</h2>
                    <fieldset className="fieldset w-full max-w-[350px] bg-base-200 border-base-300 rounded-box border p-4">

                        <label className="text-[18px] sm:text-xl">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email Address"
                            required autoComplete="email" />

                        <label className="text-[18px] sm:text-xl">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                name="password"
                                className="input w-full"
                                placeholder="Password"
                                required
                                autoComplete="current-password"
                            />
                            <button type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                        <button type="submit" className="btn text-base-100 bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal w-full"  disabled={isLoading}> {isLoading ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Logging in...
                                    </>
                                ) : (
                                    'Login'
                                )}</button>

                        <h3 className="text-[16px] mt-5">Forgot Password?</h3>
                        <h3 className="text-[16px]">
                            Create an account <Link to='/signup' className="text-blue-600 cursor-pointer ml-2 hover:underline">Signup Here</Link ></h3>
                    </fieldset>
                </div>
                 {/* image part  */}
                <div className="hidden md:block max-w-lg">
                    <img className="max-w-full h-auto" src="/src/images/signup-cover.png" alt="signup-cover" />
                </div>
            </form>
        </div>
    );
};

export default Login;
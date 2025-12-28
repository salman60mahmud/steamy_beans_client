import { useContext, useState } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signup = () => {
    const navigate = useNavigate();
    const { handleRegisterwithEmail } = useContext(SteamyBeansContext);
    const [isLoading, setIsLoading] = useState(false);

    const signupHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;

        // Basic validation
        if (!username || !email || !password) {
            toast.error("Please fill in all fields");
            setIsLoading(false);
            return;
        }
        // Password strength validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            setIsLoading(false);
            return;
        }

        try {
            // Register user with Firebase Auth
            const userCredential = await handleRegisterwithEmail(email, password);

            // Update user profile with display name
            await updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            });

            //    Create user object for database
            const users = {
                username,
                email,
                role: "customer",
                uid: userCredential.user.uid, // Add Firebase UID for reference
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            // Save user to your database
            const response = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(users)
            });

            const result = await response.json();

            if (result.insertedId || result.acknowledged) {
                toast.success('Registration successful!');
                navigate('/dashboard');
            }
            else {
                // If database save fails, consider cleaning up the auth user
                toast.error("Registration failed - could not save user data");
                // Optional: Delete the Firebase auth user if database save fails
                // await userCredential.user.delete();
            }
        } catch (error) {
            console.error("Registration error:", error);

            // More specific error messages based on error code
            if (error.code === 'auth/email-already-in-use') {
                toast.error('This email is already registered');
            } else if (error.code === 'auth/invalid-email') {
                toast.error('Invalid email address');
            } else if (error.code === 'auth/weak-password') {
                toast.error('Password is too weak');
            } else {
                toast.error(error.message || 'Registration failed. Please try again.');
            }

        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={signupHandler} className="flex justify-center items-center flex-col md:flex-row gap-12 mx-4 md:mx-14 mb-10 md:mb-0">
                {/* form part */}
                <div className="mt-10 lg:mb-20 mb-5">
                    <h4 className="text-[16px] mb-3">Start Your Journey</h4>
                    <h2 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6 sm:mb-10">Sign Up To Steamy Beans</h2>
                    <fieldset className="fieldset w-full max-w-[350px] bg-base-200 border-base-300 rounded-box border p-4">

                        <label className="text-[18px] sm:text-xl">Name</label>
                        <input type="text" name="username" className="input w-full" placeholder="Your Name" required minLength="2" maxLength="50" />

                        <label className="text-[18px] sm:text-xl">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email Address" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                        <label className="text-[18px] sm:text-xl">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password (min 6 characters)" required minLength="6" />

                        <button type="submit" className="btn text-base-100 bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal w-full" disabled={isLoading}>
                            {isLoading ? (
                            <><span className="loading loading-spinner loading-sm"></span>
                                Creating Account...
                            </>) : ('Create Account')}</button>

                        <h3 className="text-[16px] mt-5">Forgot Password?</h3>
                        <h3 className="text-[16px]">
                            Already have an account?{' '}
                            <Link to='/login' className="text-blue-600 cursor-pointer ml-2 hover:underline">Login Here</Link ></h3>

                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox text-blue-600" required />
                            <span className="text-[13px] ml-2 font-light">I agree to the{' '}
                                    <Link to="/terms" className="link link-primary">Terms of Service</Link>{' '}
                                    and{' '}
                                    <Link to="/privacy" className="link link-primary">Privacy Policy</Link></span>
                        </div>
                    </fieldset>
                </div>

                {/* image part */}
                <div className="hidden md:block max-w-lg">
                    <img className="max-w-full h-auto" src="/src/images/signup-cover.png" alt="signup-cover" />
                </div>
            </form>
        </div>
    );
};

export default Signup;
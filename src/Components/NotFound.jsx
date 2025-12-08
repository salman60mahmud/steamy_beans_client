import { Link } from "react-router";
import Navbar from "./Navbar";

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <img className="mx-auto" src="../../src/Images/not-found.png" alt="not-found" />
            <p className="mt-4 text-center text-3xl font-semibold">Back to <span className="underline"><Link to='/'>Home</Link></span></p>
        </div>
    );
};

export default NotFound;
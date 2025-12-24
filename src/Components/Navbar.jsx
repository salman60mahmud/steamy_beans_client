// icons
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

import { Link } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";

const Navbar = () => {
  const { newuser, signoutProcess } = useContext(SteamyBeansContext);

  const handleSignout = () => {
    signoutProcess();
  }

  const headlines = (
    <div className="flex text-xl cursor-pointer exo">
      <li className="hover:text-purple-500"><Link to='/'>Home</Link></li>
      <li className="hover:text-purple-500"><Link to='/shop'>Shop</Link></li>
      <li className="hover:text-purple-500"><Link to='/about-us'>About Us</Link></li>
      <li className="hover:text-purple-500"><Link to='/contact'>Contact</Link></li>
    </div>);

  return (
    <nav className="flex justify-around items-center bg-stone-800 opacity-80 shadow-sm w-full">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {headlines}
          </ul>
        </div>
        <h1 className="text-4xl bubblegum-sans -mt-5"><Link to='/'>Steamy Beans</Link></h1>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {headlines}
        </ul>
      </div>

      <div className="flex text-2xl gap-5 cursor-pointer exo">
        <div><IoSearchOutline /></div>
        <div><CiShoppingCart /></div>
        <div className="drawer drawer-end">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-5" className="cursor-pointer"><CiUser /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-white h-60 w-50 p-4">
              {/* Sidebar content here */}
              {newuser ?
                <div className="mt-3 mr-5">
                  <li><Link to='/profile' className="text-black">Your Profile</Link></li>
                  <li><Link to='/cart' className="text-black">Cart</Link></li>
                  <li onClick={handleSignout}><Link to='/' className="text-black">Logout</Link></li>
                </div> :
                <><li><Link to='/signup' className="text-black">Sign Up</Link></li></>}

            </ul>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
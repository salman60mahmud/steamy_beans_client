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
    <div className="lg:flex text-xl cursor-pointer exo">
      <li className="hover:text-purple-500lg:text-white text-stone-800"><Link to='/'>Home</Link></li>
      <li className="hover:text-purple-500lg:text-white text-stone-800"><Link to='/shop'>Shop</Link></li>
      <li className="hover:text-purple-500lg:text-white text-stone-800"><Link to='/about-us'>About Us</Link></li>
      <li className="hover:text-purple-500lg:text-white text-stone-800"><Link to='/contact'>Contact</Link></li>
    </div>);

  return (
    <nav className="flex justify-around items-center bg-stone-800 opacity-80 shadow-sm w-full">
      <div className="flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {headlines}
          </ul>
        </div>
        <div className="text-2xl md:text-4xl bubblegum-sans"><Link to='/'>Steamy Beans</Link></div>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {headlines}
        </ul>
      </div>

      <div className="flex text-2xl gap-5 cursor-pointer exo">
        <div><IoSearchOutline /></div>
        <div><CiShoppingCart /></div>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="cursor-pointer">
            <CiUser />
          </div>

          <ul
            tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 mt-6 w-52 p-4 shadow">
            {newuser ? (
              <>
                <li><Link to="/dashboard" className="text-black text-lg">Your Profile</Link></li>
                <li><Link to="/cart" className="text-black text-lg">Cart</Link></li>
                <span className="divider"></span>
                <li onClick={handleSignout}><Link to="/" className="text-black text-lg">Logout</Link></li>
              </>
            ) : (
              <li><Link to="/signup" className="text-black text-lg">Sign Up</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
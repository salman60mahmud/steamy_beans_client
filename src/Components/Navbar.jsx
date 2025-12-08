import { Link } from "react-router-dom";
import './Navbar.css';
// icons
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const Navbar = () => {
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
        <a className="text-4xl bubblegum-sans"><Link to='/'>Steamy Beans</Link></a>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {headlines}
        </ul>
      </div>

      <div className="flex text-2xl gap-5 cursor-pointer exo">
        <IoSearchOutline />
        <CiShoppingCart />
        <CiUser />
      </div>
    </nav>
  );
};

export default Navbar;
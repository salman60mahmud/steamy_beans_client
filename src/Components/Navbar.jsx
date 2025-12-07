// icons
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {

  const headlines =
    <div className="flex text-xl">
      <li><a>Home</a></li>
      <li><a>Shop</a></li>
      <li><a>About Us</a></li>
      <li><a>Contact</a></li>
    </div>

  return (
    <div>
      <div className="flex justify-around items-center bg-base-100 shadow-sm">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {headlines}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Steamy Beans</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {headlines}
          </ul>
        </div>
        <div className="flex text-2xl gap-5">
          <IoSearchOutline />
          <CiShoppingCart />
          <CiUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
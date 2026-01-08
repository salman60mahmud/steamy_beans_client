import { useContext, useEffect, useState } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";
import { Link, Navigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Dashboard = () => {
  const { newuser } = useContext(SteamyBeansContext);
  const [user, setUser] = useState(null);
  const email = newuser?.email;

  const API = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (email) {
      fetch(`${API}/users/loginuser/${email}`)
        .then(response => {
          console.log("Response status:", response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetched user data:", data);
          setUser(data);
        })
        .catch(error => {
          console.error("Full error details:", error);
          console.error("Error fetching user:", error.message);
        });
    }
  }, [email]);


  return (
    <div>
      {/* Pass user data to Navbar */}
      <Navbar userRole={user?.role} />

      {user ? (
        user.role === 'admin' ? (
          <div className="space-y-8">

            <div className="drawer lg:drawer-open">
              <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col items-center mt-20">
                {/* Page content here */}
                <Outlet context={{ user }} />
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                  ☰ Menu
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li><Link to="/dashboard/admin">Admin</Link></li>
                  <li><Link to="/dashboard/users">Manage Users</Link></li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-80 mt-20">
            <>
              <Navigate to="/dashboard/users" replace />
              <Outlet context={{ user }} /></>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No User Data Found</h2>
          <p className="text-gray-600 mb-6">
            Please log in to access your dashboard.
          </p>
          <Link to="/login" className="btn btn-primary">
            Go to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
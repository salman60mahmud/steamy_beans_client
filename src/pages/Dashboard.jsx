import { useContext, useEffect, useState } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";
import { Link } from "react-router-dom";
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
            {/* Admin Dashboard */}
            <div className="bg-white  text-center rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                👑 Admin Dashboard
              </h1>
              <p className="text-gray-600 mb-6">
                Welcome back, {user.username}! You have administrative privileges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to='/manage-users' className="btn btn-primary btn-lg w-full">
                  👥 Manage Users
                </Link>
                <Link to='/manage-products' className="btn btn-secondary btn-lg w-full">
                  📦 Manage Products
                </Link>
                <Link to='/analytics' className="btn btn-accent btn-lg w-full">
                  📊 View Analytics
                </Link>
                <Link to='/orders' className="btn btn-info btn-lg w-full">
                  📋 Manage Orders
                </Link>
                <Link to='/settings' className="btn btn-warning btn-lg w-full">
                  ⚙️ System Settings
                </Link>
              </div>
            </div>

            {/* Admin Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Admin Statistics</h2>
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                <div className="stat">
                  <div className="stat-title">Total Users</div>
                  <div className="stat-value">89,400</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Active Sessions</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* User Dashboard */}
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                👤 User Dashboard
              </h1>
              <p className="text-gray-600 mb-6">
                Welcome, {user.username}!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to='/profile' className="btn btn-primary btn-lg w-full">
                  👤 View Profile
                </Link>
                <Link to='/orders' className="btn btn-secondary btn-lg w-full">
                  🛒 My Orders
                </Link>
                <Link to='/settings' className="btn btn-accent btn-lg w-full">
                  ⚙️ Account Settings
                </Link>
              </div>
            </div>

            {/* User Info Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Your Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Name:</span>
                  <span>{user.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Email:</span>
                  <span>{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Role:</span>
                  <span className="badge badge-primary">{user.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Member Since:</span>
                  <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
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
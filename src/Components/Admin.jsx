import { useOutletContext, Link } from "react-router-dom";

const Admin = () => {
    const { user } = useOutletContext();
    return (
        <div>
            {/* Admin Dashboard */}
            <div className="bg-white text-center rounded-lg shadow p-6">
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
    );
};

export default Admin;
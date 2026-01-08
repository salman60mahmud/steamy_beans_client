import { useOutletContext, Link } from "react-router-dom";

const Users = () => {
    const { user } = useOutletContext();
    return (
        <div>
            {/* User Dashboard */}
            <div className="bg-white text-center rounded-lg shadow p-6">
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
            <div className="bg-white text-center rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Your Information</h2>
                <div className="space-y-3 px-40">
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
    );
};

export default Users;
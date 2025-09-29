import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/user-slise";

function UserPage() {
  const user = useSelector((state) => state.user.data);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
            src={`https://ui-avatars.com/api/?name=${user.username}&background=random`}
            alt="avatar"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {user.username}
          </h1>
          <p className="text-gray-500">ID: {user.id}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-700">Username</span>
            <span className="text-gray-600">{user.username}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-700">Password</span>
            <span className="text-gray-600">{user.password}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleLogout}
            className="mt-6 w-full px-6 py-2.5 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>

          <Link to={"/"}>
            <button className="mt-6 w-full px-6 py-2.5 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

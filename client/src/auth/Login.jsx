import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-screen flex justify-center items-center h-screen bg-zinc-300">
      {/* login container */}
      <div className="w-96 shadow-lg  rounded px-5 py-5 bg-white">
        <h1 className="text-3xl text-center mb-8 font-bold">Login</h1>
        <form>
          <div className="mb-2.5">
            <label htmlFor="email" className="font-medium text-sm">
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="p-2 w-full mt-0.5 rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
            />
          </div>
          <div className="mb-2.5">
            <label htmlFor="password" className="font-medium text-sm">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              autoFill
              className="p-2 mt-0.5 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
            />
          </div>
          <Link
            to="/forgotPassword"
            className="text-center block mb-2.5 text-blue-500 hover:text-blue-600"
          >
            {" "}
            Forgot Password?
          </Link>
          <button className="w-full mt-2 mb-1.5 py-2 px-5 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white rounded">
            Login
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

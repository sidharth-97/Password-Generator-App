import React, { useState } from "react";
import { signup } from "../services/api";
import { toast } from "react-toastify";

const Signup = ({isLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    if (!email || !password || name) {
      e.preventDefault();
      toast.error("Please fill all fields")
      return
    }
    const response = await signup({ name, email, password });
    if (response?.status == 200) {
      toast.success("Signup successfull")
    } else {
      toast.error("Email already exists")
    }
  };
  return (
    <div>
      <form
        className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
        action="#"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-medium text-gray-900 :text-white">
          Create a new account
        </h3>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 block mb-2 :text-gray-300"
          >
            Your name
          </label>
          <input
            type="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white"
            placeholder="John Doe"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 block mb-2 :text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 block mb-2 :text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-600 :border-gray-500 :placeholder-gray-400 :text-white"
            required=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded :bg-gray-600 :border-gray-500 :focus:ring-blue-600 :ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="text-sm ml-3">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 :text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline :text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
        >
          Sign Up
        </button>
        <div className="text-sm font-medium text-gray-500 :text-gray-300">
          Already registered?{" "}
          <span onClick={()=>isLogin(true)}
            href="#"
            className="text-blue-700 hover:underline :text-blue-500"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;

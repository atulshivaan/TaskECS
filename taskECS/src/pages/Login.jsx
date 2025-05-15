import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import {useNavigate } from "react-router-dom"

const Login = () => {
  const navigate =useNavigate()
  const [user ,setUser]= useState({ 
    username:"",
    password:"",
    role: ""
})
const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser((prevUser)=>({
        ...prevUser,
        [name]:value
    }));
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user.username || !user.password || !user.role) {
    alert("All fields are mandatory");
    return;
  }
  try {
    const response = await axiosInstance.post("/api/auth/login", user);
    console.log(response.data);

    const role = response.data.user.role;  
    const token = response.data.token;

   
    localStorage.setItem("authToken", token);

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "user") {
      navigate("/user-dashboard");
    } else {
      alert("Unknown user role, please contact support.");
      return;
    }

    setUser({
      username: "",
      password: "",
      role: ""
    });
  } catch (error) {
    console.error("Error logging in:", error.response ? error.response.data : error.message);
    alert("An error occurred while logging in. Please try again.");
  }
};


  return (
    <div className="w-full h-70 bg-amber-700 flex items-center justify-center">
      <div className="w-90 h-100 shadow-2xl shadow-zinc-300 mt-[27%] transform translate-x-3 overflow-auto rounded-2xl  bg-white">
     <h6 className="text-md  mt-10 font-bold text-center text-gray-700 mb-6">
          Welcome to TaskECS
        </h6>

        <form onSubmit={handleSubmit} className="flex flex-col  mt-5 items-center gap-4 w-full">
          <div className="flex flex-col gap-1 w-60">
            <label className="text-sm font-medium text-gray-700">username</label>
            <input
              type="name"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1 w-60">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1 w-60">
  <label className="text-sm font-medium text-gray-700">Role</label>
  <select
    name="role"
    value={user.role}
    onChange={handleChange}
    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </select>
</div>


          <button
            type="submit"
            className="bg-blue-700 text-white mb-3 px-6 py-2 rounded-2xl shadow-xl hover:bg-blue-200 hover:text-black transition duration-300 mt-4"
          >
            Login
          </button>
        </form>



      </div>
    </div>
  );
};

export default Login;


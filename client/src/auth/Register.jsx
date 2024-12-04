import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);
  const [cpassword, setCPassword] = useState("");

  const handleChange = ()=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

  }

  return (
    <div className="w-screen flex justify-center items-center h-screen bg-zinc-300">
    {/* login container */}
    <div className="w-96 shadow-lg  rounded px-5 py-5 bg-white">
      <h1 className="text-3xl text-center mb-8 font-bold">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2.5">
          <label htmlFor="fname" className="font-medium text-sm">
            Enter Fullname
          </label>
          <input
            type="text"
            id="fname"
            name="fullname"
            placeholder="e.g John doe"
            value={formData.fullname}
            onClick={handleChange}
            className="p-2 w-full mt-0.5 rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
          />
        </div>
        <div className="mb-2.5">
          <label htmlFor="email" className="font-medium text-sm">
            Enter Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={formData.email}
            onClick={handleChange}
            className="p-2 w-full mt-0.5 rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="font-medium text-sm">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onClick={handleChange}
            autoFill
            className="p-2 mt-0.5 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="font-medium text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            placeholder="Confirm password"
            value={cpassword}
            onClick={e => setCPassword(e.target.value)}
            autoFill
            className="p-2 mt-0.5 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500 "
          />
        </div>
        
        <button className="w-full mt-4 mb-1.5 py-2 px-5 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white rounded">
          Register
        </button>
        <p className="text-center ">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  </div>
  )
}

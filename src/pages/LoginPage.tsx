import { useEffect, useState } from "react";
import type { AppDispatch, RootState } from "../Rudex/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfn, resetLoginState } from "../Rudex/Slice/loginSlice";
import { toast } from "react-hot-toast";



const LoginPage: React.FC = () => {

  const loginState = useSelector((state: RootState) => state.login)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>()
  const toastId = 'login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });
    const data = {
      email,
      password
    }

    dispatch(loginfn(data));
  };


  const navigate = useNavigate()
  useEffect(() => {
    if(loginState.isLoading){
      toast.loading("Logging in..." , { id: toastId})
    }
    if(loginState.isSuccess){
      toast.success("Login Successful", { id: toastId });
      navigate('/dashboard')
    }
    if(loginState.isError){
      toast.error(loginState.message , { id: toastId})
    }
  } , [loginState])

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
  <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Login
    </h1>

    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
      >
        Login
      </button>
    </form>

    {/* Signup link */}
    <p className="text-center text-sm text-gray-600 mt-6">
      Don’t have an account?{" "}
      <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
        Sign up
      </span>
    </p>
  </div>
</div>

  );
};

export default LoginPage;



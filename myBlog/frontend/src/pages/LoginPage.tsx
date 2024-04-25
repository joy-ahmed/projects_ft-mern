import { Link } from "react-router-dom";
import Login from "../components/user/Login";

const LoginPage = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-3xl mx-auto bg-slate-50 p-4 lg:mt-28 rounded-lg">
        <h1 className="text-4xl text-center p-4 font-semibold">Welcome back</h1>
        <p className="text-[18px] text-center">
          Don't have an account?
          <Link to="/register" className="font-semibold ml-2">
            Signup
          </Link>
        </p>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;

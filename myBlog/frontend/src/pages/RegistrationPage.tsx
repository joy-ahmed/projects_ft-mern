import { Link } from "react-router-dom";
import Signup from "../components/user/Signup";

const RegistrationPage = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-3xl mx-auto bg-slate-50 p-4 lg:mt-28 rounded-lg">
        <h1 className="text-4xl text-center p-4 font-semibold">
          Signup for an account
        </h1>
        <p className="text-[18px] text-center">
          Already have an account?
          <Link to="/login" className="font-semibold ml-2">
            Login
          </Link>
        </p>
        <Signup />
      </div>
    </div>
  );
};

export default RegistrationPage;

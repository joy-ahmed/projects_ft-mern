import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { PiSignIn } from "react-icons/pi";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="">
      <form>
        <div className="mb-4">
          <label className="font-semibold" htmlFor="username">
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
        </div>
        <div className="mb-4 relative">
          <label className="font-semibold" htmlFor="pass">
            password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="pass"
            placeholder="Enter your password"
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
          {/* password vissible toggler */}
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-12 right-6 cursor-pointer"
          >
            {showPassword ? (
              <BsEye className="text-xl" />
            ) : (
              <BsEyeSlash className="text-xl" />
            )}
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 py-3 px-6 bg-slate-800 text-white rounded-full"
          >
            <PiSignIn className="text-xl" />
            <span className="text-md font-semibold">Login</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

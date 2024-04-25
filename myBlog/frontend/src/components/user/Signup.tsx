import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { useFormik } from "formik";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is Required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is Required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="font-semibold" htmlFor="username">
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            {...formik.getFieldProps("username")}
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-400">{formik.errors.username}</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="font-semibold" htmlFor="email">
            email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-400">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-4 relative">
          <label className="font-semibold" htmlFor="pass">
            password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="pass"
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-400">{formik.errors.password}</p>
          ) : null}
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
          <label className="font-semibold" htmlFor="pass2">
            confirm password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="pass2"
            placeholder="Re-enter your password"
            {...formik.getFieldProps("confirmPassword")}
            className="w-full py-3 px-6 mt-2 border rounded-full"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-400">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 py-3 px-6 bg-slate-800 text-white rounded-full"
          >
            <FiUserPlus className="text-xl" />
            <span className="text-md font-semibold">Sign up</span>
          </button>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 py-3 px-6 border border-slate-300 bg-slate-100 rounded-full"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-md font-semibold">Sign in with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

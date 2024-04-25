import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-50 shadow">
      <ul className="container mx-auto flex justify-between items-center">
        <div className="brand">
          <li>
            <Link to="/">
              <img src={logo} width={200} alt="logo" />
            </Link>
          </li>
        </div>
        <div className="flex gap-5">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/create-post">create post</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

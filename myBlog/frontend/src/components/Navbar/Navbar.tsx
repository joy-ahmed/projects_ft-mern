import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

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
          <li className="p-2">
            <Link to="">Home</Link>
          </li>
          <Link className="font-semibold" to="/create-post">
            <li className="flex items-center gap-1 justify-center bg-slate-800 text-white py-2 px-3 rounded-md active:scale-95 transition hover:bg-slate-700">
              <BiPlus size={18} className="mt-[2px]" />
              create post
            </li>
          </Link>
          <li className="p-2">
            <Link to="/register">Signup</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

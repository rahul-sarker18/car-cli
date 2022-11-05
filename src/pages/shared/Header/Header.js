import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { Authcontext } from "../../../context/Usercontext";

const Header = () => {
  const {user , logout} = useContext(Authcontext);

  const handelsignout =()=>{
    logout()
    .then()
    .catch();
  }
  return (
    <div className="navbar bg-base-100 mb-12 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-semibold">
              <Link to="/home">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li className="font-semibold">
              <Link to="/order">Order</Link>
            </li>
            
            {user?.uid ?
            <li className="font-semibold">
            <Link onClick={handelsignout}>Sign out</Link>
          </li> : <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-semibold">
            <Link to="/home">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold">
            <Link to="/services">Services</Link>
          </li>
          <li className="font-semibold">
            <Link to="/order">Order</Link>
          </li>
          
          {user?.uid ?
            <li className="font-semibold">
            <Link onClick={handelsignout}>Sign out</Link>
          </li> : <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn">
          Appoinment
        </Link>
      </div>
    </div>
  );
};

export default Header;

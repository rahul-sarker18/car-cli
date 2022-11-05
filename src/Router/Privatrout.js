import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../context/Usercontext";

const Privatrout = ({ children }) => {
  const { user, loder } = useContext(Authcontext);
  const location = useLocation();
  if (loder) {
    return <h2 className="text-2xl">lode......</h2>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default Privatrout;

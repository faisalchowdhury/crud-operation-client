import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="text-center py-5 space-x-3">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/add-user"}>Add User</NavLink>
    </div>
  );
};

export default Navbar;

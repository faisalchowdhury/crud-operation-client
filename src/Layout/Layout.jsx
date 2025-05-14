import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import "../App.css";
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;

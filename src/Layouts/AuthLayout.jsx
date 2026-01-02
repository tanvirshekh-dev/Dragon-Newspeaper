import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Login from "../Pages/Login";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;

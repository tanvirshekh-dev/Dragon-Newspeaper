import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
// import userLogo from "../assets/nav-logo.jfif"
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    console.log("user trying to log out");
    logOut()
      .then(() => {
        alert("user Log Out successfully")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-8">
      <div className="">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/carrier"}>Carrier</NavLink>
      </div>
      <div className="flex gap-5">
        <img className="w-12 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-primary text-base-100 px-8"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn bg-primary text-base-100 px-8"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

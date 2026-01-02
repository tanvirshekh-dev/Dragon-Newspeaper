import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import  userIcon  from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto py-8'>
            <div className="">{user && user.email}</div>
            <div className="flex gap-5 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/carrier"}>Carrier</NavLink>
            </div>
            <div className="flex gap-5">
                <img src={userIcon} alt="" />
                <Link to={"/auth/login"} className='btn bg-primary text-base-100 px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
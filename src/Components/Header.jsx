import React from 'react';
import logo from "../assets/logo.png"
import { format } from "date-fns"

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, LLLL d, yyyy")}</p>
        </div>
    );
};

export default Header;
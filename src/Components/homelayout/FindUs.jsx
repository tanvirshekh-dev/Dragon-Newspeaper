import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mb-5">
      <h2 className="font-semibold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start p-5 text-base-400"><FaFacebook size={20}></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start p-5 text-base-400"><FaTwitter size={20}></FaTwitter> Twitter</button>
        <button className="btn join-item justify-start p-5 text-base-400"><FaInstagram size={20}></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;

import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 max-w-lg px-5 shrink-0 shadow-2xl w-11/12 mx-auto">
        <div className="card-body ">
          <h2 className="text-center font-semibold text-xl py-4">
            Register your account
          </h2>
          <div className="w-xs mx-auto">
            <hr className="text-gray-200 py-3" />
          </div>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-semibold">Name</label>
            <input type="text" className="input w-full bg-base-300 border-0" placeholder="Name" />
            {/* photo url */}
            <label className="label font-semibold">Photo URL</label>
            <input type="text" className="input w-full bg-base-300 border-0" placeholder="Photo URL" />
            {/* email */}
            <label className="label font-semibold">Email</label>
            <input type="email" className="input w-full bg-base-300 border-0" placeholder="Email" />
            {/* password */}
            <label className="label font-semibold">Password</label>
                      <input type="password" className="input w-full bg-base-300 border-0" placeholder="Password" />
                      <div className="flex items-center justify-center gap-3 py-3">
                          <input type="checkbox" className="checkbox" />
                          <p>Accept <span className="font-semibold">Term & Conditions</span></p>
                      </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-xs py-3 text-center">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary font-semibold" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;

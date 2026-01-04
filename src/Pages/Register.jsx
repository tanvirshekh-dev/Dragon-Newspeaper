import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createUser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 8) {
      setPasswordError("Password should be more then 8 character");
      return;
    } else {
      setPasswordError("");
    }
    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
        })
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

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
          <form onSubmit={handleRegister} className="">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label font-semibold">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full bg-base-300 border-0"
                placeholder="Name"
                required
              />
              {nameError && (
                <p className="text-red-400 font-medium">
                  Must should be more then 5 character
                </p>
              )}
              {/* photo url */}
              <label className="label font-semibold">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input w-full bg-base-300 border-0"
                placeholder="Photo URL"
                required
              />
              {/* email */}
              <label className="label font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full bg-base-300 border-0"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label font-semibold">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full bg-base-300 border-0"
                placeholder="Password"
                required
              />
              {passwordError && (
                <p className="text-red-400 font-medium">
                  Enter Password should be more then 8 character
                </p>
              )}
              <div className="flex items-center justify-center gap-3 py-3">
                <input type="checkbox" className="checkbox" />
                <p>
                  Accept{" "}
                  <span className="font-semibold">Term & Conditions</span>
                </p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="text-xs py-3 text-center">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-secondary font-semibold"
                  to={"/auth/login"}
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

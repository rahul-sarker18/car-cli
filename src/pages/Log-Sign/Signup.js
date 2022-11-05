import { fromJSON } from "postcss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../.././assets/images/login/login.svg";
import { Authcontext } from "../../context/Usercontext";

const Signup = () => {
  const { signupemail, usernameupdate } = useContext(Authcontext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(username, email, password);

    signupemail(email, password)
      .then((res) => {
        usernameupdate(username)
        form.reset();
        console.log(res.user);

      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

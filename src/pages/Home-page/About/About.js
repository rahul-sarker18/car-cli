import React from "react";
import img1 from "../../../assets/images/about_us/parts.jpg";
import img2 from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero my-28">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="w-1/2 block relative ">
          <img src={img2} className=" w-4/5 h-full rounded-lg shadow-2xl " alt="" />
          <img
            src={img1}
            className="w-3/5 h-full absolute right-5 border-spacing-1 top-1/2 justify-end rounded-lg shadow-2xl "
            alt=""
          />
        </div>
        <div className="w-1/2 lg:pt-0 pt-12">
          <p className="text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="my-5 text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

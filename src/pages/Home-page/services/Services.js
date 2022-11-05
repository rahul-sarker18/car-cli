import React, { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const [servuces, setservices] = useState([]);
  useEffect(() => {
    fetch("https://cor-doctor-sarver-rahul-sarker18.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);


  return (
    <div className="text-center my-5">
      <div>
        <h1 className="text-3xl font-bold my-4">Service</h1>
        <h2 className="text-2xl font-bold my-4">Our Service Area</h2>
        <p className="w-1/2 mx-auto mb-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 ">{servuces.map(sp => <ServicesCart key={sp._id} sp ={sp}></ServicesCart>)}</div>

      <div>
        <button className="btn btn-outline btn-secondary">More Services</button>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import { Link } from "react-router-dom";

const ServicesCart = ({ sp }) => {
  const { _id, img, title, price } = sp;
  return (
    <div className="card gap-5 my-4 card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>$ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/chatchout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../context/Usercontext";

const Chatchout = () => {
  const { title, _id, price } = useLoaderData();
  const { user } = useContext(Authcontext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    console.log("link 26" , order);
    fetch("https://cor-doctor-sarver-rahul-sarker18.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    }).then(res => res.json())
    .then(data => {
        form.reset()
        console.log(data);
        alert('all done !!')
    })
  };

  return (
    <div>
      <div>
        <form onSubmit={handlePlaceOrder}>
          <h2 className="text-4xl">You are about to order: {title}</h2>
          <h4 className="text-3xl">Price: {price}</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Your Message"
            required
          ></textarea>

          <input className="btn" type="submit" value="Place Your Order" />
        </form>
      </div>
    </div>
  );
};

export default Chatchout;

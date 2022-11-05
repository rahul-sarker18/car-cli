import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/Usercontext";
import OrderRow from "./OrderRow";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const { user , logout} = useContext(Authcontext);

  useEffect(() => {
    fetch(`https://cor-doctor-sarver-rahul-sarker18.vercel.app/order?email=${user.email}`, {
      headers: {
        authorization: `Baerer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
         return logout();
        }
      return res.json();
      })
      .then((data) => setorders(data));
  }, [user?.email , logout]);

  const handleDelete = (id) => {
    const conf = window.confirm("are you rady");

    if (conf) {
      fetch(`https://cor-doctor-sarver-rahul-sarker18.vercel.app/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            alert("succes full");
            const remining = orders.filter((ord) => ord._id != id);
            setorders(remining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`https://cor-doctor-sarver-rahul-sarker18.vercel.app/order/${id}`, {
      method: "PATCH",
      Headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remining = orders.filter((odr) => odr._id !== id);
        const approving = orders.find((odr) => odr._id === id);
        approving.status = "Approved";
        const newoder = [...remining, approving];
        setorders(newoder);
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl">You have {orders.length} Orders</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleStatusUpdate={handleStatusUpdate}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

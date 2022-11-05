import React from "react";
import bnar1 from "../../assets/images/banner/1.jpg";
import bnar2 from "../../assets/images/banner/2.jpg";
import bnar3 from "../../assets/images/banner/3.jpg";
import bnar4 from "../../assets/images/banner/4.jpg";
import bnar5 from "../../assets/images/banner/5.jpg";
import bnar6 from "../../assets/images/banner/6.jpg";
import "./Baner.css";
import BanerSlider from "./BanerSlider";

const data = [
  { id: 1, image: bnar1, p: 6, n: 2 },
  { id: 2, image: bnar2, p: 1, n: 3 },
  { id: 3, image: bnar3, p: 2, n: 4 },
  { id: 4, image: bnar4, p: 3, n: 5 },
  { id: 5, image: bnar5, p: 4, n: 6 },
  { id: 6, image: bnar6, p: 5, n: 1 },
];

const Baner = () => {
  return (
    <div style={{ height: "600px" }} className="carousel w-full ">
      {data.map((d) => (
        <BanerSlider key={d.id} slider={d}></BanerSlider>
      ))}
    </div>
  );
};

export default Baner;

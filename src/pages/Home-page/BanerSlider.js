import React from 'react';

const BanerSlider = ({slider}) => {
    const {image, id , p , n} = slider;
    return (
        <div style={{ height: "600px" }} id={`slide${id}`} className="carousel-item relative w-full">
        <div className="slidering">
        <img src={image} style={{ height: "600px" , width:'100vw' }}  alt="" className='w-full rounded-xl' />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4">
          <h1 className="text-6xl text-white">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 w-1/2 top-1/2">
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-3/4">
          <button className="btn btn-success mr-5">Success</button>
          <button className="btn btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${p}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${n}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BanerSlider;
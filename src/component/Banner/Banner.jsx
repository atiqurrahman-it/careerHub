import React from "react";
import "./Banner.css";
import headerBanner from "../../assets/headerBanner.png"
import Button from "../Button/Button";
const Banner = () => {
  return (
    <div className="md:flex  md:justify-between text-center sm:text-left items-center gap-10 mt-10">
      <div className="banner-info">
        <h1 className="sm:text-2lx md:text-7xl font-bold text-black">One Step Closer To Your</h1>
        <h2 className="md:text-7xl font-bold py-3">Dream Job</h2>
        <p >
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
         <div className="my-4"> <Button>Get Started</Button></div>
      </div>
      <div  className="w-full">
        <img  src={headerBanner} alt="image not" />
      </div>
    </div>
  );
};

export default Banner;

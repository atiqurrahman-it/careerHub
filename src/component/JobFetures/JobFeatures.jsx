import React, { useState } from "react";
import Features from "./Features";
import Button from "../Button/Button";

const JobFeatures = ({ JobFeature }) => {
  const [jobFeatures,setFeature]=useState(JobFeature.slice(0,4))
  return (
    <>
      <div className="text-center ">
        <h1 className="title">Featured Jobs</h1>
        <p className="description">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-x-4   justify-items-center">
        {jobFeatures.map((feature) => (
          <Features {...feature} key={feature.id}></Features>
        ))}
      </div>
      <div className="text-center my-5">
        {
          jobFeatures.length < 5 &&    <div onClick={()=>setFeature(JobFeature)}>
          <Button>See All Jobs</Button>
         </div> 
        }
      
      </div>
    </>
  );
};

export default JobFeatures;

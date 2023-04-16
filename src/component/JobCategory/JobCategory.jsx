import React from "react";
import "./JobCategory.css";
import Category from "./Category";
const JobCategory = ({ categoryJob }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="title">Job Category List</h1>
        <p className="description">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center ">
          {categoryJob.map((category) => (
            <Category {...category} key={category.id}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

import React from "react";

const Category = ({ name, available_job, logo }) => {
  return (
    <>
      <div >
        <img  src={logo} alt="img not found" />
        <div className="mt-5">{name}</div>
        <p>{available_job} Jobs Available</p>
      </div>
    </>
  );
};

export default Category;

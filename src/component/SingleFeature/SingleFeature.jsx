import React from "react";
import { useLoaderData } from "react-router-dom";
import './SingleFeature.css'
import { addToDB } from "../../utils/fakeDb";
import { ToastContainer } from 'react-toastify';

const SingleFeature = () => {
  const feature=useLoaderData()
  const {id,jobDescription,jobResponsibility,educationalRequirements,experiences,location,salary,title,contactInformation}=feature

  const handelAddToJob=(id)=>{
    addToDB(id)
  }

  return (
    <div className="grid md:grid-cols-[3fr,1fr]  gap-10 mt-11 max-w-5xl m-auto ">
      <div className="jobRequirement mx-2">
        <p><span className="textColorBlack">Job Description:</span> {jobDescription}</p>
        <p><span className="textColorBlack">Job Responsibility:</span>  {jobResponsibility}</p>
        <h3 className="textColorBlack">Educational Requirements:</h3>
        <p> {educationalRequirements}</p>
        <h3 className="textColorBlack">Experiences:</h3>
        <p>{experiences}</p>
      </div>
      <div className="job-information mx-2">
      <ToastContainer />
        <h3>Job Details</h3>
        <hr className="w-76 border border-slate-400 opacity-25 mb-5	"/>
        <p><span className="jobTextColor">Salary :</span>{salary} (Per Month) </p>
        <p><span  className="jobTextColor">Job Title  :</span> {title} </p>
        <h3 >Contact Information</h3>
        <hr className="w-76 border border-slate-400 opacity-25 mb-5	"/>
        <p><span  className="jobTextColor">Phone:</span> {contactInformation.phone} </p>
        <p><span  className="jobTextColor">Email:</span>{contactInformation.email} </p>
        <p><span  className="jobTextColor">Address:</span>{location} </p>
        
        <button onClick={()=>handelAddToJob(id)} className="py-3 px-5 w-full btn bt_apply mt-8 mb-4"> Apply Now </button>
      </div>
    </div>
  );
};

export default SingleFeature;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { MapPinIcon } from '@heroicons/react/24/solid'


const Features = ({id,logo,title,Cname,remoteOrOnsite,location,fulltimeOrPartTime,salary}) => {
  return (
    <div className="card bg-base-100 ">
      <div className="card-body w-full ">
        <img src={logo} className="h-20 w-40" alt="image not found" />
        <h2 className="text-2xl font-bold text-secondary">{title}</h2>

         <p className="text-info mb-3">{Cname}</p>
         <div className="md:flex justify-start gap-3 ">
            <button className="btn btn-outline btn-primary rounded"> {remoteOrOnsite}</button>
            <button className="btn btn-outline btn-primary rounded"> {fulltimeOrPartTime}</button>
         </div>
         <div className="md:flex justify-start gap-2 text-info border border-purple-50">
           <span className="flex items-center gap-1"> <MapPinIcon className="h-6 w-6 text-info-500" /> {location} </span>
           <p className="flex items-center gap-1" >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
              Salary : {salary}
            </p>
         </div>
        
        <div className="card-actions justify-start my-4">
          <Link  to={`feature/${id}`}>
           <Button> View Details</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;

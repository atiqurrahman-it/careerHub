import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob';
import './Jobs.css'
import HeaderBanner from '../HeaderBanner/HeaderBanner';
const Jobs = () => {
    const jobs=useLoaderData()
    const [totalJob,setTotalJob]=useState(jobs)

    const handelSortJob=(event)=>{
        const selectedOptionValue = event.target.value;
        const sort=jobs.filter(job=>job.remoteOrOnsite===selectedOptionValue)
        setTotalJob(sort)
    }

    return (
        <div className='max-w-5xl m-auto my-10'>
            <HeaderBanner> Applied Jobs</HeaderBanner>
            <div className='flex md:justify-end justify-center'>
            <select onChange={handelSortJob} className="select select-success w-full max-w-xs" defaultValue={'DEFAULT'}>
                <option disabled value="DEFAULT">Short By ...</option>
                <option value='Remote'>Remote</option>
                <option value="Onsite">Onsite</option>
            </select>
        </div>
          <div className='flex flex-col justify-center items-center md:place-items-stretch '>
            {
                totalJob.map(job=><SingleJob {...job} key={job.id}></SingleJob>)
            }
          </div>
        </div>
    );
};

export default Jobs;
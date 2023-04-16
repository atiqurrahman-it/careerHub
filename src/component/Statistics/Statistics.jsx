import * as React from "react";
import { AreaChart, Area,  XAxis,YAxis, CartesianGrid,Tooltip,ResponsiveContainer
} from "recharts";
import { curveCardinal } from "d3-shape";
import { useLoaderData } from "react-router-dom";
const cardinal = curveCardinal.tension(0.2);

import { StarIcon } from '@heroicons/react/24/solid'
import HeaderBanner from "../HeaderBanner/HeaderBanner";

export default function Statistics() {
  const data=useLoaderData()
  let  marks=0
  let totalSubject=data.length
  for(const object of data){
    for(const  ob in object ){
      if(ob==="mark"){
        marks=marks+(object[ob])
      }
    }
  }
  
  const avarageMark=marks/totalSubject;
  return (
    <div className="max-w-5xl m-auto ">
       <HeaderBanner> Statistics Page </HeaderBanner>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Assignment Analytics</h1>
        <div>
          <div className="flex justify-center mt-3">
          <StarIcon className="h-6 w-6 text-yellow-500" />
          <p> {avarageMark.toFixed(2)}</p>
          </div>
          <p>Avg Assignment Mark</p>
        </div>
      </div>
      <div className="flex justify-center py-10">
      <ResponsiveContainer className="w-96" height={250}>
      <AreaChart
      
      data={data}
      margin={{
        top: 0,
        right:30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Area type={cardinal} dataKey="fullMark" stroke="#82ca9d" fill="#9873ff" fillOpacity={0.3} />
    </AreaChart>
    </ResponsiveContainer>
      </div>
    </div>
  )


  
 
}

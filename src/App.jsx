import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./component/Banner/Banner";
import JobCategory from "./component/JobCategory/JobCategory";
import JobFeatures from "./component/JobFetures/JobFeatures";

const App = () => {
  const [JobFeature,categoryJob] = useLoaderData();
  return (
    <div className="max-w-5xl m-auto ">
      <Banner></Banner>
      <JobCategory categoryJob={categoryJob}></JobCategory>
      <JobFeatures JobFeature={JobFeature}></JobFeatures>
    </div>
  );
};

export default App;

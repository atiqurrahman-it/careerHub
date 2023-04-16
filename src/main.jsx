import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import Main from "./component/Laout/Main";
import "./index.css";

import dataLoader from '../src/loader/feature_andCaretory_jobLoader';
import featureDataLoader from '../src/loader/featureDataLoader';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./component/Jobs/Jobs";
import SingleFeature from "./component/SingleFeature/SingleFeature";
import Statistics from './component/Statistics/Statistics';
import jobLoader from "./loader/loadedJobsData";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Blog from "./component/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <App />,
        loader:dataLoader
      },
      {
        path: "feature/:featureId",
        element: <SingleFeature />,
        loader:({params})=>featureDataLoader(params.featureId)
      },
      {
        path: "statistic",
        element:<Statistics/>,
        loader:()=>fetch('assignments.json')
        
      },
      {
        path: "jobs",
        element:<Jobs/>,
        loader:jobLoader
      },
      {
        path: "blog",
        element:<Blog/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

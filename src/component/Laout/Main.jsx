import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../component/Header/Header";
import Footer from "../Footer/Footer";
const main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default main;

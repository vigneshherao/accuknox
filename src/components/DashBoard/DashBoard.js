import { useEffect, useState } from "react";
import DashBoardHeader from "./DashBoardHeader";
import Category from "../Categories/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchBar from "../SearchResponsive/SearchBar";

const DashBoard = () => {
  return (
    <div>
      <ToastContainer />
      <DashBoardHeader />
      <SearchBar />
      <Category />
    </div>
  );
};

export default DashBoard;

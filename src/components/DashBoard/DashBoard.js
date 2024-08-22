import React, { useEffect } from "react";
import DashBoardHeader from "./DashBoardHeader";
import Category from "../Categories/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashBoard = () => {
  return (
    <div>
      <ToastContainer />
      <DashBoardHeader />
      <Category />
    </div>
  );
};

export default DashBoard;

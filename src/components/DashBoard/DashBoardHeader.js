import React from "react";
import { useDispatch } from "react-redux";
import { openWidget } from "../../utils/widgetSlice";
import {
  ADD,
  DASH_BOARD,
  LAST,
  Options,
  REFRESH,
} from "../../utils/constantsVariables";

const DashBoardHeader = () => {
  const dispatch = useDispatch();

  const handleWidget = () => {
    dispatch(openWidget());
  };

  return (
    <div className=" px-4  flex sm:flex justify-between items-center sm:px-10 mt-8">
      <div>
        <h2 className="font-semibold">{DASH_BOARD}</h2>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleWidget}
          className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold"
        >
          {ADD}
        </button>
      </div>
      <div className="hidden md:block">
        <button
          onClick={handleWidget}
          className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold"
        >
          {ADD}
        </button>
        <button className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold">
          {REFRESH}
        </button>
        <button className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold">
          {Options}
        </button>
        <button className="bg-white border-2 border-blue-800 p-1 mr-2 text-blue-800 font-semibold">
          {LAST}
        </button>
      </div>
    </div>
  );
};

export default DashBoardHeader;

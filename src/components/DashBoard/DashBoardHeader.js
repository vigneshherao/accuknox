import React from "react";

const DashBoardHeader = () => {
  return (
    <div className="flex justify-between items-center px-10 mt-8">
      <div>
        <h2 className="font-semibold">CNAAP DashBoard</h2>
      </div>
      <div className="hidden md:block">
        <button className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold">
          Add Widget
        </button>
        <button className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold">
          Refresh
        </button>
        <button className="bg-white border p-1 mr-2 text-gray-500 hover:border-2 hover:border-blue-800  hover:text-blue-800 font-semibold">
          Options
        </button>
        <button className="bg-white border-2 border-blue-800 p-1 mr-2 text-blue-800 font-semibold">
          Last 2 days
        </button>
      </div>
    </div>
  );
};

export default DashBoardHeader;

import React from "react";

const DashBoardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-semibold">CNAAP DashBoard</h2>
      </div>
      <div>
        <button className="bg-white border p-1 mr-2">Add Widget</button>
        <button className="bg-white border p-1 mr-2">Refresh</button>
        <button className="bg-white border p-1 mr-2">Options</button>
        <button className="bg-white border-2 border-blue-800 p-1 mr-2 text-blue-800 font-semibold">
          Last 2 days
        </button>
      </div>
    </div>
  );
};

export default DashBoardHeader;

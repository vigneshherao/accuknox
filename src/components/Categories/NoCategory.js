import React from "react";
import { IMG, NO_DATA, TRY } from "../../utils/constantsVariables";

const NoCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="w-24 h-24 rounded-full mb-4 shadow-lg"
        src={IMG}
        alt="No Data"
      />
      <span className="text-gray-600 font-semibold text-lg">{NO_DATA}</span>
      <p className="text-gray-500 mt-2 text-sm">{TRY}</p>
    </div>
  );
};

export default NoCategory;

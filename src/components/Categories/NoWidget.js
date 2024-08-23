import React from "react";
import { IMG, NO_GRAPH } from "../../utils/constantsVariables";

const NoWidget = ({ widgetName }) => {
  return (
    <div className="w-full mt-5 sm:w-[32%] h-60 bg-white mx-2 rounded-lg p-4">
      <h3 className="font-bold mb-2">{widgetName}</h3>
      <div className="flex items-center h-full justify-center">
        <img className="w-10 h-10" src={IMG}></img>
        <span className="text-gray-500">{NO_GRAPH}</span>
      </div>
    </div>
  );
};

export default NoWidget;

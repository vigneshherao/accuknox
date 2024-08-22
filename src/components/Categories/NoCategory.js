import React from "react";

const NoCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="w-24 h-24 rounded-full mb-4 shadow-lg"
        src="https://static.vecteezy.com/system/resources/previews/006/732/096/non_2x/bar-chart-logo-icon-sign-symbol-design-free-vector.jpg"
        alt="No Data"
      />
      <span className="text-gray-600 font-semibold text-lg">
        No Data Available
      </span>
      <p className="text-gray-500 mt-2 text-sm">
        Try searching with matching categorie or widget
      </p>
    </div>
  );
};

export default NoCategory;

import React from "react";

const AddWidget = () => {
  return (
    <div className="w-full mt-5 sm:w-[32%] h-60 bg-white mx-2 rounded-lg p-4">
      <div className="flex items-center h-full justify-center">
        <button className="p-1 px-2 bg-gray-100 border-2 rounded-sm text-gray-600 hover:text-gray-900 hover:font-semibold">
          ➕ Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddWidget;

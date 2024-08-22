import React from "react";

const AddWidgetForm = () => {
  return (
    <div className="bg-white h-screen w-4/12 rounded-lg shadow-lg flex flex-col">
      <div className="bg-blue-900 w-full h-12 px-4 flex justify-between items-center rounded-t-lg">
        <h3 className="text-white font-semibold">Add Widget</h3>
        <p className="text-white cursor-pointer">Close</p>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-700 mb-4">
          Personalize the dashboard by adding your Widget
        </p>
        <form className="space-y-4">
          <div className="w-full">
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Widget Name"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Widget Text"
            />
          </div>
        </form>
      </div>
      <div className="p-4 bg-gray-100 flex justify-end space-x-2 rounded-b-lg">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Cancel
        </button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddWidgetForm;

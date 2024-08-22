import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { closeWidget } from "../../utils/widgetSlice";
import { addData } from "../../utils/dataSlice";

const AddWidgetForm = () => {
  const name = useRef(null);
  const text = useRef(null);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeWidget());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const widgetData = {
      name: name.current.value,
      text: text.current.value,
    };
    console.log(widgetData);
  };

  return (
    <div className="fixed top-0 right-0 z-10 h-full w-5/12 bg-white shadow-lg">
      <div className="bg-white h-screen w-full rounded-lg shadow-lg flex flex-col">
        <div className="bg-blue-900 w-full h-12 px-4 flex justify-between items-center">
          <h3 className="text-white font-semibold">Add Widget</h3>
          <p className="text-white cursor-pointer" onClick={handleClose}>
            Close
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="p-6 flex-grow">
            <p className="text-gray-700 mb-4">
              Personalize the dashboard by adding your Widget
            </p>
            <div className="w-full">
              <input
                ref={name}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Widget Name"
              />
            </div>
            <div className="w-full">
              <input
                ref={text}
                name="us"
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Widget Text"
              />
            </div>
          </div>
          <div className="p-4 bg-gray-100 flex justify-end space-x-2 rounded-b-lg">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetForm;

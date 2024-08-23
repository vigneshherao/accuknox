import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import useAddWidget from "../../hooks/useAddWidget";
import { ADD, CANCEL, CONFIRM, PARA } from "../../utils/constantsVariables";

const AddWidgetForm = () => {
  const categories = [
    "CSPM Executive Dashboard",
    "CWPP Dashboard",
    "Registry Scan",
  ];
  const nameRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [handleSubmit, handleClose] = useAddWidget(
    nameRef,
    textRef1,
    textRef2,
    activeCategory
  );

  return (
    <div className="fixed top-0 right-0 z-10 h-full w-full sm:w-5/12 bg-white shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="bg-white h-screen w-full rounded-lg shadow-lg flex flex-col">
          <div className="bg-blue-900 w-full h-12">
            <div className="flex justify-between items-center px-4 mt-2 mb-2">
              <h3 className="text-white text-sm sm:text-base font-semibold">
                {ADD}
              </h3>
              <p className="text-white cursor-pointer" onClick={handleClose}>
                <IoCloseOutline style={{ width: "30px", height: "24px" }} />
              </p>
            </div>
            <p className="mt-5 text-gray-700 mb-1 text-start px-2 text-xs sm:text-sm">
              {PARA}
            </p>
            <div className="flex justify-start space-x-2 sm:space-x-4 px-2 bg-slate-200">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(categories[index])}
                  className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm ${
                    activeCategory === category
                      ? "font-medium text-blue-900 border-b-2 border-blue-900"
                      : "text-gray-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 sm:mt-16 p-4 sm:p-6 flex-grow">
            <div className="w-full mb-3 sm:mb-4">
              <input
                ref={nameRef}
                className="w-full p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
                type="text"
                placeholder="Widget Name"
                required
              />
            </div>
            <div className="w-full mb-3 sm:mb-4">
              <input
                ref={textRef1}
                className="w-full p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
                type="text"
                placeholder="Widget label1"
              />
            </div>
            <div className="w-full">
              <input
                ref={textRef2}
                className="w-full p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
                type="text"
                placeholder="Widget label2"
              />
            </div>
          </div>
          <div className="p-4 bg-gray-100 flex justify-end space-x-2 rounded-b-lg">
            <button
              type="button"
              className="bg-white border-2 border-blue-950 text-blue-950 px-4 py-2 text-xs sm:text-sm rounded-md hover:bg-slate-200"
              onClick={handleClose}
            >
              {CANCEL}
            </button>
            <button
              type="submit"
              className="bg-blue-950 text-white px-4 py-2 text-xs sm:text-sm rounded-md hover:bg-blue-800"
            >
              {CONFIRM}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWidgetForm;

import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeWidget } from "../../utils/widgetSlice";
import { IoCloseOutline } from "react-icons/io5";
import { addData } from "../../utils/dataSlice";
import { toast } from "react-toastify";

const AddWidgetForm = () => {
  const categoires = [
    "CSPM Executive Dashboard",
    "CWPP Dashboard",
    "Registry Scan",
  ];
  const nameRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(categoires[0]);

  const handleClose = () => {
    dispatch(closeWidget());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const widgetName = nameRef.current.value;
    const widgetText1 = textRef1.current.value;
    const widgetText2 = textRef2.current.value;
    dispatch(
      addData({
        categoryName: activeCategory,
        widget: {
          name: widgetName,
          type: "pieChart",
          data:
            widgetText1 && widgetText2
              ? {
                  labels: [widgetText1, widgetText2],
                  values: [
                    Math.floor(Math.random() * 90) + 10,
                    Math.floor(Math.random() * 90) + 10,
                  ],
                  colors: [getRandomColor(), getRandomColor()],
                }
              : null,
        },
      })
    );

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    handleClose();

    toast.success("Widget added successfully!");
  };

  return (
    <div className="fixed top-0 right-0 z-10 h-full  w-12/12 lg:w-5/12 bg-white shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="bg-white h-screen w-full rounded-lg shadow-lg flex flex-col">
          <div className="bg-blue-900 w-full h-12">
            <div className="flex justify-between items-center px-4 mt-2 mb-2">
              <h3 className="text-white font-semibold">Add Widget</h3>
              <p className="text-white cursor-pointer" onClick={handleClose}>
                <IoCloseOutline style={{ width: "40px", height: "30px" }} />
              </p>
            </div>
            <p className="text-gray-700 mb-1 text-start px-2">
              Personalize the dashboard by adding your Widget
            </p>
            <div className="flex justify-start space-x-4 px-2  bg-slate-200">
              {categoires.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(categoires[index])}
                  className={`px-4 py-2 ${
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
          <div className="p-6 flex-grow mt-16">
            <div className="w-full mb-4">
              <input
                ref={nameRef}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Widget Name"
                required
              />
            </div>
            <div className="w-full mb-4">
              <input
                ref={textRef1}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Widget label1"
              />
            </div>
            <div className="w-full">
              <input
                ref={textRef2}
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Widget label2"
              />
            </div>
          </div>
          <div className="p-4 bg-gray-100 flex justify-end space-x-2 rounded-b-lg">
            <button
              type="button"
              className="bg-white border-2 border-blue-950 text-blue-950 px-4 py-2 rounded-md hover:bg-slate-200"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWidgetForm;

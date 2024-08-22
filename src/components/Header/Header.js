import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData } from "../../utils/dataSlice";

const Header = () => {
  const [inputData, setinputData] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((store) => store?.jsonData?.data);

  useEffect(() => {
    const filterData = data.categories.filter(
      (category) =>
        category?.name?.toLowerCase().includes(inputData.toLowerCase()) ||
        category.widgets.some((widget) =>
          widget?.name?.toLowerCase().includes(inputData.toLowerCase())
        )
    );
    dispatch(addFilteredData(filterData));
  }, [inputData, data.categories, dispatch]);

  return (
    <header className="flex justify-between items-center bg-white px-10 h-12">
      <div className="cursor-pointer">
        <h3 className="font-semibold text-gray-400">
          Home &#x2192;
          <span className="font-bold text-blue-900"> DashBoard V2</span>
        </h3>
      </div>
      <div className="flex items-center">
        <div className="hidden md:block h-full w-[500px]">
          <input
            value={inputData}
            onChange={(e) => setinputData(e.target.value)}
            className="bg-slate-200 w-full pl-5 h-8 rounded-md"
            type="text"
            placeholder="🔍 Search anything..."
          />
        </div>
        <div className="ml-4 flex cursor-pointer">
          <CiBellOn
            className="mr-5"
            style={{ width: "25px", height: "20px" }}
          />
          <CiUser style={{ width: "25px", height: "20px" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;

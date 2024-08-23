import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { DASHBOARD, HOME } from "../../utils/constantsVariables";
import useFilter from "../../hooks/useFilter";

const Header = () => {
  const [inputData, setinputData] = useState("");

  useFilter(inputData);

  return (
    <header className="px-4 flex sm:flex justify-between items-center bg-white md:px-10 h-12">
      <div className="cursor-pointer">
        <h3 className="font-semibold text-gray-400">
          {HOME} &#x2192;
          <span className="font-bold text-blue-900">{DASHBOARD}</span>
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

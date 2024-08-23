import React from "react";
import { useState } from "react";
import useFilter from "../../hooks/useFilter";

const SearchBar = () => {
  const [inputData, setinputData] = useState("");

  useFilter(inputData);

  return (
    <div className=" md:hidden h-full w-full flex justify-center mt-10">
      <input
        value={inputData}
        onChange={(e) => setinputData(e.target.value)}
        className="bg-slate-200 w-[80%] pl-5 h-8 rounded-md"
        type="text"
        placeholder="🔍 Search anything..."
      />
    </div>
  );
};

export default SearchBar;

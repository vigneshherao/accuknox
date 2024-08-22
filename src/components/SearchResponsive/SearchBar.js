import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData } from "../../utils/dataSlice";
import { useEffect, useState } from "react";

const SearchBar = () => {
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

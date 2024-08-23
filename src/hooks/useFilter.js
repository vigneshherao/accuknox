import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilteredData } from "../utils/dataSlice";

const useFilter = (inputData) => {
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
};

export default useFilter;

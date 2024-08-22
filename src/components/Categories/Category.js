import React, { useState } from "react";
import Widget from "./Widget";
import { jsonData } from "../../utils/constants";
import AddWidget from "./AddWidget";
import AddWidgetForm from "../Forms/AddWidgetForm";
import { useSelector } from "react-redux";
import NoCategory from "./NoCategory";

const Category = () => {
  const data = useSelector((store) => store?.jsonData?.filterData);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <NoCategory />;
  }

  return (
    <div className="px-4 sm:px-10 mt-10 pb-10">
      {data.map((data) => {
        return (
          <div className="mt-2" key={data.name}>
            <h3 className="font-bold">{data.name}</h3>
            <div className="flex flex-wrap mx-2">
              {data.widgets.map((widgetData, idx) => (
                <Widget key={idx} widgetData={widgetData} />
              ))}
              <AddWidget />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

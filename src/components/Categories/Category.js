import React, { useState } from "react";
import Widget from "./Widget";
import { jsonData } from "../../utils/constants";
import AddWidget from "./AddWidget";
import AddWidgetForm from "../Forms/AddWidgetForm";

const Category = () => {
  const [data, setData] = useState(jsonData);

  return (
    <div className="px-4 sm:px-10 mt-10 pb-10">
      {data.categories.map((data) => {
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

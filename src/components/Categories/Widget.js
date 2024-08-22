import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NoWidget from "./NoWidget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ widgetData }) => {
  const { name, type, data } = widgetData;

  if (!data) {
    return <NoWidget widgetName={name} />;
  }

  const barChartData = {
    labels: data.labels,
    datasets: [
      {
        label: name,
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full mt-5 sm:w-[32%] h-60 bg-white mx-2 rounded-lg p-4">
      <h3 className="font-bold mb-2">{name}</h3>
      <div className="flex items-center h-full">
        {type === "pieChart" && (
          <div className="w-7/12 flex justify-center">
            <PieChart
              data={data.labels.map((label, index) => ({
                title: label,
                value: data.values[index],
                color: data.colors[index],
              }))}
              lineWidth={20}
              radius={30}
              label={({ dataEntry }) => `${dataEntry.value} Total`}
              labelStyle={{
                fontSize: "5px",
                fill: "#000",
              }}
            />
          </div>
        )}
        {type === "barChart" && (
          <div className="w-full h-full mr-1">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        )}
        <div className="hidden sm:w-5/12 sm:flex flex-col justify-center">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <span
                className="block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: data.colors[index] }}
              ></span>
              <span className="text-sm">
                {label} ({data.values[index]})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;

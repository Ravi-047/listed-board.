"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  datasets: [
    {
      data: [55, 31, 14],
      label: "% sold",
      backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      borderWidth: 0,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        display: false,
        usePointStyle: true,
        pointRadius: 1,
      },
    },
    title: {
      display: false,
    },
  },
};

const PieChart = () => {
  return (
    <div>
      <div className="pie_totoal_p">
        <p>Top products</p>
        <select>
          <option value=""> May - June 2021 </option>
        </select>
      </div>

      <div className="pice_act_data">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;

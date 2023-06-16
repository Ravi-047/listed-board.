"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        pointRadius: 1,
      },
    },
    title: {
      display: false,
    },
  },
};

const labels = ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""];

export const data = {
  labels,

  datasets: [
    {
      label: "Guest",
      data: labels.map(() => Math.floor(Math.random() * 500) + 1),
      borderColor: "#E9A0A0",
      backgroundColor: "#E9A0A0",
      tension: 0.4,
    },
    {
      label: "User",
      data: labels.map(() => Math.floor(Math.random() * 500) + 1),
      borderColor: "#9BDD7C",
      backgroundColor: "#9BDD7C",
      tension: 0.4,
    },
  ],
};

const LineCart = () => {
  return (
    <div>
      <div className="mt-7 ml-4">
        <p className="graph_activity">Activities</p>
        <select>
          <option value=""> May - June 2021 </option>
        </select>
      </div>
      <div className="chart_graph">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineCart;

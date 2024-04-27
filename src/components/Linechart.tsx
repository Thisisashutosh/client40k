'use client'

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from "chart.js";

ChartJS.register(
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [8514, 11255, 9885, 15554, 28551, 26318, 21579],
          borderColor: "#1C274C",
          backgroundColor: "#1C274C",
          tension: 0.4, // Adjust the line curve
          borderWidth: 3, // Adjust the line thickness
          pointBackgroundColor: "#1C274C", // Adjust the point color
          pointRadius: 5, // Adjust the point size
        },
      ],
    } as any);
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6B7280",
          },
        },
        y: {
          grid: {
            color: "#E5E7EB",
          },
          ticks: {
            color: "#6B7280",
          },
        },
      },
    });
  }, []);
  return (
    <>
      <div className="bh-white m-auto h-[30vh] w-full md:w-[calc(100vw-20rem)] xl:w-[calc(100vw-40rem)] overflow-hidden rounded-lg border p-4 md:col-span-2 lg:h-[60vh]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default LineChart;

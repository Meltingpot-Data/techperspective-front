import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function(value) {if (value % 1 === 0) return value},
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Number of People who took the survey',
      position: 'left'
    },
  },
};

  export default function ResultsGraph(props) {

    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"]
  if (!props.surveyToGraph) {
  return null
}

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Questions Answered True',
      data: props.surveyToGraph,
      backgroundColor: '#EA4444',
    },
  ],
};

return <Bar
  data={data}
  width={150}
  height={50}
  options={options}
/>;
}

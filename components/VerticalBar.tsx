import React from 'react';
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
import { options } from '../chartUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBar = ({ data }: any) => {
  const labels = data.map((item: any) => {
    const month: Date = new Date(item.time.min);
    return month.getMonth() + 1;
  });

  const cleanData = data.map((item: any) => {
    return item.value.average;
  });

  const datas = {
    labels,
    datasets: [
      {
        label: 'Emissioni CO2',
        data: labels.map((month: number, index: number) => {
          return cleanData[index];
        }),
        backgroundColor: 'rgb(86, 203, 249, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={datas} />;
};

export default VerticalBar;

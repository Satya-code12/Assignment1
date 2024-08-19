import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Card = ({title}) => {
  const data = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#3B82F6', '#BFDBFE']
      },
    ],
  };

  const options = {
    cutout: '60%', // This will make the center cutout larger to match the design
    plugins: {
      legend: {
        display: false, // Hide default legend
      }
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
    
      <h2 className="text-lg font-medium mb-4">Cloud Accounts </h2>
      <div className="flex items-center">
        <div className="relative w-32 h-32">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold">2</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>
        <div className="ml-8">
          <div className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Connected (2)</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-blue-200 rounded-full mr-2"></span>
            <span className="text-gray-700">Not Connected (2)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

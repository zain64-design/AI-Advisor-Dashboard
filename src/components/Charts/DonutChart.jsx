import React, { useState,useEffect } from 'react'
import ApexCharts from 'react-apexcharts';

const DonutChart = ({series}) => {

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',  // Default chart type is donut
      width: 500,
    },
    labels: ['A', 'B', 'C', 'D', 'E'],  // Default labels
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      position: 'right',  // Legend position for larger screens
    },
  });

  useEffect(() => {
    // Example: Change chart labels dynamically
    setOptions((prevOptions) => ({
      ...prevOptions,
      labels: ['Crypto', 'Real-Estate', 'Industry','Technology','Energy'],
    }));
  }, []); 

  return (
    <>
    <ApexCharts options={options} series={series} type="donut"/>
    </>
  )
}

export default DonutChart
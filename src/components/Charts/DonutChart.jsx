import React, { useState,useEffect } from 'react'
import ApexCharts from 'react-apexcharts';

const DonutChart = ({series,labels}) => {

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
      width: '100%',
      height: 200,
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: '100%',
            height: 350
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
            height: 400
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: '100%',
            height: 350
          },
          legend: {
            position: 'right',
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '100%',
            height: 600
          },
          legend: {
            position: 'right',
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          chart: {
            width: '100%',
            height: 500
          },
          legend: {
            position: 'right',
          },
        },
      },
    ],
    legend: {
      position: 'right', // To position the legend at the bottom
      horizontalAlign: 'center', // Center the legend horizontally
      verticalAlign: 'center', // Center the legend vertically
      fontSize: '22px',
      fontFamily: 'Inter,sans-serif',
      fontWeight: 400,
      color: '#67677A',
      itemMargin: {
        horizontal: 5, // Horizontal margin between legend items
        vertical: 5, // Vertical margin between legend items
      },
      markers: {
        width: 28, // Size of the markers next to each legend item
        height: 28,
      },
    },
    colors: ['#089BAB', '#FFBF3E', '#6347EB', '#F36068', '#01C5DB'],
  });

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      labels: labels,
    }));
  }, [labels]); 

  return (
    <>
    <ApexCharts options={options} series={series} type='donut'/>
    </>
  )
}

export default DonutChart
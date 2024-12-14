import React, { useState,useEffect } from 'react'
import ApexCharts from 'react-apexcharts';

const AreaChart = ({trendData,stockName,title,trendColor}) => {
  
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
      height: '100%',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 2000,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: '25%',
            height: 90
          }
        }
      },
      {
        breakpoint: 5000,
        options: {
          chart: {
            width: '40%',
            height: 100
          }
        }
      }
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'butt',
      dashArray: [0, 3]
    },
    markers: false,
    fill: {
      // type: 'solid',
      // opacity: 0,
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 50, 100]
      },

    },
    xaxis: {
      show: false,
      axisBorder: {
        show: false
    },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    colors: ['#4ddeb2'],
    legend: {
      show: false,
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: stockName,
      data: [],
    },
  ]);

  useEffect(() => {
    if (trendData && trendData.length > 0) {
      setChartSeries([
        {
          name: stockName,
          data: trendData,
        },
      ]);

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        colors:[trendColor],
        xaxis: {
          ...prevOptions.xaxis,
          categories: trendData.map((_, index) => title),
        },
        yaxis: {
          ...prevOptions.yaxis,
          max: Math.max(...trendData)
        },
      }));
    }
  }, [trendData,trendColor]);

  return (
    <>
    <ApexCharts className='area-chart' options={chartOptions} series={chartSeries} type='area'/>
    </>
  )
}

export default AreaChart
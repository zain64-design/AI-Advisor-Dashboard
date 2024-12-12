import React, { useState,useEffect } from 'react'
import ApexCharts from 'react-apexcharts';

const DonutChart = ({series,labels}) => {

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: '100%',
            height: 300
          },
          legend: {
            position: 'bottom',
            fontSize: '14px',
            itemMargin: {
              horizontal: 2,
              vertical: 2,
            },
            markers: {
              size: 7,
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: { 
                    fontSize: '10px',
                   },
                  value: {
                    fontSize: '16px',
                  },
                }
              }
            }
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
            fontSize: '18px',
            itemMargin: {
              horizontal: 5,
              vertical: 5,
            },
            markers: {
              size: 8,
            },
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: '100%',
            height: 500
          },
          legend: {
            position: 'right',
            horizontalAlign: 'center',
            fontSize: '20px',
            itemMargin: {
              horizontal: 5,
              vertical: 5,
            }
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '100%',
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
          },
          legend: {
            position: 'right',
            fontSize: '16px',
            itemMargin: {
              horizontal: 1,
              vertical: 10,
            },
            markers: {
              size: 8,
            },
          },
        },
      },
      {
        breakpoint: 3000,
        options: {
          chart: {
            width: '72%',
          },
          // legend: {
          //   position: 'right',
          //   fontSize: '16px',
          //   itemMargin: {
          //     horizontal: 1,
          //     vertical: 10,
          //   },
          //   markers: {
          //     size: 8,
          //   },
          // },
        },
      },
    ],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: "70",
          },
          labels: {
            show: true,
            total: { 
              show: true,
              fontSize: '20px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              color: '#67677A',
              label: 'Portfolio Value', 
             },
             name: {
              color: '#67677A',
            },
            value: {
              fontSize: '30px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              color: '#000',
            },
          }
        }
      }
    },
    legend: {
      position: 'right',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      fontSize: '22px',
      fontFamily: 'Inter,sans-serif',
      fontWeight: '400',
      color: '#67677A',
      itemMargin: {
        horizontal: 1,
        vertical: 14,
      },
      markers: {
        size: 12,
        shape: 'circle',
        radius: 6,
        strokeWidth: 2,
        strokeColor: '#000',
      },
      formatter: (seriesName, opts) => {
        // Fetch current series value
        const total = opts.w.globals.series[opts.seriesIndex];
        return `${seriesName} (${total}%)`;
      }
    },
    title: {
      text: 'Statistics',
      align: 'left',
      style: {
        fontSize: '22px',
        fontFamily: 'Inter,sans-serif',
        fontWeight: '700',
        color: '#04091E',
      }
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
    <ApexCharts className='ct-chart' options={options} series={series} type='donut'/>
    </>
  )
}

export default DonutChart
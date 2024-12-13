import React from 'react'
import { Card } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/component/home/trendStocks.scss'
import AreaChart from '../Charts/AreaChart';

const TrendStocks = ({head,sub,price,value,trendChartData}) => {

  const getValueClass = (value) => {
    if (value.startsWith('+')) {
      return 'text-green';
    } else if (value.startsWith('-')) {
      return 'text-red';
    }
    return 'text-black';
  };

  return (
    <>
      <Card className='stock-box'>
        <div className="desc">
          <Text as="h6">{head}</Text>
          <Text as="span">{sub}</Text>
        </div>
        <div className="chart-main">
          <AreaChart trendData={trendChartData} stockName={sub} title={head} />
        </div>
        <div className="stats-info">
          <Text as="h6">{price}</Text>
          <Text as="span" className={`investment-value ${getValueClass(data.value)}`}>{value}</Text>
        </div>
      </Card>
    </>
  )
}

export default TrendStocks
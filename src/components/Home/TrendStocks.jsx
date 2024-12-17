import React from 'react'
import { Card } from 'react-bootstrap';
import Text from '../UI/Text';
import TrendStockScss from '../../assets/scss/component/home/trendStocks.scss?inline'
import AreaChart from '../Charts/AreaChart';
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const TrendStocks = ({data}) => {

  useDynamicCSS(TrendStockScss);

  const getValueClass = (value) => {
    if (value.startsWith('+')) {
      return 'text-green';
    } else if (value.startsWith('-')) {
      return 'text-red';
    }
    return 'text-black';
  };

    const getTrendColor = (value) => {
      if (value.startsWith('+')) {
        return '#4ddeb2';
      } else if (value.startsWith('-')) {
        return '#e20029';
      }
      return '#000000';
    };

  const {head,sub,price,value,trendChartData} = data;

  return (
    <>
      <Card className='stock-box'>
        <div className="desc">
          <Text as="h6">{head}</Text>
          <Text as="span">{sub}</Text>
        </div>
        <div className="chart-main">
          <AreaChart trendData={trendChartData} stockName={sub} title={head} trendColor={getTrendColor(value)} />
        </div>
        <div className="stats-info">
          <Text as="h6">{price}</Text>
          <Text as="span" className={`investment-value ${getValueClass(value)}`}>{value}</Text>
        </div>
      </Card>
    </>
  )
}

export default TrendStocks
import React from 'react'
import { Card } from 'react-bootstrap';
import Text from '../UI/Text';
import '../../assets/scss/component/home/trendStocks.scss'
import AreaChart from '../Charts/AreaChart';
import useGetValueClass from '../../utils/hooks/useGetValueClass';
import useGetTrendColor from '../../utils/hooks/useGetTrendColor';

const TrendStocks = ({data}) => {
  const {getValueClass} = useGetValueClass();
  const {getTrendColor} = useGetTrendColor();
  const {head,sub,price,value,trendChartData} = data;

  const valueClass = getValueClass(value || '');

  return (
    <>
      <Card className='stock-box'>
        <div className="desc">
          <Text as="h6">{head}</Text>
          <Text as="span">{sub}</Text>
        </div>
        <div className="chart-main">
          <AreaChart chartData={trendChartData} stockName={sub} title={head} chartColor={getTrendColor(value)} />
        </div>
        <div className="stats-info">
          <Text as="h6">{price}</Text>
          <Text as="span" className={`investment-value ${valueClass}`}>{value}</Text>
        </div>
      </Card>
    </>
  )
}

export default TrendStocks
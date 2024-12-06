import React from 'react'
import { Card} from 'react-bootstrap';
import Image from '../UI/Image';
import Text from '../UI/Text';
import chart from '/images/investments/st1.svg'
import '../../assets/scss/component/home/trendStocks.scss'

const TrendStocks = () => {
  return (
    <>
        <Card className='stock-box'>
        <div className="desc">
            <Text as="h6">NFLX</Text>
            <Text as="span">Netflix</Text>
        </div>
        <figure>
            <Image src={chart} className="chart" alt='chart'/>
        </figure>
        <div className="stats-info">
          <Text as="h6">$88.91</Text>
          <Text as="span">+ 1.29%</Text>
        </div>
    </Card>
    </>
  )
}

export default TrendStocks
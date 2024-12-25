import React from 'react'
import useGetValueClass from '../../utils/hooks/useGetValueClass';
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investRecommend.scss';

const InvestRecommendBox = ({ investData }) => {

  const { getValueClass } = useGetValueClass();
  const { image, head, sub, price, value } = investData;

  const valueClass = getValueClass(value || '');


  return (
    <>
      <Card className='invest-box'>
        <figure>
          <Image src={image} className="logo" alt='logo' />
        </figure>
        <div className="desc">
          <Text as="h6">{head}</Text>
          <Text as="small">{sub}</Text>
        </div>
        <div className="stats-info">
          <Text as="h6">{price}</Text>
          <Text as="small" className={`investment-value ${valueClass}`}>{value}</Text>
        </div>
      </Card>
    </>
  )
}

export default InvestRecommendBox
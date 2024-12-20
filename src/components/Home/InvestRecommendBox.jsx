import React from 'react'
import useGetValueClass from '../../utils/hooks/useGetValueClass';
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investRecommend.scss';

const InvestRecommendBox = ({ investData }) => {

  const {getValueClass} =  useGetValueClass();

  return (
    <>
      {investData?.map((data) => {
        const { id, image, head, sub, price, value } = data;
        return (
          <Card className='invest-box' key={id}>
            <figure>
              <Image src={image} className="logo" alt='logo' />
            </figure>
            <div className="desc">
              <Text as="h6">{head}</Text>
              <Text as="small">{sub}</Text>
            </div>
            <div className="stats-info">
              <Text as="h6">{price}</Text>
              <Text as="small" className={`investment-value ${getValueClass(data.value)}`}>{value}</Text>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default InvestRecommendBox
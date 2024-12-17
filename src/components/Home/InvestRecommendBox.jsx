import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import InvestRecommendBoxScss from '../../assets/scss/component/home/investRecommend.scss?inline';
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const InvestRecommendBox = ({ investData }) => {

  useDynamicCSS(InvestRecommendBoxScss);

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
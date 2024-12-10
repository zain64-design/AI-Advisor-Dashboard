import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import logo from '/images/investments/ir1.svg';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investRecommend.scss';

const InvestRecommendBox = ({investData,isInvestLoading}) => {

    const getValueClass = (value) => {
      if (value.startsWith('+')) {
        return 'text-green';
      } else if (value.startsWith('-')) {
        return 'text-red';
      }
      return 'text-black';
    };

  if (isInvestLoading) {
    return <Text as="h6">Loading...</Text>;
  }

  return (
    <>
    {investData?.map((data)=> {
      const {id,image,head,sub,price,value} = data;
      return (
        <Card className='invest-box' key={id}>
        <figure>
            <Image src={image} className="logo" alt='logo'/>
        </figure>
        <div className="desc">
            <Text as="h6">{head}</Text>
            <Text as="span">{sub}</Text>
        </div>
        <div className="stats-info">
          <Text as="h6">{price}</Text>
          <Text as="span" className={`investment-value ${getValueClass(data.value)}`}>{value}</Text>
        </div>
    </Card>
      )
    })}
    </>
  )
}

export default InvestRecommendBox
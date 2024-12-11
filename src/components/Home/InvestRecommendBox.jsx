import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investRecommend.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InvestRecommendBox = ({ investData, isInvestLoading }) => {

  const getValueClass = (value) => {
    if (value.startsWith('+')) {
      return 'text-green';
    } else if (value.startsWith('-')) {
      return 'text-red';
    }
    return 'text-black';
  };

  if (isInvestLoading) {
    return (
      <>
        {console.log('invoked InvestRecommendBox Loading')}
        {Array.from({ length: 7 }).map((_, index) => (
          <Card className="invest-box" key={index}>
            <figure>
              <Skeleton circle={true} height={44} width={44} />
            </figure>
            <div className="desc">
              <Skeleton count={2} height={10} width={100} />
            </div>
            <div className="stats-info">
              <Skeleton count={2} height={10} width={50} />
            </div>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
      {console.log('invoked InvestRecommendBox')}
      {investData?.map((data) => {
        const { id, image, head, sub, price, value } = data;
        return (
          <Card className='invest-box' key={id}>
            <figure>
              <Image src={image} className="logo" alt='logo' />
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
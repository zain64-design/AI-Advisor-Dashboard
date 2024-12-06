import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import logo from '/images/investments/ir1.svg';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investRecommend.scss';

const InvestRecommendBox = () => {
  return (
    <>
    <Card className='invest-box'>
        <figure>
            <Image src={logo} className="logo" alt='logo'/>
        </figure>
        <div className="desc">
            <Text as="h6">SOL</Text>
            <Text as="span">Solana</Text>
        </div>
        <div className="stats-info">
          <Text as="h6">$150.91</Text>
          <Text as="span">+ 1.29%</Text>
        </div>
    </Card>
    </>
  )
}

export default InvestRecommendBox
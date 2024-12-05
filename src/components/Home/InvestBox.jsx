import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import logo from '/images/investments/i1.svg';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investBox.scss'

const InvestBox = () => {
  return (
    <>
    <Card className='invest-box'>
        <figure>
            <Image src={logo} className="blog-img" alt='blog'/>
        </figure>
        <div className="desc">
            <Text as="h6">Bitcoin</Text>
            <Text as="span">09 Sep</Text>
        </div>
    </Card>
    </>
  )
}

export default InvestBox
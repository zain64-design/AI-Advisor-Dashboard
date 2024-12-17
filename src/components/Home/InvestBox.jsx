import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investBox.scss';

const InvestBox = ({recentData}) => {

  return (
    <>
    {recentData?.map((data)=> {
      const {id,image,head,date} = data;
      return(
        <Card className='invest-box' key={id}>
        <figure>
            <Image src={image} className="logo" alt='blog'/>
        </figure>
        <div className="desc">
            <Text as="h6">{head}</Text>
            <Text as="span" className='date'>{date}</Text>
        </div>
    </Card>
      )
    })}
    </>
  )
}

export default InvestBox
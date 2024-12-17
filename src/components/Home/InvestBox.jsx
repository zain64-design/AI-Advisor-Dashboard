import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import InvestBoxScss from '../../assets/scss/component/home/investBox.scss?inline';
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const InvestBox = ({recentData}) => {

  useDynamicCSS(InvestBoxScss);

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
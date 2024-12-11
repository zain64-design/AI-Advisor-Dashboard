import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investBox.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InvestBox = ({recentData,isRecentLoading}) => {

  if (isRecentLoading) {
    return (
      <>
        {console.log('invoked InvestBox Loading')}
        {Array.from({ length: 5 }).map((_, index) => (
          <Card className="invest-box" key={index}>
            <figure>
              <Skeleton circle={true} height={42} width={42} />
            </figure>
            <div className="desc" style={{ display: 'flex' }}>
              <Skeleton count={2} height={10} width={100} />
            </div>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
        {console.log('invoked InvestBox')}
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
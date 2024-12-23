import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../assets/scss/component/news/navTabs.scss'
import { Row,Col } from 'react-bootstrap';
import NewsCard from './NewsCard';
import Text from '../UI/Text'
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import { NEWS_API } from '../../utils/constant';
import NewsLoader from '../Loader/NewsLoader';


const useFetchData = (key, url,staleTime) => {
  return useQuery({
    queryKey: ['news', key],
    queryFn: () => useFetchAPI(url, { category: key }),
    staleTime: staleTime,
  })
}

const NavTabs = () => {

  const [key, setKey] = useState('all');

  const tabsInfo = [
    {
      title: 'all',
      eventKey: 'all'
    },
    {
      title: 'real estate',
      eventKey: 'real-estate'
    },
    {
      title: 'stocks',
      eventKey: 'stocks'
    },
    {
      title: 'mutual funds',
      eventKey: 'mutual-funds'
    },
    {
      title: 'crypto',
      eventKey: 'crypto'
    }
  ]

  const { data: newsData, isLoading, isError, error } = useFetchData(['news data'], NEWS_API,120000)

  const filteredNewsData = newsData ? newsData.filter((item) => {
    return key === 'all' || item.category === key;
  }) : [];


  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="ct-tabs justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start"
      >
        {tabsInfo?.map(({title,eventKey},index) => (
          <Tab eventKey={eventKey} title={title} key={index}>
            <Row>
              {isLoading
              ? Array.from({ length: 6 }).map((_,index) => (
                <Col className='mb-4' xs= {12} sm={6} md={6} lg={4} xl={4} xxl={4} key={index}>
                  <NewsLoader/>
                </Col>
              ))
              : isError
              ? <Text as='h1'>Error: {error.message}</Text>
              : filteredNewsData?.map(value=><Col className='mb-4' xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} key={value.id}>
                <NewsCard newsData={value} />
                </Col>)}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}

export default NavTabs
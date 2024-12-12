import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../assets/scss/component/news/navTabs.scss'
import { Row } from 'react-bootstrap';
import NewsCard from './NewsCard';
import Text from '../UI/Text'
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import { NEWS_API } from '../../utils/constant';
import NewsLoader from '../Loader/NewsLoader';

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

  const useFetchData = (key, url) => {
    return useQuery({
      queryKey: ['news', key],
      queryFn: () => useFetchAPI(url, { category: key })
    })
  }

  const { data: newsData, isLoading, isError, error } = useFetchData(['news data'], NEWS_API)

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
              ? Array.from({ length: 3 }).map((_,index) => (
                <NewsLoader key={index}/>
              ))
              : isError
              ? <Text as='h1'>Error: {error.message}</Text>
              : <NewsCard filteredNewsData={filteredNewsData} />}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}

export default NavTabs
import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Text from '../UI/Text'
import '../../assets/scss/component/news/navTabs.scss'
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import { RECOMMENDATION_API } from '../../utils/constant';
import SkRecommendLoader from '../Loader/SkRecommendLoader';
import RecommendBox from './RecommendBox';


const useFetchData = (key, url,staleTime) => {
    return useQuery({
      queryKey: [key],
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
            title: 'crypto',
            eventKey: 'crypto'
          },
        {
          title: 'mutual funds',
          eventKey: 'mutual-funds'
        }
      ]
    
      const { data: recommendData, isLoading, isError, error } = useFetchData(['news data'], RECOMMENDATION_API,10000)
    
      const filteredRecommendData = recommendData ? recommendData.filter((item) => {
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
            <div className='recommend-details'>
              {isLoading
              ? Array.from({ length: 6 }).map((_,index) => (<SkRecommendLoader key={index}/>))
              : isError
              ? <Text as='h6'>Error: {error.message}</Text>
              : filteredRecommendData?.map(value => <RecommendBox key={value.id} investData={value}/>)}
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}

export default NavTabs
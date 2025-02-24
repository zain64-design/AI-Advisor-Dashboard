import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsDetailsBox from '../components/News/NewsDetailsBox'
import useAOS from '../utils/hooks/useAOS'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import useFetchAPI from '../utils/hooks/useFetchAPI'
import { NEWS_DETAILS_API } from '../utils/constant'
import Text from '../components/UI/Text'
import SkNewsDetailLoader from '../components/Loader/SkNewsDetailLoader'


const NewsDetail = () => {

  useAOS();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {id} =  useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['newsDetail',id],
    queryFn: () => useFetchAPI(NEWS_DETAILS_API),
});

const newsData = data && Array.isArray(data) ? data.find(news => news.id === parseInt(id)) : null;

  return (
    <>
      <div data-aos="fade-in" className="news-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            {isLoading?<SkNewsDetailLoader/>
            :isError?<Text as='h6'>{error.message}</Text>
            :<NewsDetailsBox {...newsData}/>}
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default NewsDetail
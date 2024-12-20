import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchBar from '../components/News/SearchBar'
import TrendingStocks from '../components/News/TrendingStocks'
import useAOS from '../utils/hooks/useAOS'

const News = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className="news-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <SearchBar/>
              <TrendingStocks/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default News
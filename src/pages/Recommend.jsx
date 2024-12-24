import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import NavTabs from '../components/Recommendation/NavTabs';

const Recommend = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className="recommend-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <NavTabs/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Recommend
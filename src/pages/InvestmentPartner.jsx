import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AIChat from '../components/AIPartner/AIChat'
import useAOS from '../utils/hooks/useAOS'

const InvestmentPartner = () => {

  useAOS()
  
  return (
    <>
      <div data-aos="fade-in" className="investment-partner-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <AIChat/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default InvestmentPartner
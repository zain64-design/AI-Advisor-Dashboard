import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'

const TermsConditions = () => {

  useAOS()

  return (
    <>
    <div data-aos="fade-in" className="terms-conditions-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            TermsConditions
            </Col>
          </Row>
        </div>
      </div>
      </>
  )
}

export default TermsConditions
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import StepForm from '../components/StepForm/StepForm'
import InvestStepForm from '../components/StepForm/InvestStepForm'

const InvestmentQuestion = () => {

  useAOS()

  return (
    <>
      <div data-aos="fade-in" className="questionnaire-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            {/* <StepForm/> */}
            <InvestStepForm/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default InvestmentQuestion
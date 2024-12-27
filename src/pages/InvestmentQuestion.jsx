import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import StepForm from '../components/StepForm/StepForm'
import '../assets/scss/component/questionaire/investQuestion.scss'

const InvestmentQuestion = () => {

  useAOS()

  return (
    <>
      <div data-aos="fade-in" className="questionnaire-area">
        <Container className='ct-height'>
        <Row className='ct-height'>
            <Col className='ct-height' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <StepForm/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default InvestmentQuestion
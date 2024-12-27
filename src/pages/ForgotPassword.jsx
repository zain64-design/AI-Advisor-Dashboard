import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useAOS from '../utils/hooks/useAOS';
import '../assets/scss/component/Auth/forgotArea.scss'
import ForgotPassForm from '../components/auth/ForgotPassForm';

const ForgotPassword = () => {

  useAOS();

  return (
    <>
      <section data-aos="fade-in" className='forgot-area'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <ForgotPassForm/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ForgotPassword
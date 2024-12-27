import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useAOS from '../utils/hooks/useAOS';
import SignUpForm from '../components/Auth/SignUpForm';
import '../assets/scss/component/auth/signUpArea.scss'

const SignUp = () => {

  useAOS();

  return (
    <>
      <section data-aos="fade-in" className='signup-area'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <SignUpForm/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SignUp
import React from 'react'
import LoginForm from '../components/Auth/LoginForm';
import { Col, Container, Row } from 'react-bootstrap';
import useAOS from '../utils/hooks/useAOS';

const Login = () => {

  useAOS();

  return (
    <>
      <Container data-aos="fade-in">
        <Row className='justify-content-end'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
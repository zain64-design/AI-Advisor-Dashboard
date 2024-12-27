import React from 'react'
import LoginForm from '../components/Auth/LoginForm';
import { Container } from 'react-bootstrap';
import useAOS from '../utils/hooks/useAOS';
import '../assets/scss/component/Auth/loginArea.scss'

const Login = () => {

  useAOS();

  return (
    <>
    <section data-aos="fade-in" className='login-area'>
    <Container>
        {/* <Row className='justify-content-end'>
          <Col className='ct-offset' xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <LoginForm />
          </Col>
        </Row> */}
        <div className="ct-flex-row">
          <div className="ct-flex-col ct-offset">
          <LoginForm />
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Login
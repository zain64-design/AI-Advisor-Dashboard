import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS';

const ChangePassword = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className="change-password-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            ChangePassword
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
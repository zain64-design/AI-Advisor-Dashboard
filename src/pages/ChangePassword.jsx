import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS';
import EditPasswordBox from '../components/Settings/EditPasswordBox';

const ChangePassword = () => {

  useAOS();

  return (
    <>
      <div data-aos="fade-in" className="change-password-area">
        <div className="container-ct">
          <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
            <EditPasswordBox/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
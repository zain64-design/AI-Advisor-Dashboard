import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EditProfileBox from '../components/Settings/EditProfileBox'
import useAOS from '../utils/hooks/useAOS'

const EditProfile = () => {

  useAOS()

  return (
    <>
      <div data-aos="fade-in" className="edit-profile-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} className='offset-xl-1'>
            <EditProfileBox/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default EditProfile
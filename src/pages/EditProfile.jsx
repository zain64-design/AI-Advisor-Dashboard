import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EditProfileBox from '../components/Settings/EditProfileBox'

const EditProfile = () => {
  return (
    <>
      <div className="edit-profile-area">
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
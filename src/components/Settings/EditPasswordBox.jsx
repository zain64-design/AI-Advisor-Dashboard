import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import '../../assets/scss/component/setting/editPasswordBox.scss'
import { Link } from 'react-router';
import NavArea from './NavArea';

const EditPasswordBox = () => {
  return (
    <>
      <Card className='edit-password-box'>
        <Form>
          <div className="top-area">
            <NavArea title="Change Password" />
          </div>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="password" className='ct-inp' name="currentPassword" placeholder='Type current password' />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" className='ct-inp' name="newPassword" placeholder='Type New password' />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" className='ct-inp' name="confirmPassword" placeholder='Confirm New password' />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              {/* <Button type='submit' variant='save'>
                save changes
              </Button> */}
              <Link to='/settings' className='btn-save'>
                submit
              </Link>
            </Form.Group>
          </Row>
        </Form>
      </Card>
    </>
  )
}

export default EditPasswordBox
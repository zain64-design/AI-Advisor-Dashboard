import React from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { MdError } from "react-icons/md";
import ProfileImage from './ProfileImage'
import EditProfileBoxScss from '../../assets/scss/component/setting/editProfileBox.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const EditProfileBox = () => {

  useDynamicCSS(EditProfileBoxScss);

  const initialValues = {
    name: '',
    email: '',
  }

  const onSubmit = values => {
    console.log('Submitting form', values);
    // submit to server here
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  // console.log('visited', formik.touched);

  return (
    <>
      <Card className='edit-box'>
        <Form onSubmit={formik.handleSubmit}>
          <div className="top-area">
            <ProfileImage />
          </div>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div className="inp-area">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className='ct-inp' name="name" placeholder='Enter Admin Name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? <small>{formik.errors.name}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div className="inp-area">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" className='ct-inp' name="email" placeholder='Enter Admin Name' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}<MdError /></small> : null}
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <Button type='submit' variant='save'>
                save changes
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Card>
    </>
  )
}

export default EditProfileBox
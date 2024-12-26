import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const InvestStepForm = () => {
  return (
    <>
    <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Step/>
        </Col>
    </Row>
    </>
  )
}

export default InvestStepForm

const Step = ()=> {
    return (
        <>
<Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
        </>
    )
}
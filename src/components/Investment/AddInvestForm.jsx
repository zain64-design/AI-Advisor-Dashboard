import React, { useState } from 'react'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import '../../assets/scss/component/investment/addInvestForm.scss'

const AddInvestForm = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="add-invest-area">
        <Form>
          <Row>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" className='ct-inp' name="amount" placeholder='$5000' />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Investment Category</Form.Label>
                <Dropdown className='ct-select'>
                  <Dropdown.Toggle variant="select">
                    {selected ? selected : "Select Category"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="select-menu">
                    <Dropdown.Item onClick={() => setSelected('Crypto')}>Crypto</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelected('Real Estate')}>Real Estate</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelected('Industry')}>Industry</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="inp-area">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className='ct-inp' name="assetName" placeholder='Name your asset' />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              {/* <Button type='submit' variant='save'>
                Add Investment
              </Button> */}
              <Link to='/dashboard' className='btn-save'>
                Add Investment
              </Link>
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default AddInvestForm
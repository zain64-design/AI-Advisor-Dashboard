import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import InvestHeader from '../components/Investment/InvestHeader';
import AddInvestForm from '../components/Investment/AddInvestForm';

const AddInvestment = () => {

    useAOS();

    return (
        <>
            <div data-aos="fade-in" className="recommend-area">
                <div className="container-ct">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='pt-lg-5 pt-xl-5 pt-xxl-5 ps-lg-5 ps-xl-5 ps-xxl-5'>
                            <InvestHeader heading='Add Investment' />
                            <AddInvestForm />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AddInvestment
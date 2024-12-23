import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import NotificationBox from '../components/Notifications/NotificationBox'

const AllNotifications = () => {

    useAOS();

    return (
        <>
            <div data-aos="fade-in" className="notification-area">
                <div className="container-ct">
                    <Row className='justify-content-center'>
                        <Col xs={12} sm={12} md={12} lg={11} xl={11} xxl={11}>
                        <NotificationBox/>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AllNotifications
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SettingBox from '../components/Settings/SettingBox'
import useAOS from '../utils/hooks/useAOS'

const Settings = () => {

  useAOS()

  return (
    <>
      <div  data-aos="fade-in" className="setting-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <SettingBox />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Settings
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS'
import SettingsHeader from '../components/Settings/SettingsHeader'
import SettingsInfo from '../components/Settings/SettingsInfo'

const PrivacyPolicy = () => {

  useAOS();

  const infoData = {
    heading: 'Privacy Policy',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim dui purus sit hac ac, ornare a nibh etiam. Diam eget mauris, iaculis pellentesque hendrerit turpis dolor facilisi velit. Ullamcorper sit adipiscing sed id nisl at integer. Tristique in lectus interdum nisi augue pellentesque laoreet ullamcorper sagittis. Lectus leo ut diam laoreet sit. Sed non netus cum faucibus blandit. Non non ut donec quisque ut suscipit mauris. Est, id egestas euismod diam, sagittis condimentum vitae vestibulum. Facilisi lectus feugiat pharetra diam scelerisque suspendisse mauris consequat aliquam. Id ornare viverra ornare posuere gravida facilisi blandit. Ut vestibulum habitant tortor vel lacus ac aliquet. Condimentum condimentum ut massa lacus condimentum varius. Laoreet rutrum tincidunt enim, amet, et. Cursus adipiscing sed sapien ac sollicitudin varius. Ullamcorper sit adipiscing sed id nisl at integer. Tristique in lectus interdum nisi augue pellentesque laoreet ullamcorper sagittis. Lectus leo ut diam laoreet sit. Sed non netus cum faucibus blandit. Non non ut donec quisque ut suscipit mauris. Est, id egestas euismod diam, sagittis condimentum vitae vestibulum.'
  }

  return (
    <>
      <div data-aos="fade-in" className="privacy-policy-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='pt-lg-5 pt-xl-5 pt-xxl-5 ps-lg-5 ps-xl-5 ps-xxl-5'>
            <SettingsHeader heading={infoData.heading}/>
            <SettingsInfo para={infoData.para}/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
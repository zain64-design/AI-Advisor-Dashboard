import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useAOS from '../utils/hooks/useAOS';
import SettingsHeader from '../components/Settings/SettingsHeader'
import FAQHead from '../components/FAQ/FAQHead';
import FAQAccordion from '../components/FAQ/FAQAccordion';
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../utils/hooks/useFetchAPI';
import { FAQ_API } from '../utils/constant';

const useFetchData = (key,url)=> {
  return useQuery({
    queryKey:key,
    queryFn:()=> useFetchAPI(url),
    staleTime: 10000,
  })
}


const FAQ = () => {

  useAOS();

  const infoData = {
    heading: 'FAQs',
    subHeading: 'We’re here to help you',
    para: 'Please check our FAQ’s below if you’ve any issue regarding our app guide and usage'
  }

  const {data:faqData,isLoading,isError,error} = useFetchData(['faq data'],FAQ_API);

  return (
    <>
      <div data-aos="fade-in" className="faq-area">
        <div className="container-ct">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='pt-lg-5 pt-xl-5 pt-xxl-5 px-lg-5 px-xl-5 px-xxl-5'>
            <SettingsHeader heading={infoData.heading}/>
            <FAQHead subHeading={infoData.subHeading} para={infoData.para} />
            <FAQAccordion faqData={faqData} isLoading={isLoading} isError={isError} error={error}/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FAQ
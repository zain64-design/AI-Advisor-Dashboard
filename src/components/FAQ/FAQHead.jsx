import React from 'react'
import Text from '../UI/Text'
import '../../assets/scss/component/faq/faqHead.scss'

const FAQHead = ({subHeading,para}) => {
  return (
    <>
    <div className="faq-head">
        <Text as='h5'>{subHeading}</Text>
        <Text as='p'>{para}</Text>
    </div>
    </>
  )
}

export default FAQHead
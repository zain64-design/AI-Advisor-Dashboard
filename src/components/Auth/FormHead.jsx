import React from 'react'
import Text from '../UI/Text'
import FormHeadScss from '../../assets/scss/component/Auth/formHead.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS'

const FormHead = () => {
  useDynamicCSS(FormHeadScss);
  return (
    <>
    <div className="form-head">
        <Text as='h6'>Welcome</Text>
        <Text as='p'>Please enter your credentials to continue</Text>
    </div>
    </>
  )
}

export default FormHead
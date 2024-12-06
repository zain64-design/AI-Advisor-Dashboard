import React from 'react'
import Text from '../UI/Text'
import '../../assets/scss/component/Auth/formHead.scss'

const FormHead = () => {
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
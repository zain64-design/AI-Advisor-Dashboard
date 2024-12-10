import React from 'react'
import Text from '../UI/Text'
import Image from '../UI/Image'

const Author = (otherData) => {

    const authData = otherData;

    const {authImg,authName} = authData;

  return (
    <>
    <div className="author-area">
        <Image src={authImg} className="auth-ico" alt="author" />
        <Text as='span'>{`by ${authName}`}</Text>
    </div>
</>
  )
}

export default Author
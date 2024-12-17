import React from 'react';
import Text from '../UI/Text';
import '../../assets/scss/component/setting/profileDesc.scss'

const ProfileDesc = () => {
  return (
    <>
      <div className="profile-desc">
        <Text as="h6">Daniel Jake</Text>
        <Text as="span">Email@example.com</Text>
      </div>
    </>
  )
}

export default ProfileDesc
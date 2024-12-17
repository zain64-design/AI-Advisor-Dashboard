import React from 'react';
import Text from '../UI/Text';
import ProfileDescScss from '../../assets/scss/component/setting/profileDesc.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS';

const ProfileDesc = () => {
  useDynamicCSS(ProfileDescScss);
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
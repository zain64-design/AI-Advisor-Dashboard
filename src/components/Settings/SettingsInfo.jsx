import React from 'react'
import Text from '../UI/Text'
import '../../assets/scss/component/setting/settingsInfo.scss'

const SettingsInfo = ({para}) => {
  return (
    <>
    <div className="setting-info">
    <Text as='p'>{para}</Text>
    </div>
    </>
  )
}

export default SettingsInfo
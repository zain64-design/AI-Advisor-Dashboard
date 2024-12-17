import React from 'react'
import { Card } from 'react-bootstrap'
import ProfileImage from '../Settings/ProfileImage'
import ProfileDesc from '../Settings/ProfileDesc'
import SettingsLinks from '../Settings/SettingsLinks'
import { Link } from 'react-router'
import SettingBoxScss from '../../assets/scss/component/setting/settingBox.scss?inline'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS'

const SettingBox = () => {
    useDynamicCSS(SettingBoxScss);
    return (
        <>
            <Card className="setting-box">
                <div className="top-area">
                    <ProfileImage />
                    <ProfileDesc />
                </div>
                <SettingsLinks />
                <Link to="/login" className='logout-btn'>logout</Link>
            </Card>
        </>
    )
}

export default SettingBox
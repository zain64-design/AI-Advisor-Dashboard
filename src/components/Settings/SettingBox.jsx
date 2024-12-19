import React from 'react'
import { Card } from 'react-bootstrap'
import ProfileImage from '../Settings/ProfileImage'
import ProfileDesc from '../Settings/ProfileDesc'
import SettingsLinks from '../Settings/SettingsLinks'
import { Link } from 'react-router'
import '../../assets/scss/component/setting/settingBox.scss'

const SettingBox = () => {
    return (
        <>
            <Card className="setting-box">
                <div className="top-area">
                    <ProfileImage />
                    <ProfileDesc />
                </div>
                <SettingsLinks />
                <Link to="/" className='logout-btn'>logout</Link>
            </Card>
        </>
    )
}

export default SettingBox
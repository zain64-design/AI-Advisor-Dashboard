import React from 'react'
import { Link } from 'react-router'
import Text from '../UI/Text'
import { FaArrowLeft } from "react-icons/fa6";
import '../../assets/scss/component/setting/settingsHead.scss'

const SettingsHeader = ({heading}) => {
    
    return (
        <>
            <div className="settings-header">
                <Link to='/settings'>
                    <FaArrowLeft />
                </Link>
                <Text as='h6'>{heading}</Text>
            </div>
        </>
    )
}

export default SettingsHeader
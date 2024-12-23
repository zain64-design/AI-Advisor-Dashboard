import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkNotificationLoader = () => {
  return (
    <>
    <div className="single-notification">
        <Skeleton count={2} height={10} width={60} />
        <Skeleton height={64} width={64} style={{borderRadius:'10px'}} />
    </div>
    </>
  )
}

export default SkNotificationLoader
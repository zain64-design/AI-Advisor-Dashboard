import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkChartLoader = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between p-5">
        <Skeleton circle={true} height={500} width={500} />
        <Skeleton count={6} height={10} width={100} />
    </div>
    </>
  )
}

export default SkChartLoader
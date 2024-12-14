import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkChartLoader = () => {
  return (
    <>
    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center justify-content-center justify-content-sm-center justify-content-md-evenly justify-content-lg-evenly justify-content-xl-evenly justify-content-xxl-evenly p-2 p-sm-3 p-md-3 p-lg-4 p-xl-5 p-xxl-5">
        <Skeleton circle={true} className='skl-img' />
        <Skeleton count={6} height={10} width={100} />
    </div>
    </>
  )
}

export default SkChartLoader
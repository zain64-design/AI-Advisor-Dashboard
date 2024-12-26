import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkRecommendDetailLoader = () => {
    return (
        <>
            <div className="news-box">
                <figure>
                    <Skeleton height={300} width='100%' />
                </figure>
                <Skeleton count={1} height={10} width='50%' />
                <div className="desc">
                <ul>
                <Skeleton count={2} height={10} width='35%' />
                </ul>
                    <Skeleton count={8} height={10} width='100%' />
                </div>
            </div>
        </>
    )
}

export default SkRecommendDetailLoader
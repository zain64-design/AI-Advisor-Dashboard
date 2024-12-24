import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkNewsDetailLoader = () => {
    return (
        <>
            <div className="news-box">
                <figure>
                    <Skeleton height={300} width='100%' />
                </figure>
                <Skeleton count={1} height={10} width='40%' />
                <div className="author-area">
                    <Skeleton circle={true} height={32} width={32} />
                    <Skeleton count={1} height={10} width={50} />
                </div>
                <div className="desc">
                    <Skeleton count={8} height={10} width='100%' />
                </div>
            </div>
        </>
    )
}

export default SkNewsDetailLoader
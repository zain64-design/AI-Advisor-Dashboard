import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkInvestLoader = () => {
    return (
        <>
            <Card className="invest-box">
                <div className="info-area">
                    <figure>
                        <Skeleton circle={true} height={42} width={42} />
                    </figure>
                    <div className="desc" style={{ display: 'flex' }}>
                        <Skeleton count={2} height={10} width={80} />
                    </div>
                </div>
                <div className="stats-area">
                    <Skeleton count={1} height={20} width={80} />
                    <Skeleton count={1} height={20} width={40} />
                </div>
                <div className="stats-area">
                <Skeleton count={1} height={20} width={60} />
                <Skeleton count={1} height={30} width={30} />
                </div>
            </Card>
        </>
    )
}

export default SkInvestLoader
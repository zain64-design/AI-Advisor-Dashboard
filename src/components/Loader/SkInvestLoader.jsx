import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkInvestLoader = () => {
    return (
        <>
            <Card className="invest-box">
                <figure>
                    <Skeleton circle={true} height={42} width={42} />
                </figure>
                <div className="desc" style={{ display: 'flex' }}>
                    <Skeleton count={2} height={10} width={100} />
                </div>
            </Card>
        </>
    )
}

export default SkInvestLoader
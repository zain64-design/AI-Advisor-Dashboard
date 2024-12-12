import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkRecommendLoader = () => {
  return (
    <>
      <Card className="invest-box">
        <figure>
          <Skeleton circle={true} height={44} width={44} />
        </figure>
        <div className="desc">
          <Skeleton count={2} height={10} width={80} />
        </div>
        <div className="stats-info">
          <Skeleton count={2} height={10} width={50} />
        </div>
      </Card>
    </>
  )
}

export default SkRecommendLoader
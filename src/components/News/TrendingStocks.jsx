import React from 'react'
import Text from '../UI/Text'
import StocksSlider from './StocksSlider'
import '../../assets/scss/component/news/trendingStock.scss'
import NavTabs from './NavTabs'
import Paginations from './Paginations'
import NewsSlider from './NewsSlider'

const TrendingStocks = () => {
  return (
    <>
    <div className="trending-stock-area">
        <div className="head-area">
            <Text as='h6' className='fire-icon'>Trending Stocks</Text>
        </div>
        <StocksSlider/>
        <div className="head-area">
            <Text as='h6'>Latest Articles</Text>
        </div>
        <NewsSlider/>
        <div className="head-area ct-m">
            <Text as='h6'>Categories</Text>
        </div>
        <NavTabs/>
        <Paginations/>
    </div>
    </>
  )
}

export default TrendingStocks
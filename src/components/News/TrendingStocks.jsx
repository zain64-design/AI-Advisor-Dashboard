import React from 'react'
import Text from '../UI/Text'
import StocksSlider from './StocksSlider'
import TrendingStockScss from '../../assets/scss/component/news/trendingStock.scss?inline'
import NavTabs from './NavTabs'
import Paginations from './Paginations'
import useDynamicCSS from '../../utils/hooks/useDynamicCSS'

const TrendingStocks = () => {
  useDynamicCSS(TrendingStockScss);
  return (
    <>
    <div className="trending-stock-area">
        <div className="head-area">
            <Text as='h6' className='fire-icon'>Trending Stocks</Text>
        </div>
        <StocksSlider/>
        <NavTabs/>
        <Paginations/>
    </div>
    </>
  )
}

export default TrendingStocks
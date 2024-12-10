import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, A11y, Controller,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import TrendStocks from '../Home/TrendStocks'

const StocksSlider = () => {
    return (
        <>
        <Swiper modules={[Autoplay,Thumbs, A11y, Controller]}
                    spaceBetween={24}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.2,
                        },
                        992: {
                            slidesPerView: 1.9,
                        },
                        1200: {
                            slidesPerView: 2.5,
                        },
                        1400: {
                            slidesPerView: 2.5,
                        },
                        1444: {
                            slidesPerView: 2.5,
                        },
                        1599: {
                            slidesPerView: 2.6,
                        },
                    }}
                    className="stock-slider"
                >
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TrendStocks/>
                    </SwiperSlide>
                </Swiper>
        </>
    )
}

export default StocksSlider
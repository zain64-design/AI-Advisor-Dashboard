import React from 'react'
import useGetValueClass from '../../utils/hooks/useGetValueClass';
import { Card,Button } from 'react-bootstrap'
import Image from '../UI/Image';
import Text from '../UI/Text';
import '../../assets/scss/component/home/investBox.scss';
import AreaChart from '../Charts/AreaChart';
import useGetTrendColor from '../../utils/hooks/useGetTrendColor';

const InvestBox = ({ recentData }) => {

  const {getValueClass} = useGetValueClass();
  const {getTrendColor} = useGetTrendColor();

  return (
    <>
    {/* {recentData?.map((data)=> console.log(`InvestBox:${data.id}`))} */}
      {recentData?.map((data) => {
        const { id, image, head, date, price, value, recentChartData } = data;
        return (
          <Card className='invest-box' key={id}>
            <div className="info-area">
            <figure>
              <Image src={image} className="logo" alt='blog' />
            </figure>
            <div className="desc">
              <Text as="h6">{head}</Text>
              <Text as="span" className='date'>{date}</Text>
            </div>
            </div>
            <div className="stats-area">
              <div className="chart-main">
                <AreaChart chartData={recentChartData} stockName={date} title={head} chartColor={getTrendColor(data.value)}/>
              </div>
              <Text as='small' className={`investment-value ${getValueClass(data.value)}`}>{value}</Text>
            </div>
            <div className="actions-area">
              <Text as='h6'>{price}</Text>
              <Button type="button" variant='delete'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14" fill="none">
                  <g clipPath="url(#clip0_1289_2362)">
                    <path d="M11.4975 3.82235V3.00069C11.4975 2.52138 11.1068 2.12667 10.6235 2.12667H7.95709V1.67153C7.95709 1.27681 7.6389 0.958618 7.24418 0.958618H5.74988C5.35517 0.958618 5.03697 1.27681 5.03697 1.67153V2.12667H2.3706C1.8913 2.12667 1.49658 2.51736 1.49658 3.00069V3.82235H11.4935H11.4975Z" fill="white" />
                    <path d="M2.01221 4.6279L2.63651 11.7731C2.70095 12.4981 3.29706 13.0419 4.02205 13.0419H8.97216C9.69715 13.0419 10.2933 12.4941 10.3577 11.7731L10.982 4.6279H2.01221ZM4.87191 11.3542C4.87191 11.3542 4.8558 11.3542 4.84774 11.3542C4.63427 11.3542 4.45705 11.1891 4.44497 10.9756L4.159 5.84831C4.14691 5.62678 4.31608 5.43748 4.53761 5.42539C4.7551 5.41331 4.94844 5.58248 4.96052 5.804L5.24649 10.9313C5.25857 11.1529 5.08941 11.3422 4.86788 11.3542H4.87191ZM6.90189 10.9515C6.90189 11.173 6.72065 11.3542 6.49912 11.3542C6.27759 11.3542 6.09634 11.173 6.09634 10.9515V5.82414C6.09634 5.60261 6.27759 5.42137 6.49912 5.42137C6.72065 5.42137 6.90189 5.60261 6.90189 5.82414V10.9515ZM8.54924 10.9756C8.53716 11.1891 8.35994 11.3542 8.14647 11.3542C8.13841 11.3542 8.13036 11.3542 8.1223 11.3542C7.90078 11.3422 7.73161 11.1529 7.74369 10.9313L8.02966 5.804C8.04175 5.58248 8.23508 5.40928 8.45258 5.42539C8.6741 5.43748 8.84327 5.62678 8.83119 5.84831L8.54522 10.9756H8.54924Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1289_2362">
                      <rect width="12.8888" height="12.8888" fill="white" transform="translate(0.0546875 0.555847)" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default InvestBox
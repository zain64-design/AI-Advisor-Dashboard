import React from 'react'
import { Card } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query';
import useFetchAPI from '../../utils/hooks/useFetchAPI';
import { NOTIFICATIONS_API } from '../../utils/constant';
import SingleNotification from './SingleNotification';
import SkNotificationLoader from '../Loader/SkNotificationLoader';
import Text from '../UI/Text';
import '../../assets/scss/component/notifications/notificationsBox.scss'

const useFetchData = (key, url, staleTime) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => useFetchAPI(url, { category: key }),
    staleTime: staleTime,
  })
}

const NotificationBox = () => {

  const { data, isLoading, isError, error } = useFetchData(['notification data'], NOTIFICATIONS_API, 1000);

  return (
    <>
      <Card className='notification-box'>
        <div className="top-area">
          <Text as='h6'>Notifications</Text>
        </div>
        <div className="notification-area">
          {isError
            ? <Text as='h6'>Error: {error.message}</Text>
            : isLoading? Array.from({ length: 4 }).map((_,index) => (
              <SkNotificationLoader key={index}/>
            )):<SingleNotification data={data} />}
        </div>
      </Card>
    </>
  )
}

export default NotificationBox
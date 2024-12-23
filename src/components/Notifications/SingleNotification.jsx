import React from 'react'
import Text from '../UI/Text'
import Image from '../UI/Image';
import '../../assets/scss/component/notifications/singleNotification.scss'

const SingleNotification = ({data}) => {

    return (
        <>
        {data?.map((value)=> {
            const {id,thumbnail,title,date,authImg,authName,category} = value;
            return (
                <div className="single-notification" key={id}>
                    <div className="desc">
                        {category === 'news'?(
                            <>
                            <Text as='p'><Text as='span'>New Article:</Text> {title}</Text>
                            <Text as='small'><Image src={authImg} className='auth-img' alt="auth-img"/>{authName}</Text>
                            </>
                        ):(
                        <>
                        <Text as='p'>{title}</Text>
                        <Text as='small'>{date}</Text>
                        </>
                        )}
                    </div>
                    <figure>
                        <Image src={thumbnail} className='notif-img' alt='notification-img' />
                    </figure>
                </div>
            )
        })}
        </>
    )
}

export default SingleNotification
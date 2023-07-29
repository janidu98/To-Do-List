import { useEffect, useState } from 'react';
import styles from './notification.module.css';

const Notification = ({message, type='success'}) => {

    const [isUnmount, setIsUnmount] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setIsUnmount(true);
        }, 2000)

        return () => console.log('Unmounting...');
    }, []);

    console.log(isUnmount);

    return (
        <div className={`${styles.notification} ${isUnmount ? styles.unmount : ''}`}>
            <span className={`${styles.notification_sidebar} ${type === 'error' ? styles.notification_sidebar_error : styles.notification_sidebar_success}`}></span>
            <p className='m-0'>{message}</p>
        </div>
    )
}

export default Notification;
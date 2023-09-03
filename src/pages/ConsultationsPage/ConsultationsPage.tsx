import React from 'react';
import styles from './ConsultationPage.module.sass';
import video from '../../components/img/video.png';
import { UserOutlined } from '@ant-design/icons';

const ConsultationsPage = () => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={video} alt="video.img" />
        </div>
        <div>
          <p>Online консультация</p>
          <p className={styles.date}>15.01.2019, 12:30-13:00</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={video} alt="video.img" />
        </div>
        <div>
          <p>Online консультация</p>
          <p className={styles.date}>15.01.2019, 12:30-13:00</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <UserOutlined style={{ color: '#fff', margin: '0 auto' }}/>
        </div>
        <div>
          <p>Личный приём</p>
          <p className={styles.date}>15.01.2019, 12:30-13:00</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsPage;
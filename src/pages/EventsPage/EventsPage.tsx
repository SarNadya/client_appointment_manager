import React from 'react';
import styles from './EventsPage.module.sass';
import event from '../../components/img/event.png';
import camera from '../../components/img/camera.png';
import calendar from '../../components/img/calendar.png';
import time from '../../components/img/time.png';

const EventsPage = () => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={event} alt="video_icon" />
        </div>
        <div>
          <h1>Тяга резинки в шаге со сгибанием локтя под 90 градусов </h1>
          <div className={styles.wrap}>
            <div className={styles.elem}>
              <img src={camera} alt="camera" />
              <p>Вебинар</p>
            </div>
            <div className={styles.elem}>
              <img src={calendar} alt="calendar" />
              <p>9 марта 2021</p>
            </div>
            <div className={styles.elem}>
              <img src={time} alt="time" />
              <p>17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={event} alt="video_icon" />
        </div>
        <div>
          <h1>Тяга резинки в шаге со сгибанием локтя под 90 градусов </h1>
          <div className={styles.wrap}>
            <div className={styles.elem}>
              <img src={camera} alt="camera" />
              <p>Вебинар</p>
            </div>
            <div className={styles.elem}>
              <img src={calendar} alt="calendar" />
              <p>9 марта 2021</p>
            </div>
            <div className={styles.elem}>
              <img src={time} alt="time" />
              <p>17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={event} alt="video_icon" />
        </div>
        <div>
          <h1>Тяга резинки в шаге со сгибанием локтя под 90 градусов </h1>
          <div className={styles.wrap}>
            <div className={styles.elem}>
              <img src={camera} alt="camera" />
              <p>Вебинар</p>
            </div>
            <div className={styles.elem}>
              <img src={calendar} alt="calendar" />
              <p>9 марта 2021</p>
            </div>
            <div className={styles.elem}>
              <img src={time} alt="time" />
              <p>17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={event} alt="video_icon" />
        </div>
        <div>
          <h1>Тяга резинки в шаге со сгибанием локтя под 90 градусов </h1>
          <div className={styles.wrap}>
            <div className={styles.elem}>
              <img src={camera} alt="camera" />
              <p>Вебинар</p>
            </div>
            <div className={styles.elem}>
              <img src={calendar} alt="calendar" />
              <p>9 марта 2021</p>
            </div>
            <div className={styles.elem}>
              <img src={time} alt="time" />
              <p>17:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
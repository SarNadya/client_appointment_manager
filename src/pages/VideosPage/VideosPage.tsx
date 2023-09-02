import React from 'react';
import styles from './VideosPage.module.sass';
import video_icon1 from '../../components/img/video_icon1.png';
import video_icon2 from '../../components/img/video_icon2.png';
import video_icon3 from '../../components/img/video_icon3.png';

const VideosPage = () => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={video_icon1} alt="video_icon.img" />
        </div>
        <div>
          <h1>Крабик, ходьба в бок в приседе с двумя резинками Кра…</h1>
          <p className={styles.author}>Астахова Е.В.</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={video_icon2} alt="video_icon.img" />
        </div>
        <div className={styles.conteiner}>
          <h1>Разминка для локтевого сустава</h1>
          <div className={styles.wrap}>
            <p className={styles.author}>Астахова Е.В.</p>
            <p className={styles.date}>15.01.2019 - 22.01.2019</p>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={video_icon3} alt="video_icon.img" />
        </div>
        <div className={styles.conteiner}>
          <h1>Разминка для локтевого сустава. Разминка для локтевого..</h1>
          <div className={styles.wrap}>
            <p className={styles.author}>Астахова Е.В.</p>
            <p className={styles.date}>15.01.2019 - 22.01.2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
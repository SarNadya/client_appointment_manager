import React from 'react';
import { Card, Space } from 'antd';
import styles from './ClientList.module.sass';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import icon8 from '../img/icon8.png';
import icon9 from '../img/icon9.png';
import icon10 from '../img/icon10.png';

const ClientList = () => {
  return (
    <>
      <Space direction='vertical'>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon1} alt="icon" />
            </div>
            <p>Кравцова Александра</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon2} alt="icon" />
            </div>
            <p>Рожков Денис</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon1} alt="icon" />
            </div>
            <p>Кравцова Александра</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon3} alt="icon" />
            </div>
            <p>Диброва Алевтина</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon4} alt="icon" />
            </div>
            <p>Иванов Дмитрий</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon5} alt="icon" />
            </div>
            <p>nosikov@list.ru</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon6} alt="icon" />
            </div>
            <p>Форс Александр</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon7} alt="icon" />
            </div>
            <p>Ахмедов Артур</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon8} alt="icon" />
            </div>
            <p>Блажевич Игорь</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon9} alt="icon" />
            </div>
            <p>Валиева Руфина</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon10} alt="icon" />
            </div>
            <p>Волошина Виктория</p>
          </div>
        </Card>
        <Card bordered={false} hoverable className={styles.clientCard} size='small'>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={icon10} alt="icon" />
            </div>
            <p>Волошина Виктория</p>
          </div>
        </Card>
      </Space>
    </>
  );
};

export default ClientList;
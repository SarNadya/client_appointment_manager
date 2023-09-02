import { Card } from 'antd';
import React from 'react';
import styles from './ClientHeader.module.sass';
import client from '../../components/img/client_icon.png';
import { EllipsisOutlined } from '@ant-design/icons';

const ClientHeader = () => {
  return (
    <Card bordered={false} size='small' >
      <div className={styles.conteiner}>
        <div className={styles.wrap}>
          <img src={client} alt="client_icon" />
          <div>
            <h1>Рожков Денис Петрович</h1>
            <p>30 лет, муж</p>
          </div>
        </div>
        <button><EllipsisOutlined twoToneColor="#eb2f96"/></button>
      </div>
    </Card>
  );
};

export default ClientHeader;
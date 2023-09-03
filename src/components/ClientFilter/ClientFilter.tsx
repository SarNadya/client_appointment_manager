import { PlusCircleOutlined, PlusOutlined, SearchOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space, Tooltip } from 'antd';
import styles from './ClientFilter.module.sass';

const ClientFilter = () => {
  return (
    <Card bordered={false} size='small'>
      <div className={styles.wrap}>
        <Input bordered={false} prefix={<SearchOutlined />} />
        <Space>
          <Tooltip title="добавить" color='geekblue'>
            <Button shape="circle" icon={<PlusOutlined />} />
          </Tooltip>
          <Tooltip title="сортировка" color='geekblue'>
            <Button shape="circle" icon={<SortAscendingOutlined />} />
          </Tooltip>
        </Space>
      </div>
    </Card>
  );
};

export default ClientFilter;
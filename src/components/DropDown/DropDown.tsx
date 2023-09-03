import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, message } from 'antd';
import styles from './DropDown.module.sass';

const DropDown = () => {

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
  };

  const items: MenuProps['items'] = [
    {
      label: 'Изменить',
      key: '1',
    },
    {
      label: 'Удалить',
      key: '2',
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps} >
        <div className={styles.dropdown_button}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Dropdown>
    </>
  );
};

export default DropDown;
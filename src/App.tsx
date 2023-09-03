import './styles/index.sass';
import { Layout, Space } from 'antd';
import Main from './components/Main/Main';
import ClientList from './components/ClientList/ClientList';
import ClientFilter from './components/ClientFilter/ClientFilter';

const App = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <div className='app'>
      <Layout style={{ background: '#F1F2F3' }}>
        <Header className='header'></Header>
        <Layout hasSider className='layout'>
          <Space size={20}>
            <Sider width={'374px'} className='sider'>
              <Space direction='vertical' size={30}>
                <ClientFilter/>
                <ClientList />
              </Space>
            </Sider>
            <Content className='content'>
              <Main />
            </Content>
          </Space>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
import { Suspense } from 'react';
import styles from './Main.module.sass';
import '../../styles/index.sass';
import { NavLink, Route, Routes } from 'react-router-dom';
import { NotesPageAsync } from '../../pages/NotesPage/NotesPage.async';
import { ConsultationsPageAsync } from '../../pages/ConsultationsPage/ConsultationsPage.async';
import { VideosPageAsync } from '../../pages/VideosPage/VideosPage.async';
import { EventsPageAsync } from '../../pages/EventsPage/EventsPage.async';
import { Button, Card, Divider } from 'antd';
import add from '../../components/img/add.png';
import ClientHeader from '../ClientHeader/ClientHeader';

const Main = () => {

  return (
    <div>
      <ClientHeader/>
      <div className={styles.navbar}>
        <div className={styles.wrap}>
          <div className={styles.links}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "active" : "link"}>Заметки</NavLink>
            <Divider type="vertical" />
            <NavLink to={'/consultations'} className={({ isActive }) => isActive ? "active" : "link"}>Консультации</NavLink>
            <Divider type="vertical" />
            <NavLink to={'/videos'} className={({ isActive }) => isActive ? "active" : "link"}>Видео</NavLink>
            <Divider type="vertical" />
            <NavLink to={'/events'} className={({ isActive }) => isActive ? "active" : "link"}>Мероприятия</NavLink>
          </div>
          <div className={styles.button_wrap}>
            <p>Рекомендовать</p>
            <Button shape="circle" className={styles.button}>
              <img src={add} alt="add_icon" />
            </Button>
          </div>
        </div>
      </div>
      <Card bordered={false} className={styles.page} size='small'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path={'/'}
              element={<NotesPageAsync />}
            />
            <Route
              path={'/consultations'}
              element={<ConsultationsPageAsync />}
            />
            <Route
              path={'/videos'}
              element={<VideosPageAsync />}
            />
            <Route
              path={'/events'}
              element={<EventsPageAsync />}
            />
          </Routes>
        </Suspense>
      </Card>
    </div>
  );
};

export default Main;
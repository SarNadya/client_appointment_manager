import { Route, Routes } from 'react-router-dom';
import './index.sass';
import { Link } from 'react-router-dom';
import { NotesPageAsync } from './pages/NotesPage/NotesPage.async';
import { VideosPageAsync } from './pages/VideosPage/VideosPage.async';
import { EventsPageAsync } from './pages/EventsPage/EventsPage.async';
import { ConsultationsPageAsync } from './pages/ConsultationsPage/ConsultationsPage.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/notes'}>Заметки</Link>
      <Link to={'/consultations'}>Консультации</Link>
      <Link to={'/videos'}>Видео</Link>
      <Link to={'/events'}>Мероприятия</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={'/notes'}
            element={<NotesPageAsync/>}
          />
          <Route
            path={'/consultations'}
            element={<ConsultationsPageAsync/>}
          />
          <Route
            path={'/videos'}
            element={<VideosPageAsync/>}
          />
          <Route
            path={'/events'}
            element={<EventsPageAsync/>}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
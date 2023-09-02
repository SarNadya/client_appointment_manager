import React from 'react';
import map from '../../components/img/map.png';
import styles from './NotesPage.module.sass';

const NotesPage = () => {
  return (
    <div className={styles.notes}>
      <p>
        <span>20.12.2019</span>
        Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.
      </p>
      <p>
        <span>20.12.2019</span>
        Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.
      </p>
      <div className={styles.map}>
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default NotesPage;
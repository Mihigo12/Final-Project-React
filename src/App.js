import React from 'react';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

export default function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
      </div>
      <div className={styles.app_wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </>
  );
}

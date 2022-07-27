import React from 'react';
import styles from './app.module.scss';
import { RouterAuth } from './router';
import useIpcOn from './hooks/useIpcOn';
import { Toaster } from 'react-hot-toast';
import { useBeforeQuit } from '/@/hooks/useBeforeQuit';

function App() {
  useBeforeQuit();
  const ipcListener = (e: any) => {
    window.MessagePort = e.ports[0];
  };
  useIpcOn('port', ipcListener);
  return (
    <>
      <Toaster />
      <div className={styles.app}>
        <RouterAuth />
      </div>
    </>
  );
}

export default App;

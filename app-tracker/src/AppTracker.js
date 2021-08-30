import './AppTracker.css';
import Application from './Application';
import Navbar from './components/Navbar'
import ApplicationManager from './components/application-manage/ApplicationManager'
import ApplicationView from './components/application-view/ApplicationView';
import { AppsContext } from './ApplicationContext';
import { useState } from 'react';

function AppTracker() {
  const [apps, setApps] = useState([new Application("Amazon", "8/30/2021", 0, false, false)]);

  /**
   * Removes an application from stored applications
   * 
   * @param {Application} application to be removed
   */
  const removeApp = (application) => {
    setApps(apps.filter(app => app !== application));
  }

  const addApp = (application) => {

  }

  return (
    <div className="AppTracker">
      <Navbar />
      <div className="content">
        <AppsContext.Provider value={{apps, removeApp}}>
          <ApplicationManager />
          <ApplicationView />
        </AppsContext.Provider>
      </div>
    </div>
  );
}

export default AppTracker;
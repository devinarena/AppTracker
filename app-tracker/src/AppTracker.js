import './AppTracker.css';
import Application from './Application';
import Navbar from './components/Navbar'
import ApplicationManager from './components/application-manage/ApplicationManager'
import ApplicationView from './components/application-view/ApplicationView';
import AppsContext from './ApplicationContext';
import { useState } from 'react';

function AppTracker() {

  const [apps, setApps] = useState([new Application("Amazon", "Test notes", new Date(), 0, false, false)]);

  /**
   * Removes an application from stored applications
   * 
   * @param {Application} application to be removed
   */
  const removeApp = (application) => {
    setApps(apps.filter(app => app !== application));
  }

  /**
   * Adds an application to stored applications
   * 
   * @param {Application} application to be added 
   */
  const addApp = (application) => {
    apps.push(application);
    setApps(apps);
  }

  return (
    <div className="AppTracker">
      <Navbar />
      <div className="content">
        <AppsContext.Provider value={{ apps, removeApp, addApp }}>
          <ApplicationManager />
          <ApplicationView />
        </AppsContext.Provider>
      </div>
    </div>
  );
}

export default AppTracker;
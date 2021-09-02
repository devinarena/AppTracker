import './AppTracker.css';
import Application from './Application';
import Navbar from './components/Navbar'
import ApplicationManager from './components/application-manage/ApplicationManager'
import ApplicationView from './components/application-view/ApplicationView';
import AppsContext from './ApplicationContext';
import React, { useEffect, useState } from 'react';

function AppTracker() {

  const [apps, setApps] = useState([]);
  const [createdApps, setCreatedApps] = useState(0);

  /**
   * Removes an application from stored applications
   * 
   * @param {Application} application to be removed
   */
  const removeApp = (application) => {
    setApps(apps.filter(app => app !== application));
  }

  /**
   * Adds an application to stored applications and increments
   * total created applications (for application id)
   * 
   * @param {Application} application to be added 
   */
  const addApp = (application) => {
    setApps(apps.concat([application]));
    setCreatedApps(createdApps + 1);
  }

  /**
   * Updates an application by creating a new array
   * and readding all apps except the one corresponding
   * to the new application id.
   * 
   * @param {Application} application to be updated 
   */
  const updateApp = (id, values) => {
    setApps(apps.map(app => {
      if (app.id === id) {
        return new Application(
          id,
          values.company != null ? values.company : app.company,
          values.notes != null ? values.notes : app.notes,
          values.date != null ? values.date : app.date,
          values.interviews != null ? values.interviews : app.interviews,
          values.offer != null ? values.offer : app.offer,
          values.rejection != null ? values.rejection : app.rejection,
        );
      }
      return app;
    }));
  }

  useEffect(() => {
    if (localStorage.getItem("applications") != null)
      setApps(JSON.parse(localStorage.getItem("applications")));
  }, []);

  /**
   * Hook for when apps or created apps changes, save
   * any of those changes to localstorage to persist data.
   */
  useEffect(() => {
    if (apps.length > 0)
      localStorage.setItem("applications", JSON.stringify(apps));
    if (createdApps > 0)
      localStorage.setItem("createdApps", createdApps);
  }, [apps, createdApps]);

  return (
    <div className="AppTracker">
      <Navbar />
      <div className="content">
        <AppsContext.Provider value={{ apps, removeApp, addApp, updateApp, createdApps }}>
          <ApplicationManager />
          <ApplicationView />
        </AppsContext.Provider>
      </div>
    </div>
  );
}

export default AppTracker;
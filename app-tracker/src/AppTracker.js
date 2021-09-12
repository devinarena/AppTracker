import './AppTracker.css';
import Application from './Application';
import Navbar from './components/Navbar'
import ApplicationManager from './components/application-manage/ApplicationManager'
import ApplicationView from './components/application-view/ApplicationView';
import AppsContext from './ApplicationContext';
import ApplicationPopup from './components/application-view/ApplicationPopup';
import React, { useState, useEffect } from 'react';
import DialogBox from './components/DialogBox';

/**
 * @file AppTracker.js
 * @author Devin Arena
 * @description Parent widget containing ApplicationManager and
 *              ApplicationViewer, also stores some global state.
 * @since 8/27/2021
 */

/**
 * Builds the main app with a provider for ApplicationContext,
 * an ApplicationManager and Application view, and helper methods
 * for application management.
 * 
 * @returns JSX for App
 */
const AppTracker = () => {

  const [theme, setTheme] = useState("dark");
  const [apps, setApps] = useState([]);
  const [createdApps, setCreatedApps] = useState(0);
  const [popupApplication, setPopupApplication] = useState(null);
  const [dialogText, setDialogText] = useState("");

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

  /**
   * Shows a popup for the application which allows the user
   * to edit application data.
   * 
   * @param {Application} application 
   */
  const showPopup = (application) => {
    setPopupApplication(application);
  }

  /**
   * Loads application and theme data from a JSON object.
   * 
   * @param {JSON} json to load from
   */
  const loadFromJSON = (json) => {
    setTheme(json.theme);
    const numApps = Math.max(json.createdApps, createdApps);
    setApps(apps.concat(json.apps.map((app, i) => {
      return new Application(createdApps + i, app.company, app.notes, app.date, app.interviews, app.offer, app.rejection);
    })));
    setCreatedApps(numApps + json.apps.length);
    showDialog("Successfully imported " + json.apps.length + " applications!");
  }

  /**
   * Shows a dialog box at the bottom of the screen for a few seconds.
   * 
   * @param {String} text the text to display
   */
  const showDialog = (text) => {
    setDialogText(text);
  }

  /**
   * Hook for when the web application initializes, loads
   * application and user data from local storage.
   */
  useEffect(() => {
    const apps = localStorage.getItem("applications");
    if (apps != null)
      setApps(JSON.parse(apps));
    const createdApps = localStorage.getItem("createdApps");
    if (createdApps != null)
      setCreatedApps(parseInt(createdApps));
    const theme = localStorage.getItem("theme");
    if (theme != null) {
      setTheme(theme);
    }
  }, []);

  /**
   * Hook for when apps or created apps changes, save
   * any of those changes to localstorage to persist data.
   */
  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(apps));
    if (createdApps > 0)
      localStorage.setItem("createdApps", createdApps);
  }, [apps, createdApps]);

  /**
   * Hook when the theme changes, updates the css variables
   * to change colors of all elements.
   */
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.style.setProperty("--animated", "all");
    if (theme === "light") {
      document.documentElement.style.setProperty("--root-background", "#eee");
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--panel-gray", "#bbb");
      document.documentElement.style.setProperty("--panel-border", "#777");
      document.documentElement.style.setProperty("--dropdown-gray", "#959595");
      document.documentElement.style.setProperty("--dropdown-hover", "#858585");
      document.documentElement.style.setProperty("--form-background", "#ddd");
      document.documentElement.style.setProperty("--form-focus", "#fff");
      document.documentElement.style.setProperty("--form-border", "#aaa");
      document.documentElement.style.setProperty("--card-color", "#bbb");
    } else {
      document.documentElement.style.setProperty("--root-background", "#555");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--panel-gray", "#464646");
      document.documentElement.style.setProperty("--panel-border", "#232323");
      document.documentElement.style.setProperty("--dropdown-gray", "#353535");
      document.documentElement.style.setProperty("--dropdown-hover", "#252525");
      document.documentElement.style.setProperty("--form-background", "#333");
      document.documentElement.style.setProperty("--form-focus", "#666");
      document.documentElement.style.setProperty("--form-border", "#000");
      document.documentElement.style.setProperty("--card-color", "#777");
    }

    setTimeout(() => {
      document.documentElement.style.setProperty("--animated", "none");
    }, 1000);
  }, [theme]);

  return (
    <div className="AppTracker">
      <AppsContext.Provider value={{ theme, apps, removeApp, addApp, updateApp, createdApps, showPopup, showDialog }}>
        <Navbar loadFromJSON={loadFromJSON} theme={theme} switchTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
        <div className="content">
          <ApplicationManager />
          <ApplicationView />
          <ApplicationPopup application={popupApplication} close={() => setPopupApplication(null)} />
          <DialogBox text={dialogText} />
        </div>
      </AppsContext.Provider>
    </div>
  );
}

export default AppTracker;
import './Navbar.css'
import React, { useContext } from 'react'
import AppsContext from '../ApplicationContext';

/**
 * @file Navbar.js
 * @author Devin Arena
 * @description Generates a stateful navbar using JSX for the header
 * @since 8/27/2021
 */

/**
 * Builds the Navbar for application, containing a dropdown
 * menu with a list of operations for the user.
 * 
 * @param props must contain theme data, loadFromJSON callback and switchTheme callback
 * 
 * @returns JSX for a navbar element
 */
const Navbar = (props) => {

    // So I can keep track of the menu from DOM to remove it when opacity is 0
    const menuRef = React.createRef();
    const inputRef = React.createRef();

    const appsContext = useContext(AppsContext);

    /**
     * Fades the dropdown menu in and makes it visible to the user
     * 
     * @returns void
     */
    const fadeMenuIn = () => {
        menuRef.current.style.visibility = "visible";
        menuRef.current.style.opacity = 1;
    }

    /**
     * Fades the dropdown menu out
     * 
     * @returns void
     */
    const fadeMenuOut = () => {
        menuRef.current.style.opacity = 0;
    }

    /**
     * When the menu finishes fading out, hide it.
     * 
     * @returns void
     */
    const hideMenu = (e) => {
        if (e.target === menuRef.current) {
            if (menuRef.current.style.opacity === "0") {
                menuRef.current.style.visibility = "hidden";
            }
        }
    }

    /**
     * Generates a download URL based on currently saved settings and applications.
     * 
     * @returns {String} a download URL for the settings file
     */
    const download = () => {
        const json = {
            "theme": appsContext.theme,
            "createdApps": appsContext.createdApps,
            "apps": appsContext.apps
        }
        return "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
    }

    /**
     * Loads a file, parses it, and passes the JSON back
     * to AppTracker to handle adding loaded apps.
     */
    const loadFile = () => {
        const file = inputRef.current.files[0];
        const fr = new FileReader();
        fr.readAsText(file);
        fr.onload = () => {
            props.loadFromJSON(JSON.parse(fr.result));
        }
        inputRef.current.value = null;
    }

    return (<div className="navbar">
        <h1>AppTracker</h1>
        <div className="dropdown" onMouseEnter={fadeMenuIn} onMouseLeave={fadeMenuOut}>
            <input ref={inputRef} type="file" accept=".json" name="filePicker" onChange={() => loadFile()} />
            <h1>Menu</h1>
            <ul className="menu" style={{ opacity: 0 }} ref={menuRef} onTransitionEnd={e => hideMenu(e)}>
                <li><button type="button" onClick={() => {
                    if (document.documentElement.style.getPropertyValue("--animated") !== "all") {
                        props.switchTheme();
                        appsContext.showDialog("Theme has been switched");
                    }
                }
                }> Theme: {props.theme === "dark" ? "🌙" : "🌞"}</button></li>
                <li><a href={download()} download="apps.json" onClick={() => appsContext.showDialog("Downloaded exported data as JSON file.")}>Export Data</a></li>
                <li><button type="button" onClick={() => inputRef.current.click()}>Import Data</button></li>
            </ul>
        </div>
    </div>
    );
}

export default Navbar;
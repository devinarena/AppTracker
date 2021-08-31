import { useContext, useState } from 'react';
import AppsContext from '../../ApplicationContext'
import Application from '../../Application';
import './ApplicationManager.css'

/**
 * @file ApplicationManager.js
 * @author Devin Arena
 * @description Parent widget for application management widgets
 * @since 8/27/2021
 */

/**
 * Builds the ApplicationManager widget containing
 * widgets for application management
 * 
 * @returns JSX for a ApplicationManager
 */
const ApplicationManager = () => {

    const [company, setCompany] = useState("");
    const [notes, setNotes] = useState("");

    const appsContext = useContext(AppsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company.length === 0)
            return;
        let date = new Date();
        let interviews = 0;
        let offer = false;
        let rejection = false;
        let app = new Application(company, notes, date, interviews, offer, rejection);
        appsContext.addApp(app);
    }

    return (
        <div className="app-manager">
            <form onSubmit={handleSubmit}>
                <label>
                    Company/Position:
                </label>
                <input type="text" name="company" maxLength="80" onChange={e => setCompany(e.target.value)} />
                <label>
                    Notes: 
                </label>
                <textarea name="company" rows="3" maxLength="800" onChange={e => setNotes(e.target.value)} />
                <input type="submit" value="Add Application" />
                <button name="advanced" >Advanced</button> 
            </form>
        </div>
    );
}

export default ApplicationManager;
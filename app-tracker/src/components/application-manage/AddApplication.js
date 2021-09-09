import { useContext, useState } from 'react';
import AppsContext from '../../ApplicationContext'
import Application from '../../Application';
import './AddApplication.css'

/**
 * @file AddApplication
 * @author Devin Arena
 * @description Extracted component for adding an application
 *              using a text field, textarea and submit button
 * @since 8/31/2021
 */

/**
 * Builds the AddApplication panel which allows
 * you to enter company, notes, and submit
 * 
 * @returns JSX for ApplicationStats
 */
const AddApplication = () => {

    const [company, setCompany] = useState("");
    const [notes, setNotes] = useState("");

    const appsContext = useContext(AppsContext);

    /**
     * When the form is submitted, add a 
     * new application using the entered information.
     * 
     * @param {Event} e to prevent default 
     * @returns 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (company.length === 0)
            return;
        let date = new Date().toLocaleDateString();
        let interviews = 0;
        let offer = false;
        let rejection = false;
        let app = new Application(appsContext.createdApps, company, notes, date, interviews, offer, rejection);
        appsContext.addApp(app);
        setCompany("");
        setNotes("");
    }

    return (
        <div className="add-application">
            <form onSubmit={handleSubmit}>
                <label>
                    Company/Position:
                </label>
                <input type="text" name="company" value={company} maxLength="80" onChange={e => setCompany(e.target.value)} />
                <label>
                    Notes:
                </label>
                <textarea name="notes" rows="3" maxLength="2000" value={notes} onChange={e => setNotes(e.target.value)} />
                <input type="submit" value="Add Application" />
                <button name="advanced" >Advanced</button>
            </form>
        </div>
    );
}

export default AddApplication;
import { useState } from 'react';
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
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <textarea name="company" rows="3" maxLength="800" onChange={e => setDescription(e.target.value)} />
                <input type="submit" value="Add Application" />
                <button name="advanced" >Advanced</button> 
            </form>
        </div>
    );
}

export default ApplicationManager;
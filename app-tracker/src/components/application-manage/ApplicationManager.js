import AddApplication from './AddApplication';
import './ApplicationManager.css'
import ApplicationStats from './ApplicationStats';

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

    return (
        <div className="app-manager">
            <AddApplication />
            <ApplicationStats />
        </div>
    );
}

export default ApplicationManager;
import './ApplicationView.css'
import ApplicationCard from './ApplicationCard'
import { AppsContextConsumer } from '../../ApplicationData'

/**
 * @file ApplicationViewer.js
 * @author Devin Arena
 * @description Builds a list of all applications as card items
 * @since 8/27/2021
 */

/**
 * Builds the ApplicationManager widget containing
 * widgets for application management
 * 
 * @returns JSX for a ApplicationManager
 */
const ApplicationView = () => {

    return (
        <div className="app-view">
            <AppsContextConsumer>
                {appsContext => appsContext.map((app, id) => { return (<ApplicationCard key={id} app={app}/>);})}
            </AppsContextConsumer>
        </div>
    );
}

export default ApplicationView;
import './ApplicationView.css'
import ApplicationCard from './ApplicationCard'
import AppsContext from '../../ApplicationContext'

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
            <AppsContext.Consumer>
                {({ apps }) => {
                    return [apps.map((app, id) => { return (<ApplicationCard key={id} app={app} />); })]
                }}
            </AppsContext.Consumer>
        </div>
    );
}

export default ApplicationView;
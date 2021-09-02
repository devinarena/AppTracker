import ApplicationContext from '../../ApplicationContext'
import './ApplicationStats.css'

/**
 * @file ApplicationStats.js
 * @author Devin Arena
 * @description Displays the users total applications, interviews, rejections
 *              response rate, etc.
 * @since 8/31/2021
 */

/**
 * Builds the ApplicationManager widget containing
 * widgets for application management
 * 
 * @returns JSX for ApplicationStats
 */
const ApplicationStats = () => {

    const pullStats = (apps) => {
        let interviews = 0;
        let offers = 0;
        let rejections = 0;
        for (const app of apps) {
            interviews += app.interviews;
            offers += app.offer;
            rejections += (app.rejection && !app.offer);
        }
        return { interviews, offers, rejections };
    }

    return (
        <ApplicationContext.Consumer>
            {({apps}) => {
                const { interviews, offers, rejections } = pullStats(apps);
                return (
                    <div className="app-stats">
                        <div className="stats-container">
                            <h1>Application Statistics</h1>
                            <ul className="stats-list">
                                <li className="total-apps">
                                    <h3>Applications</h3>
                                    <p>{apps.length}</p>
                                </li>
                                <li className="offers">
                                    <h3>Offers</h3>
                                    <p>{offers}</p>
                                </li>
                                <li className="interviews">
                                    <h3>Interviews</h3>
                                    <p>{interviews}</p>
                                </li>
                                <li className="rejections">
                                    <h3>Rejections</h3>
                                    <p>{rejections}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            }}
        </ApplicationContext.Consumer>
    );
}

export default ApplicationStats;
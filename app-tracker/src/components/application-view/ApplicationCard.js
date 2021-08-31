
import AppsContext from '../../ApplicationContext';
import './ApplicationCard.css'

/**
 * @file ApplicationCard.js
 * @author Devin Arena
 * @description An application info card to be displayed on the ApplicationView panel
 * @since 8/28/2021
 */

const ApplicationCard = (props) => {

    /**
     * Determines the status of the application based on 'offer' and 'rejection' booleans.
     * 
     * @returns a String containing Offer, Rejection, or Waiting based on application status
     */
    let status = () => {
        if (props.app.offer)
            return "Offer";
        else if (props.app.rejection)
            return "Rejection";
        else
            return "Waiting..."
    }

    return (
        <AppsContext.Consumer>
            {({removeApp}) => {
                return (
                    <div className="app-card">
                        <h1>{props.app.company}</h1>
                        <p>{props.app.date.toLocaleDateString()}</p>
                        <p>Interviews: {props.app.interviews}</p>
                        <p>{status()}</p>
                        <div className="buttons">
                            <button type="submit">✉️</button>
                            <button type="submit">👔</button>
                            <button type="submit">❌</button>
                            <button type="submit" onClick={() => removeApp(props.app)}>🗑️</button>
                        </div>
                    </div>
                );
            }}
        </AppsContext.Consumer>
    );
}

export default ApplicationCard;
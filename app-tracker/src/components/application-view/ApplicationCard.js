
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
            {({ removeApp, updateApp }) => {
                return (
                    <div className={
                        "app-card" +
                        (props.app.offer ? " job-offer" : "") +
                        (props.app.rejection && !props.app.offer ? " rejection" : "") +
                        (props.app.interviews > 0 && !props.app.offer && !props.app.rejection ? " interview-glow" : "")
                    }>
                        <h1>{props.app.company}</h1>
                        <p>{props.app.date}</p>
                        <p>Interviews: {props.app.interviews}</p>
                        <p className="app-status">{status()}</p>
                        <div className="buttons">
                            <button type="submit" onClick={() => {
                                updateApp(props.app.id, { offer: !props.app.offer });
                            }}>✉️</button>
                            <button type="submit" onClick={() => {
                                updateApp(props.app.id, { interviews: props.app.interviews + 1 });
                            }}>👔</button>
                            <button type="submit" onClick={() => {
                                updateApp(props.app.id, { rejection: !props.app.rejection });
                            }}>❌</button>
                            <button type="submit" onClick={() => removeApp(props.app)}>🗑️</button>
                        </div>
                    </div>
                );
            }}
        </AppsContext.Consumer>
    );
}

export default ApplicationCard;
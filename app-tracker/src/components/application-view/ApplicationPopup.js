
import React, { useEffect, useState } from "react";
import AppsContext from "../../ApplicationContext";
import './ApplicationPopup.css'

/**
 * @file ApplicationPopup.js
 * @author Devin Arena
 * @description Builds a list of all applications as card items
 * @since 8/27/2021
 */

const ApplicationPopup = (props) => {

    const [company, setCompany] = useState("");
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState("");
    const [interviews, setInterviews] = useState(0);
    const [closing, setClosing] = useState(false);

    const popup = React.createRef();

    const appsContext = React.useContext(AppsContext);

    /**
     * Called when the transition ends, if the application
     * should be cleared (the popup faded out) update it to null.
     * 
     * @param {Event} e to check target
     */
    const tryClose = (e) => {
        if (e.target.className === "app-popup" && closing) {
            props.close();
            setClosing(false);
        }
    }

    /**
     * When the form is submitted, update the application.
     * 
     * @param {Event} e the event to prevent
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        const dates = date.split("-");
        const formatDate = dates[1] + "/" + dates[2] + "/" + dates[0];

        appsContext.updateApp(props.application.id, { company: company, notes: notes, date: formatDate, interviews: interviews });
        popup.current.style.opacity = 0;
        setClosing(true);
    }

    /**
     * Updates when the application updates. If this is not faded in
     * and a new application is set, fade in and update field values.
     */
    useEffect(() => {
        if (props.application != null && popup.current.style.opacity !== "1" && !closing) {
            popup.current.style.opacity = 1;
            setCompany(props.application.company);
            setNotes(props.application.notes);
            setInterviews(props.application.interviews);
            // date must be formatted differently
            const dates = props.application.date.split("/");
            setDate(dates[2] + "-" + dates[0].padStart(2, "0") + "-" + dates[1].padStart(2, "0"));
        }
    }, [props.application, popup, closing]);

    if (props.application == null)
        return (null);

    return (
        <div ref={popup} className="app-popup" onTransitionEnd={tryClose}>
            {
                props.application != null ? (
                    <div className="popup">
                        <form onSubmit={handleSubmit}>
                            <label>Company: </label>
                            <input type="text" name="company" maxLength="80" value={company} onChange={(e) => setCompany(e.target.value)} />
                            <label>Notes: </label>
                            <textarea name="notes" rows="5" maxLength="2000" value={notes} onChange={e => setNotes(e.target.value)} />
                            <label>Date: </label>
                            <input type="date" name="date" maxLength="80" value={date} onChange={(e) => setDate(e.target.value)} />
                            <label>Interviews: </label>
                            <input type="number" name="interviews" maxLength="80" value={interviews} onChange={(e) => setInterviews(parseInt(e.target.value))} />
                            <div className="popup-buttons">
                                <button type="button" onClick={() => {
                                    popup.current.style.opacity = 0;
                                    setClosing(true);
                                }}>Close</button>
                                <input type="submit" name="save" value="Save" />
                            </div>
                        </form>
                    </div>) : null
            }
        </div>
    );
}

export default ApplicationPopup;
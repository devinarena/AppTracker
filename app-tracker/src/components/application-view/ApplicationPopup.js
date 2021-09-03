
import React, { useEffect } from "react";
import './ApplicationPopup.css'

/**
 * @file ApplicationPopup.js
 * @author Devin Arena
 * @description Builds a list of all applications as card items
 * @since 8/27/2021
 */

const ApplicationPopup = (props) => {

    const popup = React.createRef();

    useEffect(() => {
        if (props.application != null) {
            fadeIn();
        }
    }, [props.application]);

    const fadeIn = () => {
        popup.current.style.opacity = 1;
    }

    const fadeOut = () => {
        
    }

    if (props.application == null)
        return (null);

    return (
        <div ref={popup} className="app-popup" onTransitionEnd={(e) => { console.log(this); props.close() }}>
            {
                props.application != null ? (
                    <div className="popup">
                        <h1>{props.application.company}</h1>
                        <button type="submit" onClick={() => {
                        }}>Close</button>
                    </div>) : null
            }
        </div>
    );
}

export default ApplicationPopup;
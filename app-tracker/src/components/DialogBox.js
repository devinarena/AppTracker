import './DialogBox.css'
import AppsContext from '../ApplicationContext';
import React, { useEffect, useState, useContext } from 'react';

/**
 * @file DialogBox.js
 * @author Devin Arena
 * @description Simple widget to display text at the bottom
 *              of the screen for a short time.
 * @since 9/11/2021
 */

const DialogBox = (props) => {

    const [hidden, setHidden] = useState(true);
    const [reset, setReset] = useState(false);
    const [oldText, setOldText] = useState("");
    
    const appsContext = useContext(AppsContext);

    const timer = React.useRef();

    /**
     * When the dialog fades out, remove the text (so it doesn't open again)
     * and clear the reset flag so the dialog can be opened again.
     * 
     * @param {Event} e the event to handle
     */
    const fadedOut = (e) => {
        if (e.propertyName === "opacity" && hidden && reset) {
            appsContext.showDialog("");
            setReset(false);
        }
    }

    /**
     * When text changes, open the dialog and close it four seconds later.
     * Reset flagged used to allow for animations.
     */
    useEffect(() => {
        const textChange = (props.text !== "") && !(props.text === oldText);
        if (reset && !textChange) {
            return;
        }
        if (hidden && props.text.length > 0) {
            setHidden(false);
            if (textChange)
                clearTimeout(timer.current);
            setOldText(props.text);
            timer.current = setTimeout(() => {
                setReset(true);
                setHidden(true);
            }, 2500);
        }
    }, [props.text, hidden, reset, oldText, appsContext]);

    /**
     * Clear timeouts on unmount;
     */
    useEffect(() => {
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"dialog-box" + (hidden ? " hidden" : "")} onTransitionEnd={e => fadedOut(e)}>
            <p>{props.text}</p>
        </div>
    );
}

export default DialogBox;
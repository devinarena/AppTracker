import './Navbar.css'
import React from 'react'

/**
 * @file Navbar.js
 * @author Devin Arena
 * @description Generates a stateful navbar using JSX for the header
 * @since 8/27/2021
 */

/**
 * Builds the Navbar for application, containing a dropdown
 * menu with a list of operations for the user.
 * 
 * @returns JSX for a navbar element
 */
const Navbar = () => {

    // So I can keep track of the menu from DOM to remove it when opacity is 0
    const menuRef = React.createRef();

    /**
     * Fades the dropdown menu in and makes it visible to the user
     * 
     * @returns void
     */
    const fadeMenuIn = () => {
        menuRef.current.style.visibility = "visible";
        menuRef.current.style.opacity = 1;
    }

    /**
     * Fades the dropdown menu out
     * 
     * @returns void
     */
    const fadeMenuOut = () => {
        menuRef.current.style.opacity = 0;
    }

    /**
     * When the menu finishes fading out, hide it.
     * 
     * @returns void
     */
    const hideMenu = (e) => {
        if (e.target === menuRef.current) {
            if (menuRef.current.style.opacity === "0") {
                menuRef.current.style.visibility = "hidden";
            }
        }
    }

    return (
        <div className="navbar">
            <h1>AppTracker</h1>
            <div className="dropdown" onMouseEnter={fadeMenuIn} onMouseLeave={fadeMenuOut}>
                <h1>Menu</h1>
                <ul className="menu" style={{ opacity: 0 }} ref={menuRef} onTransitionEnd={e => hideMenu(e)}>
                    <li><a href="option">Option 1</a></li>
                    <li><a href="option">Option 2</a></li>
                    <li><a href="option">Option 3</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
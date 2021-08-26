import './navbar.css'

/**
 * Builds the Navbar for application, containing a dropdown
 * menu with a list of operations for the user.
 * 
 * @returns JSX for a navbar element
 */
const Navbar = () => {
    return (
        <div className="navbar">
            <h1>AppTracker</h1>
            <div className="dropdown">
                <h1>Menu</h1>
                <ul className="menu">
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
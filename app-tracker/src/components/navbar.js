import './Navbar.css'

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
                    <li><a href="">Option 1</a></li>
                    <li><a href="">Option 2</a></li>
                    <li><a href="">Option 3</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
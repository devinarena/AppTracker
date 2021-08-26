import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>InternshipTracker</h1>
            <div className="dropdown">
                <h1>Menu</h1>
                <ul>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                    <li><a href="">Test</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar flex p-4 gap-4">
            <div className="nav-links flex gap-4">
                <p>Home</p> 
                <p>Roster</p>
                <p>Schedule</p>
                <p>Statistics</p>
            </div>
            <div className="profile">
                {/* Placeholder for profile/login component */}
                <p>Login</p>
            </div>

            
        </nav>
    );
};

export default Navbar;

import './Nav.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src={logo} alt="Logo" className="nav-logo" />
            </div>
            <div className="nav-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/custom" className="nav-link">Custom</Link>
            </div>
        </nav>
    );
}

export default Nav;
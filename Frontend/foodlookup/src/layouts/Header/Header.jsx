import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav>
                <ul className="nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to={'/api'}>API</Link></li>
                    <li><Link to={"https://github.com/PetarWho/ReactUni"} target='blank'>Project</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

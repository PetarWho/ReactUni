import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <nav>
        <ul className="nav">
          <li><a href="#api">API</a></li>
          <li><a href="https://github.com/PetarWho/ReactUni" target='blank'>Project</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

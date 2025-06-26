import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">Tarun Kumar </div>
      <ul className="nav-links">
        <Link to='/' className='nav-link'>
          Home
        </Link>
        
        <Link to='/about' className='nav-link'>
          About
        </Link>
        <li>Resume</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <button onClick={toggleTheme}>☀️ / 🌙</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
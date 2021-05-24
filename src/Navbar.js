import React from 'react';

import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
        <h1 className="navbar-title">Where in the world?</h1>
            <div className="theme">
            <i className="far fa-moon moon"></i>
            <p className="theme-text">Dark Mode</p>
            </div>
        </nav>
    )
}
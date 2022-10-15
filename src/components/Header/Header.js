import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2><Link to='/'>QUICK QUIZ</Link></h2>
            </div>
            <nav className="nav">
                <NavLink to={'/topics'}>Topics</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <button><Link to='/home'>Home</Link></button>
            <button><Link to='/chart'>Chart</Link></button>
            <button><Link to='/blog'>Blog</Link></button>
            <h2>Quiz App</h2>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/chart'>Chart</Link>
            <Link to='/blog'>Blog</Link>
            <h2>Exam Crackers</h2>
        </nav>
    );
};

export default Header;
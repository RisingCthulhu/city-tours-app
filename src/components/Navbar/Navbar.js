import React, { PropTypes } from 'react';
import './Navbar.scss';

import logo from '../../logo.png'

const Navbar = ({ className }) => {
    return (
        <nav className="navbar">
        	<img src={logo} /> 
        	<ul className="nav-links">
        		<li><a href="/" className="nav-link">home</a></li>
        		<li><a href="/" className="nav-link">about</a></li>
        		<li><a href="/" className="nav-link active">tours</a></li>
        	</ul>	
        </nav>
    );
};


export default Navbar;

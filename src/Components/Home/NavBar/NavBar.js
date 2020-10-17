import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="#">
                <img src={logo} width="120" height="40" alt="" loading="lazy"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>               
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">               

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/ourPortfolio">Our Portfolio</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/ourTeam">Our Team</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/contactUs">Contact Us</Link>
                    </li>
                    <button className='btn btn-dark'>
                        <Link style={{color: 'white', textDecoration: 'none'}} to="/login">
                            Login
                        </Link>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
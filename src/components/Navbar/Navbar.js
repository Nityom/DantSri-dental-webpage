import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from './../../assets/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navbarItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/singleservice' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Medist Logo" className="logo" />
                        </Link>

                        <button 
                            className={`navbar-toggler ${isOpen ? 'open' : ''}`} 
                            type="button" 
                            onClick={toggleMenu}
                            aria-controls="navbarContent"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
                            <ul className="navbar-nav m-auto">
                                {navbarItems.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link 
                                            className="nav-link" 
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="theme-btn">
                                <Link to="/contact" className="btn-animate">Book appointment</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

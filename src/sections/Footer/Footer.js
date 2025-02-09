import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {
    const footerContacts = [
        { title: 'Phone Number', info: '083402 20139', icon: call },
        { title: 'Open Hour', info: '09:00 AM - 18:00 PM', icon: time },
        { 
            title: 'Clinic Address', 
            info: 'near JANTA COLLEGE, Jhanjharpur, Bihar, India, 847404', 
            icon: location,
            link: 'https://maps.app.goo.gl/MmraPDqfGsAf6iJVA' // Added Google Maps Link
        }
    ];

    return (
        <footer className='footer-container pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-lg-6 col-md-5">
                        <h1 style={{ color: "white" }}>DantSri</h1>
                        <p>
                            Dental Care Seattle is a top-rated local practice offering expert cosmetic, 
                            preventative, and restorative dentistry on First Hill. Our dedicated team 
                            ensures personalized care, advanced treatments, and a comfortable experience 
                            for every patient.
                        </p>

                        {/* Social Media */}
                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>
                            {footerContacts.map((footerContact, index) => (
                                <div className="contact-list" key={index}>
                                    <div className="contact-icon">
                                        <img src={footerContact.icon} alt={footerContact.title} loading='lazy' />
                                    </div>
                                    <div className="contact-text">
                                        <p>{footerContact.title}</p>
                                        {/* Conditionally wrap Clinic Address in an <a> tag */}
                                        {footerContact.link ? (
                                            <h5>
                                                <a 
                                                    href={footerContact.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                    {footerContact.info}
                                                </a>
                                            </h5>
                                        ) : (
                                            <h5>{footerContact.info}</h5>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; 2025 DantSri. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

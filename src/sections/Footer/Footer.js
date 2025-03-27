import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube,FaStar } from "react-icons/fa";
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';


const reviewUrl = "https://search.google.com/local/writereview?placeid=ChIJjfu4Xop57jkR019nRoI7odQ"; // Google Review link

const Footer = () => {
    const footerContacts = [
        { 
            title: 'Phone Number', 
            info: '083402 20139', 
            icon: call,
            link: 'https://wa.me/918340220139'
        },
        { title: 'Open Hour', info: '09:00 AM - 18:00 PM', icon: time },
        { 
            title: 'Clinic Address', 
            info: 'Near JANTA COLLEGE, Jhanjharpur, Bihar, India, 847404', 
            icon: location,
            link: 'https://maps.app.goo.gl/MmraPDqfGsAf6iJVA'
        },
  
    ];

    return (
        <footer className='footer-container pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <h1 style={{ color: "white" }}>DantSri</h1>
                        <p>
                        Dental Care is a top-rated local practice specializing in cosmetic, preventative, and restorative dentistry. Our expert team is committed to providing personalized care, cutting-edge treatments, and a comfortable experience for every patient.
                        </p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://www.facebook.com/Basudeodentalcare" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="https://x.com/drjyoti_clinic" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                                <li><a href="https://www.instagram.com/dantsri_dental/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    </div>

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

                            {/* Google Review Section */}
                   {/* Google Review Section */}
<div className="contact-list">
    <div className="contact-icon">
        <FaStar style={{ fontSize: "24px", color: "#FFD700" }} />
    </div>
    <div className="contact-text">
        <p>Write a Review</p>
        <h5>
            <a 
                href={reviewUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                Share Your Experience
            </a>
        </h5>
    </div>
</div>

                        </div>
                    </div>
                </div>

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

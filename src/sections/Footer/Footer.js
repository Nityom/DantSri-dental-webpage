import React from 'react';
// import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
// import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    // const footerMenu = [
    //     {
    //         'name' : 'About Us',
    //         'link' : '/'
    //     },
    //     {
    //         'name' : 'Dental Services',
    //         'link' : '/'
    //     },
    //     {
    //         'name' : 'Dentist',
    //         'link' : '/'
    //     },
    //     {
    //         'name' : 'Blogs',
    //         'link' : '/'
    //     },
    //     {
    //         'name' : 'FAQs',
    //         'link' : '/'
    //     }
    // ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '083402 20139',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '09:00 AM - 18:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': 'near JANTA COLLEGE, Jhanjharpur, Bihar, India, 847404',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        {/* <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div> */}
                      <h1 style={{ color: "white" }}>DantSri</h1>

                      <p>
  Dental Care Seattle is a top-rated local practice offering expert cosmetic, 
  preventative, and restorative dentistry on First Hill. Our dedicated team 
  ensures personalized care, advanced treatments, and a comfortable experience 
  for every patient.
</p>


                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                                <li><a href="/"><FaYoutube/></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        {/* <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div> */}
                    </div>
                    <div className="col-lg-4 col-md-5">
                    <div className="footer-contact">
    <p>Contact & Information</p>
    {
        footerContacts.map((footerContact, index) => (
            <div className="contact-list" key={index}>
                <div className="contact-icon">
                    <img src={footerContact.icon} alt="call" loading='lazy' />
                </div>
                <div className="contact-text">
                    <p>{footerContact.title}</p>
                    <h5>{footerContact.info}</h5>
                </div>
            </div>
        ))
    }
</div>

                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy;2025 DantSri. All Right Reserved</p>
                    </div>  
                    {/* <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                           */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Faq from '../sections/Faq/Faq';
import Priority from '../sections/Priority/Priority';
import Safety from '../sections/Safety/Safety';
import Team from '../sections/Team/Team';
import Footer from '../sections/Footer/Footer';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on mount
    }, []);

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>About Us - DantSri | Your Trusted Dental Care</title>
                <meta 
                    name="description" 
                    content="Learn about DantSri, a trusted dental clinic committed to providing top-notch oral care with experienced professionals and modern technology."
                />
                <meta 
                    name="keywords" 
                    content="dental care, best dentist, oral health, teeth cleaning, DantSri, cosmetic dentistry, Bihar dental clinic"
                />
            </Helmet>

            <Navbar />
            <AboutBanner />
            <Priority />
            <Safety />
            <Team />
            <Faq />
            <Footer />
        </>
    );
};

export default About;

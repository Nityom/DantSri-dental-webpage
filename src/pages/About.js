 import React, { useEffect } from 'react';
 import { Helmet } from 'react-helmet-async';

// Components
 import Navbar from '../components/Navbar/Navbar';

// Sections
 import AboutBanner from '../sections/AboutBanner/AboutBanner';
 import Safety from '../sections/Safety/Safety';
 import Priority from '../sections/Priority/Priority';
 import Team from '../sections/Team/Team';
 import Faq from '../sections/Faq/Faq';
 import Footer from '../sections/Footer/Footer';
// About Page Component


const About = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* SEO Metadata */}
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

            {/* Page Structure */}
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
// This code defines the About page of the DantSri dental clinic website.
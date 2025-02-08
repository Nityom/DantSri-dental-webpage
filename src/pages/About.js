import React, {useEffect} from 'react';
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
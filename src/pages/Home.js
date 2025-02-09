import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Loader from '../components/Loader'; // Interactive Loader
import { motion } from 'framer-motion';

// Lazy Load Sections for Performance Optimization
const Banner = lazy(() => import('../sections/Banner/Banner'));
const Services = lazy(() => import('../sections/Services/Services'));
const Emergency = lazy(() => import('../sections/Emergency/Emergency'));
const Features = lazy(() => import('../sections/Features/Features'));
const Expert = lazy(() => import('../sections/Expert/Expert'));
const Testimonial = lazy(() => import('../sections/Testimonial/Testimonial'));
const Appointment = lazy(() => import('../sections/Appointment/Appointment'));
// const Blogs = lazy(() => import('../sections/Blogs/Blogs'));

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to top on mount
    }, []);

    return (
        <>
            {/* SEO Optimization */}
            <Helmet>
                <title>DantSri Dental Clinic</title>
                <meta name="description" content="Welcome to our healthcare platform. Book appointments, read testimonials, and explore our services." />
                <meta name="keywords" content="healthcare, doctors, appointment booking, testimonials, services" />
            </Helmet>

            {/* Navbar */}
            <Navbar />

            {/* Lazy Loaded Sections with Animation */}
            <Suspense fallback={<Loader />}>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    <Banner />
                    <Services />
                    <Emergency />
                    <Features />
                    <Expert />
                    <Testimonial />
                    {/* <Blogs /> */}
                    <Appointment />
                </motion.div>
            </Suspense>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;

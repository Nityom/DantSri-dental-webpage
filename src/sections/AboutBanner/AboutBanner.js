 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Helmet } from 'react-helmet-async';

 import './AboutBanner.scss';
 import bannerOne from '../../assets/about/banner/banner_1.png';
 import bannerTwo from '../../assets/about/banner/banner_2.png';
 import pattern from '../../assets/banner/pattern.png';

 const AboutBanner = () => {
     return (
         <>
             <Helmet>
                 <title>About DantSri - Best Dental Care in Bihar</title>
                 <meta
                     name="description"
                     content="DantSri provides expert dental care, ensuring bright smiles and healthy teeth. Visit us for cosmetic and preventive dentistry."
                 />
                 <meta
                     name="keywords"
                     content="dental care, best dentist, oral health, teeth cleaning, cosmetic dentistry, Bihar dental clinic"
                 />
             </Helmet>

             <section className="about-section" data-aos="fade-up" data-aos-duration="2000">
                 <div className="d-table">
                     <div className="d-table-cell">
                         <div className="container">
                             <div className="row align-items-center">
                                 {/* Text Content */}
                                 <div className="col-lg-5">
                                     <article className="about-banner-text">
                                         <header>
                                             <h2>Your Trusted Dental Care Partner</h2>
                                         </header>
                                         <p>
                                             Your smile is our pride. We make oral wellness a daily priority, so you can eat, talk, laugh, and smile with confidence.
                                         </p>
                                         <div className="theme-btn">
                                             <Link to="/contact" aria-label="Contact DantSri for dental services">
                                                 Contact Us
                                             </Link>
                                         </div>
                                     </article>
                                 </div>

                                 {/* Images */}
                                 <div className="col-lg-7">
                                     <div className="about-banner-img">
                                         <img
                                             src={bannerOne}
                                             alt="Smiling patient at DantSri dental clinic"
                                             loading="lazy"
                                         />
                                         <img
                                             src={bannerTwo}
                                             alt="Dentist performing a procedure at DantSri"
                                             loading="lazy"
                                         />
                                         <img
                                             className="pattern"
                                             src={pattern}
                                             alt="Decorative pattern background"
                                             loading="lazy"
                                         />
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
         </>
     );
 };

 export default AboutBanner;

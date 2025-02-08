import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {
    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Your Smile Deserves the Best at DantSri</h1>
                                    <p>
                                        At DantSri, we prioritize your dental health and aesthetics. Our skilled team is dedicated 
                                        to providing personalized care using advanced technology in a warm and welcoming environment. 
                                        We are here to help you achieve and maintain a beautiful smile.
                                    </p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/contact">Book an appointment</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" loading="lazy" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Dental Care</p>
                                                <h6>083402 20139</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" loading="lazy" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" width={100} loading="lazy" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Jyoti </p>
                                            <p><small>Cosmetologist, Trichologist, DENTAL SURGEON</small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" loading="lazy" />
                                        <img src={shapeTwo} alt="shape" loading="lazy" />
                                        <img src={shapeThree} alt="shape" loading="lazy" />
                                        <img src={shapeFour} alt="shape" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector */}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" loading="lazy" />
        </section>
    );
};

export default Banner;

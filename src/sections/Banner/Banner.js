import React from 'react';

// Styles & Assets
import './Banner.scss';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

// Routing
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="section-bg section-common banner-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Content */}
          <div className="col-lg-6">
            <header className="banner-text" data-aos="fade-up" data-aos-duration="2000">
              <h1>Your Smile Deserves the Best at DantSri</h1>
              <p>
                At DantSri, we prioritize your dental health and aesthetics.
                Our skilled team is dedicated to providing personalized oral care using advanced
                technology in a warm and welcoming environment. We are here to help you achieve and
                maintain your beautiful smile.
              </p>

              <div className="banner-bottom">
                <div className="theme-btn">
                  <Link to="/contact">Book an Appointment</Link>
                </div>

                <div className="banner-call">
                  <div className="icon">
                    <img src={icon} alt="Phone icon for appointment" loading="lazy" />
                  </div>
                  <address className="call-text">
                    <p>Dental Care</p>
                    <a
                      href="https://wa.me/918340220139"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      aria-label="Chat on WhatsApp"
                    >
                      <h6>083402 20139</h6>
                    </a>
                  </address>
                </div>
              </div>
            </header>
          </div>

          {/* Visual Content */}
          <div className="col-lg-6">
            <div
              className="banner-img-area"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="banner-img">
                <img
                  src={bannerImg}
                  alt="Happy patient showing smile"
                  loading="lazy"
                />
              </div>

              {/* Doctor Box */}
              <div className="info-box">
                <div className="info-img">
                  <img
                    src={doctorImg}
                    alt="Dr. Jyoti - Dental Surgeon"
                    width={100}
                    loading="lazy"
                  />
                </div>
                <div className="info-text">
                  <p>Dr. Jyoti</p>
                  <small>Oro-Dental Surgeon, Cosmetologist, Trichologist</small>
                </div>
              </div>

              {/* Decorative Shapes */}
              <div className="shapes">
                <img src={shapeOne} alt="Shape 1" loading="lazy" />
                <img src={shapeTwo} alt="Shape 2" loading="lazy" />
                <img src={shapeThree} alt="Shape 3" loading="lazy" />
                <img src={shapeFour} alt="Background decorative pattern" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern vector */}
      <img
        className="banner-pattern"
        src={bannerPattern}
        alt="Banner background pattern"
        loading="lazy"
      />
    </section>
  );
}

export default Banner;

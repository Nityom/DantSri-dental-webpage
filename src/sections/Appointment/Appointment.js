import React from 'react';
import './Appointment.scss';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import { AiFillHome } from "react-icons/ai";

const Appointment = () => {
    const embedMapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14326.664221027982!2d86.2772433!3d26.2500207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee798a5eb8fb8d%3A0xd4a13b8246675fd3!2sJANTA%20COLLEGE%2C%20Jhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1700000000000';

    const reviewURL =
        'https://search.google.com/local/writereview?placeid=ChIJjfu4Xop57jkR019nRoI7odQ';

    return (
        <section
            data-aos="fade-up"
            className="appointment-section pb-70"
            data-aos-duration="2000"
        >
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Map Section */}
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe
                                src={embedMapSrc}
                                style={{ border: 0 }}
                                width="100%"
                                height="300"
                                loading="lazy"
                                title="Clinic Map Location"
                                allowFullScreen
                            />
                            <address className="location-name">
                                <AiFillHome />
                                <p>
                                    Near JANTA COLLEGE, Jhanjharpur, Bihar, India, 847404
                                </p>
                            </address>
                            <div className="google-review-btn">
                                <a
                                    rel="noopener noreferrer"
                                    href={reviewURL}
                                    className="btn mt-3"
                                    style={{
                                        color: "#fff",
                                        backgroundColor: "#583FBC",
                                    }}
                                    target="_blank"
                                >
                                    Leave a Google Review
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle
                                title="Book Your Dental Visit at DantSri"
                                subTitle="BOOK YOUR APPOINTMENT"
                                description="Schedule your appointment with ease and receive top-notch dental care from our experienced professionals in Jhanjharpur, Bihar."
                            />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;

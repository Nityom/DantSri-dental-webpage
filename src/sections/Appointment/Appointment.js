import React from 'react';
import './Appointment.scss';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {
    const coordinatesEmbedUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14326.664221027982!2d86.2772433!3d26.2500207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee798a5eb8fb8d%3A0xd4a13b8246675fd3!2sJANTA%20COLLEGE%2C%20Jhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1700000000000';

    const googleReviewLink =
        'https://search.google.com/local/writereview?placeid=ChIJjfu4Xop57jkR019nRoI7odQ';

    return (
        <section
            className="appointment-section pb-70"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Location Map */}
                    <div className="col-md-6 col-lg-5">
                        <div className="google-map">
                            <iframe
                                title="Clinic Map Location"
                                src={coordinatesEmbedUrl}
                                width="100%"
                                height="300"
                                loading="lazy"
                                style={{ border: 0 }}
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
                                    href={googleReviewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn mt-3"
                                    style={{
                                        backgroundColor: "#583FBC",
                                        color: "#fff",
                                    }}
                                >
                                    Leave a Google Review
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="col-md-6 col-lg-7">
                        <div className="appointment-form-area">
                            <SectionTitle
                                subTitle="BOOK YOUR APPOINTMENT"
                                title="Book Your Dental Visit at DantSri"
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

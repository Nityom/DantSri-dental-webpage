import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14326.664221027982!2d86.2772433!3d26.2500207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee798a5eb8fb8d%3A0xd4a13b8246675fd3!2sJANTA%20COLLEGE%2C%20Jhanjharpur%2C%20Bihar%20847404!5e0!3m2!1sen!2sin!4v1700000000000';


    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>near JANTA COLLEGE, Jhanjharpur, Bihar, India, 847404</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                        <SectionTitle 
  subTitle="BOOK YOUR APPOINTMENT" 
  title="Experience Exceptional Care at DantSri" 
  description="Schedule your appointment with ease and receive top-notch dental care from our experienced professionals." 
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
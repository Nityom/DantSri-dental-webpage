import React, { useEffect } from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    useEffect(() => {
        // SEO Optimization - Set Page Title & Meta Description
        document.title = "DantSri Dental Care";
        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Get expert dental care from our top dentists. Our experienced professionals ensure comfort with advanced techniques and a patient-centered approach.'
        );
    }, []);

    const expertList = [
        "Top quality dental team",
        "State of the art dental services",
        "Customer satisfaction guaranteed"
    ];

    return (
        <section 
            className='expert-section' 
            data-aos="fade-up" 
            data-aos-duration="2000"
            aria-label="Expert dental professionals in Seattle"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Top-notch dentistry, from Seattle's top dentists."
                                description="Our experienced dental professionals provide comprehensive care, ensuring your comfort and well-being with advanced techniques and a patient-centered approach."
                            />

                            <ul>
                                {expertList.map((item, index) => (
                                    <li key={index}>
                                        <BsFillCheckCircleFill /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img 
                                src={expertImg} 
                                alt="Experienced dental professionals at work" 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;

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
        "State of the Art Dental Services",
        "Patient satisfaction guaranteed",
                "Top quality dental team",
        "Advanced dental technology",
    ];

    return (
        <section 
            data-aos="fade-up" 
            aria-label="Expert dental professionals" 
            data-aos-duration="2000" 
            className='expert-section'
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                description="With a patient-centered approach, our experienced dental professionals deliver comprehensive care using advanced techniques, dedicated to your comfort and well-being."
                                title="Top-notch dentistry, from top dentists."
                                subTitle="EXPERTS IN DENTAL"
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
                                loading="lazy" 
                                src={expertImg} 
                                alt="Experienced dental professionals at work" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;

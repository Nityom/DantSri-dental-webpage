import React, { useEffect } from 'react';
import './Expert.scss';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    useEffect(() => {
        // SEO optimization
        document.title = "DantSri Dental Care";
        const metaDesc = document.querySelector('meta[name="description"]');
        metaDesc?.setAttribute(
            'content',
            'Get expert dental care from our top dentists. Our experienced professionals ensure comfort with advanced techniques and a patient-centered approach.'
        );
    }, []);

    const expertisePoints = [
        "State of the Art Dental Services",
        "Patient satisfaction guaranteed",
        "Top quality dental team",
        "Advanced dental technology",
    ];

    return (
        <section
            className="expert-section"
            data-aos="fade-up"
            data-aos-duration="2000"
            aria-label="Expert dental professionals"
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* Text Section */}
                    <div className="col-md-6 col-lg-6">
                        <div className="expert-text">
                            <SectionTitle
                                subTitle="EXPERTS IN DENTAL"
                                title="Top-notch dentistry, from top dentists."
                                description="With a patient-centered approach, our experienced dental professionals deliver comprehensive care using advanced techniques, dedicated to your comfort and well-being."
                            />

                            <ul>
                                {expertisePoints.map((point, idx) => (
                                    <li key={`exp-${idx}`}>
                                        <BsFillCheckCircleFill /> {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-md-6 col-lg-6">
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

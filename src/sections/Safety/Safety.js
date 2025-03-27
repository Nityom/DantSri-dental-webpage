import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section 
            className='safety-section pt-100 section-bg section-common pb-70' 
            data-aos="fade-up" 
            data-aos-duration="2000"
            aria-labelledby="safety-heading"
        >
            <div className="container">
                <SectionTitle 
                    subTitle="Safety First" 
                    title="Your Well-being is Our Priority"
                    description="We uphold the highest standards of safety, ensuring a secure and comfortable experience for every Patients."
                />

                {/* Responsive Embedded YouTube Video */}
                <div className="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/f4jG8BCl5s0" 
                        title="Safety Measures - Your Well-being is Our Priority" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        aria-label="Embedded safety video from YouTube"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;

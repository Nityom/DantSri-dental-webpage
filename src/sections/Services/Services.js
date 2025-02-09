import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';

const Services = () => {
    useEffect(() => {
        // SEO Optimization - Set Page Title
        document.title = "Our Services | DantSri Dental Care";
        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Discover our personalized dental care services at DantSri, ensuring a healthy and beautiful smile with expert treatments and preventive care.'
        );
    }, []);

    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000" aria-label="Our Dental Services">
            <div className="container">
                {/* Section Title & Intro Text */}
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12">
                        <SectionTitle title="Feel amazing about your oral health" subTitle="Our Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p className='service-title-text'>
                            At DantSri, your oral health is our priority. We offer personalized dental care tailored 
                            to your needs, ensuring a healthy and beautiful smile through expert services and preventive treatments.
                        </p>
                    </div>
                </div>

                {/* Service List */}
                <main>
                    <div className="row">
                        {ServicesData.map((service,index) => (
                            <Service key={service.id || index} serviceList={service} />
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Services;

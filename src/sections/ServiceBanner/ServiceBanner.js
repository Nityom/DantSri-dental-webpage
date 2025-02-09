import React from 'react';
import './ServiceBanner.scss';
import service1 from '../../assets/servicePage/1.png';
import service2 from '../../assets/servicePage/2.jpg';
import service3 from '../../assets/servicePage/3.jpg';
import service4 from '../../assets/servicePage/4.jpg';
import service5 from '../../assets/servicePage/5.jpg';
import service6 from '../../assets/servicePage/6.jpg';

const services = [
    { 
        title: 'Comprehensive Dental Care', 
        description: 'We provide routine check-ups, teeth cleaning, cavity fillings, root canals, and advanced cosmetic treatments such as teeth whitening and dental implants.', 
        image: service1 
    },
    { 
        title: 'Advanced Digital X-Ray', 
        description: 'Our digital X-ray services ensure accurate diagnostic images with minimal radiation exposure for precise dental and orthopedic treatments.', 
        image: service2 
    },
    { 
        title: 'Skin & Hair Restoration', 
        description: 'Offering acne treatment, anti-aging procedures, laser hair removal, and hair regrowth therapy using the latest dermatology advancements.', 
        image: service3 
    },
    { 
        title: 'On-Site Pharmacy', 
        description: 'Our well-stocked pharmacy provides prescription medications, supplements, and expert pharmacist guidance for optimal health.', 
        image: service4 
    },
    { 
        title: 'Pathology & Diagnostic Tests', 
        description: 'Partnering with Dr. Lal PathLabs, we offer accurate blood tests, genetic screenings, and pathology services with state-of-the-art technology.', 
        image: service5 
    },
    { 
        title: 'Modern Operation Theater', 
        description: 'Equipped with advanced surgical instruments and anesthesia systems for minor and major medical procedures, ensuring a sterile and safe environment.', 
        image: service6 
    },
];

const ServiceBanner = () => {
    return (
        <section className="service-banner-section section-common section-bg" itemScope itemType="https://schema.org/MedicalBusiness">
            <div className="container">
             
                {services.map((service, index) => (
                    <article 
                        className={`row align-items-center service-item ${index % 2 !== 0 ? 'reverse' : ''}`} 
                        key={index}
                        itemScope 
                        itemType="https://schema.org/MedicalProcedure"
                    >
                        {/* Service Description */}
                        <div className={`col-lg-5 col-md-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`} data-aos="fade-up" data-aos-duration="2000">
                            <div className="service-banner-text">
                                <h2 itemProp="name">{service.title}</h2>
                                <p itemProp="description">{service.description}</p>
                            </div>
                        </div>

                        {/* Service Image */}
                        <div className={`col-lg-7 col-md-6 ${index % 2 !== 0 ? 'order-lg-1' : ''}`} data-aos="fade-up" data-aos-duration="2000">
                            <figure className="service-banner-img">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    loading="lazy" 
                                    itemProp="image"
                                />
                            </figure>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    );
};

export default ServiceBanner;

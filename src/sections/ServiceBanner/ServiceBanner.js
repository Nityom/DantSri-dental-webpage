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
        title: 'Dental Services', 
        description: 'We provide complete dental care, including routine check-ups, professional teeth cleaning, cavity fillings, root canals, and advanced cosmetic treatments such as teeth whitening, veneers, and dental implants. Our team of experienced dentists ensures a pain-free and comfortable experience for every patient.', 
        image: service1 
    },
    { 
        title: 'Digital X-Ray', 
        description: 'Using cutting-edge imaging technology, our digital X-ray services provide clear and accurate diagnostic images with minimal radiation exposure. This allows for precise treatment planning for dental, orthopedic, and general medical conditions, ensuring early detection and effective solutions.', 
        image: service2 
    },
    { 
        title: 'Skin & Hair Treatments', 
        description: 'Our expert dermatologists offer a wide range of skin and hair treatments, including acne treatment, anti-aging procedures, laser hair removal, hair regrowth therapy, and chemical peels. We use the latest technology to help you achieve healthy, glowing skin and strong, lustrous hair.', 
        image: service3 
    },
    { 
        title: 'Pharmacy', 
        description: 'Our well-stocked pharmacy provides a comprehensive selection of prescription medications, over-the-counter drugs, health supplements, and personal care products. We ensure the availability of high-quality, genuine medicines with expert guidance from our pharmacists for safe and effective use.', 
        image: service4 
    },
    { 
        title: 'Dr. Lal PathLabs', 
        description: 'Partnering with Dr. Lal PathLabs, we offer a full range of diagnostic testing services, including blood tests, urine analysis, genetic screening, and specialized pathology tests. With state-of-the-art equipment and highly trained professionals, we ensure accurate results and timely reports for better health management.', 
        image: service5 
    },
    { 
        title: 'Operation Theater', 
        description: 'Our state-of-the-art operation theater is equipped with advanced surgical instruments, modern anesthesia systems, and highly trained medical professionals. We ensure a sterile and safe environment for minor and major surgical procedures, prioritizing patient care and recovery with world-class medical standards.', 
        image: service6 
    },
];



const ServiceBanner = () => {
    return (
        <section className="service-banner-section section-common section-bg">
            <div className="container">
                {services.map((service, index) => (
                    <div className={`row align-items-center service-item ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
                        {/* Left Content (Alternates) */}
                        <div className={`col-lg-5 col-md-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`} data-aos="fade-up" data-aos-duration="2000">
                            <div className="service-banner-text">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>

                        {/* Right Image (Alternates) */}
                        <div className={`col-lg-7 col-md-6 ${index % 2 !== 0 ? 'order-lg-1' : ''}`} data-aos="fade-up" data-aos-duration="2000">
                            <div className="service-banner-img">
                                <img src={service.image} alt={service.title} loading='lazy' />
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Centered "Book an Appointment" Button */}
                {/* <div className="text-center mt-5">
                    <Link to="/contact" className="theme-btn">Book an Appointment</Link>
                </div> */}
            </div>
        </section>
    );
};

export default ServiceBanner;

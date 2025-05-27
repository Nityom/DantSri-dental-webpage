import React, { useEffect } from "react";
import "./Emergency.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import EmergencyImg from "../../assets/emergency.png";
import { Link } from "react-router-dom";

const Emergency = () => {
    useEffect(() => {
        // Set document title and meta description for SEO
        document.title = "Emergency Dental Care | DantSri";

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Need urgent dental care? DantSri provides 24/7 emergency dental treatment for toothaches, injuries, and other urgent dental needs."
            );
        }
    }, []);

    return (
        <section
            className="emergency-section"
            data-aos="fade-up"
            data-aos-duration="2000"
            aria-label="Emergency Dental Care"
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className="col-lg-6 col-md-12">
                        <div className="emergency-img">
                            <img
                                src={EmergencyImg}
                                alt="Emergency Dental Care"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="col-lg-6 col-md-12">
                        <div className="emergency-text">
                            <SectionTitle
                                subTitle="Dental 24H Emergency"
                                title="Gentle, friendly treatment from our oral experts."
                                description="Immediate dental care available 24/7 for emergencies like toothaches, injuries, and urgent treatments."
                            />
                            <div className="theme-btn">
                                <Link
                                    to="/contact"
                                    aria-label="Book an appointment for emergency dental care"
                                >
                                    Book an appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;

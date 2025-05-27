import React, { useEffect } from "react";
import "./Features.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import IconList from "../../components/IconList/IconList";
import featuresData from "./FeaturesData";

const Features = () => {
    useEffect(() => {
        // SEO metadata update
        document.title = "Specialized Care & Features | DantSri";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Experience expert-led dental treatments with advanced technology at DantSri. Personalized care for effective healthcare solutions."
            );
        }
    }, []);

    return (
        <section
            className="section-bg section-common features-section pt-100 pb-70"
            data-aos="fade-up"
            data-aos-duration="2000"
            aria-label="Specialized Dental Care Features"
        >
            <div className="container">
                <SectionTitle
                    subTitle="Features"
                    title="Specialized care through experience"
                    description="Expert-led treatments with advanced technology for personalized and effective healthcare solutions."
                />
                <div className="row align-items-center">
                    {featuresData.map((feature, i) => (
                        <IconList
                            key={i}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

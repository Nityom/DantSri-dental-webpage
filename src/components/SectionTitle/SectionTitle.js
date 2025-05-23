import React from "react";
import "./SectionTitle.scss";

// Section title component
const SectionTitle = ({ subTitle, title, description }) => {
    return (
        <div className="section-title">
            <span>{subTitle}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
};

export default SectionTitle;

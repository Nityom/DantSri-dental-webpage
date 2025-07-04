import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, description }) => {
  return (
    <div className="page-title">
      <div className="container">
        <h2>{title || "News & Articles"}</h2>
        <p>{description || "Stays updated with our latest blog and news and get healthy tips & trick for oral health"}</p>
      </div>
    </div>
  );
};

export default PageTitle;

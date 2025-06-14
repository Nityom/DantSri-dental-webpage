 import React from 'react';
 import { Link } from 'react-router-dom';
 import SectionTitle from '../../components/SectionTitle/SectionTitle';
 import priorityImg from '../../assets/about/priority.png';

 import './Priority.scss';

 const Priority = () => {
     return (
         <section
             className="priority-section emergency-section"
             data-aos="fade-up"
             data-aos-duration="2000"
             aria-labelledby="priority-heading"
         >
             <div className="container-fluid">
                 <div className="row align-items-center">
                     {/* Image */}
                     <div className="col-lg-6 col-md-6">
                         <div className="priority-img">
                             <img
                                 src={priorityImg}
                                 alt="Our priority is your dental care and comfort"
                                 loading="lazy"
                                 width="100%"
                                 height="auto"
                             />
                         </div>
                     </div>

                     {/* Text */}
                     <div className="col-lg-6 col-md-6">
                         <div className="priority-text">
                             <SectionTitle
                                 subTitle="OUR PRIORITY"
                                 title="Our Patients Come First"
                                 description="We are dedicated to delivering top-notch care, ensuring your comfort, wellness, and satisfaction at every step."
                             />
                             <div className="theme-btn">
                                 <Link to="/contact" aria-label="Book a dental appointment">
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

 export default Priority;

 import React from 'react';
 import './Team.scss';
 import SectionTitle from '../../components/SectionTitle/SectionTitle';
 import teamImg1 from '../../assets/about/team/1.png';
 import teamImg2 from '../../assets/about/team/2.png';

 const Team = () => {
     const teamList = [
         {
             photo: teamImg1,
             fullName: 'Dr. S.N. Prasad',
             title: 'Oro-Dental Surgeon, Implantologist',
             experience: 'Ex Sr. Consultant - DNSH (Cancer Hospital) New Delhi, Ex Resident - DNH Hapur',
         },
         {
             photo: teamImg2,
             fullName: 'Dr. Jyoti',
             title: 'Oro-Dental Surgeon, Cosmetologist, FMC',
             experience: 'PGDCC, PGDMT',
         },
     ];

     return (
         <section
             className="team-area pt-100"
             data-aos="fade-up"
             data-aos-duration="2000"
             aria-labelledby="team-heading"
         >
             <div className="container">
                 {/* Header Section */}
                 <div className="row align-items-center">
                     <div className="col-lg-7">
                         <SectionTitle
                             subTitle="Meet Our Team"
                             title="Meet Our Expert Dental Team"
                         />
                     </div>
                     <div className="col-lg-5">
                         <p className="intro-text pt-5">
                             Our team of skilled professionals is dedicated to providing top-notch dental care.
                             With expertise and a patient-first approach, we ensure a comfortable experience for every visit.
                         </p>
                     </div>
                 </div>

                 {/* Member Cards */}
                 <div className="row">
                     {teamList.map((member, idx) => (
                         <div className="col-lg-3 col-sm-6" key={idx}>
                             <div className="team-box" role="group" aria-labelledby={`member-${idx}`}>
                                 <div className="team-photo">
                                     <img
                                         src={member.photo}
                                         alt={member.fullName}
                                         loading="lazy"
                                         width="200"
                                         height="200"
                                     />
                                 </div>
                                 <h3 id={`member-${idx}`}>{member.fullName}</h3>
                                 <h5>{member.title}</h5>
                                 <p>{member.experience}</p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
     );
 };

 export default Team;

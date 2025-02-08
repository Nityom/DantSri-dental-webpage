import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';

const Team = () => {
    const teams = [
        { 
            img: imgOne, 
            name: 'Dr. S.N. Prasad', 
            designation: 'Oro-Dental Surgeon, Implantologist',
            details: 'Ex Sr. Consultant - DNSH (Cancer Hospital) New Delhi, Ex Resident - DNH Hapur'
        },
        { 
            img: imgTwo, 
            name: 'Dr. Jyoti', 
            designation: 'Oro-Dental Surgeon, Cosmetologist, FMC',
            details: 'PGDCC, PGDMT' 
        },
    ];

    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet Our Team"
                            title="Meet Our Expert Dental Team"
                        />
                    </div>
                    <div className="col-lg-5">
                        <p className='pt-5'>
                            Our team of skilled professionals is dedicated to providing top-notch dental care. 
                            With expertise and a patient-first approach, we ensure a comfortable experience for every visit.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {teams.map((team, index) => (
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <div className="team-card">
                                <div className="team-img">
                                    <img src={team.img} alt={team.name} loading='lazy' />
                                </div>
                                <h3>{team.name}</h3>
                                <h5>{team.designation}</h5>
                                <p>{team.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

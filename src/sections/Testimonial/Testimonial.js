import React from 'react';
import Slider from "react-slick";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';

import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import imgFour from '../../assets/testimonial/4.png';

import './Testimonial.scss';

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
        <AiOutlineLeft />
    </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
        <AiOutlineRight />
    </div>
);

const Testimonial = () => {
    const testimonials = [
        {
            img: imgTwo,
            name: 'Suman Thakur',
            description: 'Absolutely the best dental experience I’ve ever had. The team is highly skilled and made the entire visit stress-free.',
            ratings: Array(5).fill(null).map((_, i) => <AiFillStar key={i} aria-label="star" />)
        },
        {
            img: imgFour,
            name: 'Govind Raut',
            description: 'I was initially nervous, but the staff were incredibly calming. The final results exceeded my expectations!',
            ratings: Array(5).fill(null).map((_, i) => <AiFillStar key={i} aria-label="star" />)
        },
        {
            img: imgOne,
            name: 'Kalyani Kumari',
            description: 'Wonderful experience! Everyone was so professional, and the procedure was smooth and painless.',
            ratings: Array(5).fill(null).map((_, i) => <AiFillStar key={i} aria-label="star" />)
        },
        {
            img: imgThree,
            name: 'Kapil Chaudhary',
            description: 'Fantastic service and quick treatment! The friendly staff made sure I felt comfortable throughout.',
            ratings: Array(5).fill(null).map((_, i) => <AiFillStar key={i} aria-label="star" />)
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='testimonial-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                            subTitle="TESTIMONIAL"
                            title="What People Say About Us"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">
                            See what our happy patients have to say about their experience with us and  
                            why they trust us with their smiles. Your journey to a healthier, brighter 
                            smile starts here!
                        </p>
                    </div>
                </div>

                <div className="slider-container">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testimonial, index) => (
                            <TestimoniCard key={index} testimonail={testimonial} />
                        ))}
                    </Slider>
                </div>

                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "Dentist",
                            "name": "Your Dental Clinic"
                        },
                        "author": {
                            "@type": "Person",
                            "name": testimonials.map(t => t.name)
                        },
                        "reviewBody": testimonials.map(t => t.description),
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5"
                        }
                    })}
                </script>
            </div>
        </section>
    );
};

export default Testimonial;

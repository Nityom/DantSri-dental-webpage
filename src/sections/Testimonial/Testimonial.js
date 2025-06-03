import React from 'react';
import Slider from "react-slick";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';

import img1 from '../../assets/testimonial/1.png';
import img2 from '../../assets/testimonial/2.png';
import img3 from '../../assets/testimonial/3.png';
import img4 from '../../assets/testimonial/4.png';

import './Testimonial.scss';

// Left Arrow Component
function ArrowLeft({ onClick }) {
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            <AiOutlineLeft />
        </div>
    );
}

// Right Arrow Component
function ArrowRight({ onClick }) {
    return (
        <div className="custom-arrow next" onClick={onClick}>
            <AiOutlineRight />
        </div>
    );
}

const Testimonial = () => {
    const reviewList = [
        {
            img: img2,
            name: 'Suman Thakur',
            description: 'Absolutely the best dental experience I’ve ever had. The team is highly skilled and made the entire visit stress-free.',
            ratings: new Array(5).fill(0).map((_, idx) => <AiFillStar key={idx} aria-label="star" />)
        },
        {
            img: img4,
            name: 'Govind Raut',
            description: 'I was initially nervous, but the staff were incredibly calming. The final results exceeded my expectations!',
            ratings: new Array(5).fill(0).map((_, idx) => <AiFillStar key={idx} aria-label="star" />)
        },
        {
            img: img1,
            name: 'Kalyani Kumari',
            description: 'Wonderful experience! Everyone was so professional, and the procedure was smooth and painless.',
            ratings: new Array(5).fill(0).map((_, idx) => <AiFillStar key={idx} aria-label="star" />)
        },
        {
            img: img3,
            name: 'Kapil Chaudhary',
            description: 'Fantastic service and quick treatment! The friendly staff made sure I felt comfortable throughout.',
            ratings: new Array(5).fill(0).map((_, idx) => <AiFillStar key={idx} aria-label="star" />)
        }
    ];

    const sliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
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
        <section
            className="section-common section-bg testimonial-section pt-100 pb-70"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
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
                            See what our happy patients have to say about their experience with us and why they trust us with their smiles.
                            Your journey to a healthier, brighter smile starts here!
                        </p>
                    </div>
                </div>

                <div className="slider-container">
                    <Slider {...sliderOptions} className="testimonial-slider">
                        {reviewList.map((item, idx) => (
                            <TestimoniCard key={idx} testimonail={item} />
                        ))}
                    </Slider>
                </div>

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
                            "name": reviewList.map(rev => rev.name)
                        },
                        "reviewBody": reviewList.map(rev => rev.description),
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5"
                        }
                    })
                    }

                </script>

            </div>
        </section>
    );
};

export default Testimonial;

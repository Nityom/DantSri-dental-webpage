import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import imgFour from '../../assets/testimonial/4.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonials = [
        {
            img: imgOne,
            name: 'Kalyani Kumari',
            description: 'Amazing dental experience! The staff was professional, and the treatment was painless. Highly recommended!',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />,]
        },
        {
            img: imgTwo,
            name: 'Suman Thakur',
            description: 'Best dental clinic I have visited! The doctors are highly skilled, and they made me feel so comfortable throughout the process.',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        },
        {
            img: imgThree,
            name: 'Kapil Chaudhary',
            description: 'Exceptional service! The team was friendly, and my treatment was quick and effective. My smile has never looked better!',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        },
        {
            img: imgFour,
            name: 'Govind Raut',
            description: 'I was nervous about my dental procedure, but the staff made me feel at ease. The results were fantastic!',
            ratings: [<AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />, <AiFillStar />]
        }
    ];

    // Slider settings without auto-scroll
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Keep navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                            subTitle="TESTIMONIAL"
                            title="What people have said about us"
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

                <Slider {...settings} className="testimoni-slider">
                    {testimonials.map((testimonial, index) => (
                        <TestimoniCard key={index} testimonail={testimonial} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;

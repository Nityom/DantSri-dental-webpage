 import React, { useState } from 'react';
 import './Gallery.scss';

 import SectionTitle from '../../components/SectionTitle/SectionTitle';

 import imgOne from '../../assets/servicePage/gallery/1.png';
 import imgTwo from '../../assets/servicePage/gallery/2.png';
 import imgThree from '../../assets/servicePage/gallery/3.png';
 import imgFour from '../../assets/servicePage/gallery/4.png';
 import imgFive from '../../assets/servicePage/gallery/5.png';
 import imgSix from '../../assets/servicePage/gallery/6.png';

 const images = [
  { src: imgOne, alt: 'State-of-the-art dental facility' },
  { src: imgTwo, alt: 'Expert dentist performing a procedure' },
  { src: imgThree, alt: 'Happy patient after dental treatment' },
  { src: imgFour, alt: 'Advanced dental equipment' },
  { src: imgFive, alt: 'Comfortable waiting area' },
  { src: imgSix, alt: 'Dentist consulting a patient' }
 ];

 const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
   <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
     <SectionTitle
      subTitle="Our Gallery"
      title="See Our Care in Action"
      description="Explore moments from our dental clinic, showcasing our state-of-the-art facilities, expert care, and happy smiles of our patients."
     />

     <div className="row">
      {images.map((image, index) => (
       <div className="col-md-4 col-sm-6" key={index}>
        <div className="gallery-img" onClick={() => setSelectedImage(image.src)}>
         <img
          src={image.src}
          alt={image.alt}
          loading='lazy'
          className='img-fluid'
         />
        </div>
       </div>
      ))}
     </div>

     {selectedImage && (
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
       <img
        src={selectedImage}
        alt="Enlarged view"
        className="lightbox-img"
       />
      </div>
     )}
    </div>
   </section>
  );
 };

 export default Gallery;

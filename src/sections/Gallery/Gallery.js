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
  { src: imgOne, alt: 'Modern dental facility with advanced setup' },
  { src: imgTwo, alt: 'Professional dentist conducting a procedure' },
  { src: imgThree, alt: 'Smiling patient after receiving dental care' },
  { src: imgFour, alt: 'Latest dental equipment in use' },
  { src: imgFive, alt: 'Welcoming and relaxing waiting lounge' },
  { src: imgSix, alt: 'Dentist consulting with a happy patient' }
 ];

 const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => setSelectedImage(src);
  const handleCloseLightbox = () => setSelectedImage(null);

  return (
   <section className='gallery-section pb-70 pt-100' data-aos="fade-up" data-aos-duration="2000">
    <div className="container">
     <SectionTitle
      subTitle="Our Gallery"
      title="See Our Care in Action"
      description="Take a glimpse into our clinic showcasing state-of-the-art tools, quality care, and happy patient moments."
     />

     <div className="row">
      {images.map((image, idx) => (
       <div className="col-sm-6 col-md-4" key={idx}>
        <div className="gallery-img" onClick={() => handleImageClick(image.src)}>
         <img
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="img-fluid"
         />
        </div>
       </div>
      ))}
     </div>

     {selectedImage && (
      <div className="lightbox" onClick={handleCloseLightbox}>
       <img
        loading="lazy"
        src={selectedImage}
        alt="Zoomed gallery preview"
        className="lightbox-img"
       />
      </div>
     )}
    </div>
   </section>
  );
 };

 export default Gallery;

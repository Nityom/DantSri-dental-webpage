 import React, { useEffect } from 'react';
 import SectionTitle from '../../components/SectionTitle/SectionTitle';
 import Navbar from '../../components/Navbar/Navbar';
 import './Contactus.scss';
 import ContactForm from '../../components/ContactForm/ContactForm';
 import Footer from '../../sections/Footer/Footer';

 const Contactus = () => {
  useEffect(() => {
   window.scrollTo(0, 0); // Scrolls to the top of the page

   // SEO Optimization - Set Page Title
   document.title = "Contact Us | DantSri Dental Care";
   document.querySelector('meta[name="description"]').setAttribute(
    'content',
    'Have questions or need to book an appointment? Reach out to our friendly team for assistance.'
   );
  }, []);

  return (
   <>
    <Navbar />

    {/* Contact Section */}
    <section className='section-bg section-common contact-section' aria-label="Contact Section">
     <SectionTitle 
      title="Contact Us"
      description="Have questions or need to book an appointment? Reach out to us, and our friendly team will be happy to assist you."
     />
    </section>

    {/* Contact Details & Form */}
    <main className="contact-container">
     {/* Contact Form */}
     <section 
      className='contact-form-area' 
      data-aos="fade-up" 
      data-aos-duration="2000" 
      aria-label="Contact Form"
     >
      <ContactForm />
     </section>
    </main>

    <Footer />
   </>
  );
 };

 export default Contactus;

import React, { useState } from 'react';
import './Faq.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Faq = () => {
    const [showMoreDental, setShowMoreDental] = useState(false);
    const [showMoreSkinCare, setShowMoreSkinCare] = useState(false);

    return (
        <section className='faq-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="FAQ" title="Frequently Asked Questions" />

                <div className="accordian-area">
                    {/* Dental Health Section */}
                    <h3>Dental Health</h3>
                    <div className="accordion" id="accordionDental">
                        {[
                            { id: 1, question: "What are the common dental problems?", answer: "Common dental problems include cavities, gum disease, tooth sensitivity, and bad breath. Regular dental check-ups can help in early detection and treatment." },
                            { id: 2, question: "How can I prevent cavities?", answer: "To prevent cavities, brush your teeth twice a day with fluoride toothpaste, floss daily, limit sugary snacks, and visit your dentist regularly for check-ups and cleanings." },
                            { id: 3, question: "What are the benefits of regular dental check-ups?", answer: "Regular dental check-ups help in detecting oral health issues early, maintaining oral hygiene, preventing tooth decay, and ensuring overall dental health." },
                        ].map((faq) => (
                            <div className="accordion-item" key={faq.id}>
                                <h2 className="accordion-header" id={`headingDental${faq.id}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapseDental${faq.id}`}
                                        aria-expanded="false"
                                        aria-controls={`collapseDental${faq.id}`}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div id={`collapseDental${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`headingDental${faq.id}`} data-bs-parent="#accordionDental">
                                    <div className="accordion-body">{faq.answer}</div>
                                </div>
                            </div>
                        ))}

                        {showMoreDental && (
                            [
                                { id: 4, question: "What is a root canal, and when is it needed?", answer: "A root canal is a treatment to repair and save a tooth that is badly decayed or infected." },
                                { id: 5, question: "How can I whiten my teeth?", answer: "Teeth whitening can be achieved through professional treatments or home kits. Consult your dentist for the best option." },
                                { id: 6, question: "What are the options for replacing missing teeth?", answer: "Options include dental implants, bridges, and dentures. Your dentist can help you choose the best option." },
                                { id: 7, question: "How can I maintain healthy gums?", answer: "Brush and floss daily, avoid tobacco, eat a balanced diet, and visit your dentist regularly." },
                            ].map((faq) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header" id={`headingDental${faq.id}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapseDental${faq.id}`}
                                            aria-expanded="false"
                                            aria-controls={`collapseDental${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div id={`collapseDental${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`headingDental${faq.id}`} data-bs-parent="#accordionDental">
                                        <div className="accordion-body">{faq.answer}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Show More/Less Button for Dental */}
                    <div className="text-center mt-3">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: '#583FBC',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                transition: 'all 0.3s ease-in-out',
                            }}
                            onClick={() => setShowMoreDental(!showMoreDental)}
                        >
                            {showMoreDental ? "Show Less" : "Show More"}
                        </button>
                    </div>

                    {/* Skin Care and Aesthetic Treatments Section */}
                    <h3 className="mt-4">Skin Care and Aesthetic Treatments</h3>
                    <div className="accordion" id="accordionSkinCare">
                        {[
                            { id: 1, question: "What are common skin care concerns treated at DantSri Dental Care and Facial Aesthetic Centre?", answer: "Common skin care concerns include acne, hyperpigmentation, wrinkles, and uneven skin tone. We offer personalized treatment plans to address these issues." },
                            { id: 2, question: "What is facial aesthetic treatment?", answer: "Facial aesthetic treatment refers to non-surgical procedures like Botox, fillers, and chemical peels that enhance facial features and reduce signs of aging." },
                            { id: 3, question: "How can I reduce wrinkles and fine lines?", answer: "Wrinkles and fine lines can be reduced through treatments like Botox, dermal fillers, laser therapy, and chemical peels. A consultation with our specialists can help determine the best approach for you." },
                        ].map((faq) => (
                            <div className="accordion-item" key={faq.id}>
                                <h2 className="accordion-header" id={`headingSkinCare${faq.id}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapseSkinCare${faq.id}`}
                                        aria-expanded="false"
                                        aria-controls={`collapseSkinCare${faq.id}`}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div id={`collapseSkinCare${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`headingSkinCare${faq.id}`} data-bs-parent="#accordionSkinCare">
                                    <div className="accordion-body">{faq.answer}</div>
                                </div>
                            </div>
                        ))}

                        {showMoreSkinCare && (
                            [
                                { id: 4, question: "What should I expect during a skin care consultation?", answer: "Yes, when performed by a professional, chemical peels are safe and effective for skin rejuvenation." },
                                { id: 5, question: "How often should I get Facial treatments?", answer: "The frequency of facial treatments depends on your skin type and concerns. Generally, getting a facial every 4-6 weeks is recommended to maintain healthy skin." },
                                { id: 6, question: "Are there any side effects of facial aesthetic treatments?", answer: "Side effects of facial aesthetic treatments are generally minimal and may include temporary redness, swelling, or bruising. Our specialists ensure that all procedures are safe and suited to your needs." }, 
                                { id: 7, question: "Can I combine dental and facial aesthetic treatments?", answer: "Yes, at DantSri Dental Care and Facial Aesthetic Centre, we offer combined treatment plans that address both dental health and facial aesthetics for a comprehensive approach to your well-being." }
                            ].map((faq) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header" id={`headingSkinCare${faq.id}`}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapseSkinCare${faq.id}`}
                                            aria-expanded="false"
                                            aria-controls={`collapseSkinCare${faq.id}`}
                                        >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div id={`collapseSkinCare${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`headingSkinCare${faq.id}`} data-bs-parent="#accordionSkinCare">
                                        <div className="accordion-body">{faq.answer}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Show More/Less Button for Skin Care */}
                    <div className="text-center mt-3">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: '#583FBC',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                transition: 'all 0.3s ease-in-out',
                            }}
                            onClick={() => setShowMoreSkinCare(!showMoreSkinCare)}
                        >
                            {showMoreSkinCare ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;

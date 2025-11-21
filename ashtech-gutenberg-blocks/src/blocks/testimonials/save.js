import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const backgroundImageUrl = attributes.backgroundImageUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/landing/testimonial-bg.jpg';
    
    return (
        <section className="landing-testimonials">
            <div className="landing-testimonials__container">
                <div className="landing-testimonials__header">
                    <RichText.Content
                        tagName="div"
                        className="landing-testimonials__label animate-text"
                        value={attributes.label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-testimonials__title animate-text"
                        value={attributes.title}
                    />
                </div>
                <div className="landing-testimonials__slider-wrapper">
                    <div className="landing-testimonials__slider">
                        {attributes.testimonials.map((testimonial, index) => (
                            <div key={index} className="landing-testimonials__slide">
                                <div className="landing-testimonials__content animate-text-rtl">
                                    <div className="landing-testimonials__image">
                                        <img src={backgroundImageUrl} alt="Testimonials Background" />
                                    </div>
                                    <div className="landing-testimonials__card">
                                        <div className="landing-testimonials__card-content">
                                            <div className="landing-testimonials__stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="landing-testimonials__star" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                        <path d="M13 2.5L15.7 9.5L23 10.5L18 15.5L19 23L13 19.5L7 23L8 15.5L3 10.5L10.3 9.5L13 2.5Z" fill="#720C10"/>
                                                    </svg>
                                                ))}
                                            </div>
                                            <div className="landing-testimonials__text-content">
                                                <p className="landing-testimonials__quote">"{testimonial.quote}"</p>
                                                <div className="landing-testimonials__author">
                                                    <div className="landing-testimonials__author-name">
                                                        <span>{testimonial.name}</span>
                                                    </div>
                                                    <span className="landing-testimonials__author-role">{testimonial.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="landing-testimonials__navigation">
                        <button className="landing-testimonials__nav-btn landing-testimonials__nav-btn--prev">
                            <svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5564 0.976862C13.5564 0.976862 4.23775 10.2955 2.37401 12.1592C0.51027 14.023 0.510268 17.7505 2.37401 19.6142C4.23772 21.4779 13.5564 30.7966 13.5564 30.7966" stroke="#0C0D0D" strokeWidth="1.95238" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="landing-testimonials__nav-btn landing-testimonials__nav-btn--next">
                            <svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.976202 0.976862C0.976202 0.976862 10.2948 10.2955 12.1586 12.1592C14.0223 14.023 14.0223 17.7505 12.1586 19.6142C10.2949 21.4779 0.976204 30.7966 0.976204 30.7966" stroke="#0C0D0D" strokeWidth="1.95238" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


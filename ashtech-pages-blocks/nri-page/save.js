import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewDescription } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero nribg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                    <div className="project-hero__subtitle">
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-main" 
                            value={heroSubtitle} 
                        />
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="nri-overview">
                <div className="project-about__decoration"></div>
                <div className="nri-overview__container">
                    <div className="nri-overview__left">
                        <div className="nri-overview__header">
                            <span className="nri-overview__label animate-text">Overview</span>
                            <RichText.Content 
                                tagName="h2" 
                                className="nri-overview__title animate-text" 
                                value={overviewTitle} 
                            />
                        </div>
                    </div>
                    <div className="nri-overview__right">
                        <RichText.Content 
                            tagName="p" 
                            className="nri-overview__description animate-text" 
                            value={overviewDescription} 
                        />
                        <div className="nri-overview__button">
                            <button className="btn btn--primary">
                                <span>Book a Virtual Tour</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Components Section */}
            <section className="nri-architecture">
                <div className="nri-architecture__background"></div>
                <div className="nri-architecture__overlay"></div>
                <div className="nri-architecture__container">
                    <div className="nri-architecture__header">
                        <span className="nri-architecture__label animate-text">Why Invest in India's Greater Noida</span>
                        <h2 className="nri-architecture__title animate-text">Smartest Investment Opportunity<br />in Fastest-Growing Urban Corridor</h2>
                        <p className="nri-architecture__description animate-text">
                            Greater Noida has emerged as one of India's most promising investment corridors, attracting <br /> professionals, global enterprises, and infrastructure growth on an unprecedented scale.
                        </p>
                    </div>
                    <div className="nri-architecture__features">
                        <div className="nri-architecture__feature-row">
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">Strong rental demand from corporate professionals and new-age entrepreneurs.</p>
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">Robust economic growth is supported by India's steady GDP expansion.</p>
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">Investor-friendly reforms such as RERA and FEMA ensure transparency and compliance.</p>
                            </div>
                        </div>
                        <div className="nri-architecture__feature-row">
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">Exceptional connectivity via the Metro network, the upcoming Noida International (Jewar) Airport, and the FNG Expressway.</p>
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">Rapidly evolving IT, industrial, and business hubs along the Noida–Yamuna Expressway belt.</p>
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon">
                                    <img src="assets/images/nri/tick.svg" alt="" />
                                </div>
                                <p className="nri-architecture__feature-text">World-class schools, universities, hospitals and malls, enhancing the quality of life and tenant appeal.</p>
                            </div>
                        </div>
                    </div>
                    <p className="nri-architecture__footer-text animate-text">
                        Whether you're seeking consistent ROI or long-term appreciation, Greater Noida stands out as a secure, high-growth investment destination.
                    </p>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="nri-why-choose">
                <div className="nri-why-choose__container">
                    <div className="nri-why-choose__header">
                        <div className="nri-why-choose__header-left">
                            <span className="nri-why-choose__label animate-text">Why Choose Ashtech Presidential Towers</span>
                            <h2 className="nri-why-choose__title animate-text">High On ROI<br />Higher In Demand</h2>
                        </div>
                        <div className="nri-why-choose__header-right">
                            <p className="nri-why-choose__description animate-text">
                                Crafted to perfection across 5.6 acres with 80% open greens, Ashtech Presidential Towers redefines urban luxury with a rare balance of architecture, nature and technology.
                            </p>
                            <button className="btn btn--primary downloadCta">
                                <span>Download Brochure</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="nri-why-choose__items">
                        <div className="nri-why-choose__item nri-why-choose__item--first animate-text">
                            <span className="nri-why-choose__item-number">01</span>
                            <div className="nri-why-choose__item-content">
                                <p className="nri-why-choose__item-text">Exclusive range of 3–4 BHK residences and duplexes</p>
                            </div>
                        </div>
                        <div className="nri-why-choose__item nri-why-choose__item--others animate-text">
                            <span className="nri-why-choose__item-number">02</span>
                            <div className="nri-why-choose__item-content">
                                <p className="nri-why-choose__item-text">3 levels of clubhouse and other amenities area spanning across 70000 sq ft.</p>
                            </div>
                        </div>
                        <div className="nri-why-choose__item nri-why-choose__item--others animate-text">
                            <span className="nri-why-choose__item-number">03</span>
                            <div className="nri-why-choose__item-content">
                                <p className="nri-why-choose__item-text">Smart home features that complement a contemporary lifestyle.</p>
                            </div>
                        </div>
                        <div className="nri-why-choose__item nri-why-choose__item--others animate-text">
                            <span className="nri-why-choose__item-number">04</span>
                            <div className="nri-why-choose__item-content">
                                <p className="nri-why-choose__item-text">TQ-Certified construction quality backed by Tata Group validation.</p>
                            </div>
                        </div>
                        <div className="nri-why-choose__item nri-why-choose__item--others animate-text">
                            <span className="nri-why-choose__item-number">05</span>
                            <div className="nri-why-choose__item-content">
                                <p className="nri-why-choose__item-text">A 30-year Ashtech legacy, powered by nine business verticals and a 1,600+ strong team known for engineering excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Benefits Section */}
            <section className="nri-benefits">
                <div className="nri-benefits__container">
                    <div className="nri-benefits__image">
                        <img src="assets/images/nri/nri-benefits.jpg" alt="Investment Benefits" />
                    </div>
                    <div className="nri-benefits__content">
                        <div className="nri-benefits__header">
                            <div className="nri-benefits__header-inner">
                                <span className="nri-benefits__label animate-text">Investment Benefits for NRIs</span>
                                <h2 className="nri-benefits__title animate-text">Specially Curated Offer<br />Just For 'You'!</h2>
                            </div>
                            <p className="nri-benefits__description animate-text">For NRIs seeking a rewarding and reliable investment, Ashtech Presidential Towers offers unmatched value:</p>
                        </div>
                        <div className="nri-benefits__grid">
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--first">
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-1.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">High ROI potential and rental yield driven by rapid urban expansion.</p>
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-2.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Regular property updates and performance reports for investors abroad.</p>
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-3.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Strong resale opportunities supported by infrastructure growth.</p>
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-4.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Attractive tax benefits are available for NRI investors.</p>
                                </div>
                            </div>
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--second">
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-5.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Hassle-free repatriation support under FEMA guidelines.</p>
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-6.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Home loan partnerships with HDFC, ICICI, Axis, and SBI NRI Services.</p>
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon">
                                        <img src="assets/images/nri/nri-benefit-7.svg" alt="Icon" />
                                    </div>
                                    <p className="nri-benefits__grid-text">Prime Greater Noida West location, strategically<br />connected to Delhi, Noida,<br />and Gurgaon.</p>
                                </div>
                            </div>
                        </div>
                        <div className="nri-benefits__footer">
                            <p className="nri-benefits__footer-text animate-text">Your investment here is more than a home; it's a long-term growth asset in one of India's most dynamic real estate zones.</p>
                            <button className="btn btn--primary downloadCta">
                                <span>Schedule a Call Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director Message Section */}
            <section className="nri-director">
                <div className="nri-director__background"></div>
                <div className="nri-director__container">
                    <div className="nri-director__content">
                        <div className="nri-director__header">
                            <div className="nri-director__header-inner">
                                <span className="nri-director__label animate-text">NRI Support & Concierge Services</span>
                                <div className="nri-director__title animate-text">
                                    <p className="nri-director__title-line">At Your Service Always,</p>
                                    <p className="nri-director__title-line">Because Your Time Is Precious</p>
                                </div>
                            </div>
                            <p className="nri-director__description animate-text">
                                Owning a home in India should be as effortless as living abroad. That's why we've designed an end-to-end support ecosystem for our global residents:
                            </p>
                        </div>
                        <p className="nri-director__footer-text animate-text">
                            We make your investment journey transparent, secure, and globally<br /> accessible.
                        </p>
                        <div className="nri-director__services">
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon">
                                    <img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" />
                                </div>
                                <p className="nri-director__service-text">Virtual tours and personalised consultations from anywhere in the world.</p>
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon">
                                    <img src="assets/images/landing/icon-support.svg" alt="Support" />
                                </div>
                                <p className="nri-director__service-text">Dedicated NRI relationship managers to guide you through every step.</p>
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon">
                                    <img src="assets/images/landing/icon-residences.svg" alt="Residences" />
                                </div>
                                <p className="nri-director__service-text">Complete digital documentation and registration for remote completion.</p>
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon">
                                    <img src="assets/images/landing/icon-documentation.svg" alt="Documentation" />
                                </div>
                                <p className="nri-director__service-text">Property management, leasing, and resale coordination via verified partners.</p>
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon">
                                    <img src="assets/images/landing/icon-documentation.svg" alt="Updates" />
                                </div>
                                <p className="nri-director__service-text">Regular updates on construction, possession, and performance reports.</p>
                            </div>
                        </div>
                    </div>
                    <div className="nri-director__image">
                        <img src="assets/images/nri/nri-director.png" alt="Director" />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="nri-testimonials">
                <div className="nri-testimonials__decoration"></div>
                <div className="nri-testimonials__container">
                    <div className="nri-testimonials__header">
                        <span className="nri-testimonials__label animate-text">Global Homeowners</span>
                        <h2 className="nri-testimonials__title animate-text">Stories of Confidence, Trust, and Commitment<br />from Our Global Residents</h2>
                    </div>
                    <div className="nri-testimonials__cards">
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote">
                                    <img src="assets/images/nri/nri-quote.svg" alt="Quote" />
                                </div>
                                <p className="nri-testimonials__card-text">
                                    "I booked my residence at Ashtech Presidential Towers from Dubai without a single site visit. The process was completely digital, and the team kept me updated throughout."
                                </p>
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar">
                                        <img src="assets/images/nri/nri-avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="nri-testimonials__card-info">
                                        <p className="nri-testimonials__card-name">Rohan S.,<br />Dubai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote">
                                    <img src="assets/images/nri/nri-quote.svg" alt="Quote" />
                                </div>
                                <p className="nri-testimonials__card-text">
                                    "The combination of quality, trust, and location made this an easy decision. Ashtech's NRI team handled everything seamlessly."
                                </p>
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar">
                                        <img src="assets/images/nri/nri-avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="nri-testimonials__card-info">
                                        <p className="nri-testimonials__card-name">Ananya P.,<br />Singapore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote">
                                    <img src="assets/images/nri/nri-quote.svg" alt="Quote" />
                                </div>
                                <p className="nri-testimonials__card-text">
                                    "It's reassuring to invest with a developer that understands both luxury and long-term value."
                                </p>
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar">
                                        <img src="assets/images/nri/nri-avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="nri-testimonials__card-info">
                                        <p className="nri-testimonials__card-name">Vivek M.,<br />London</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="nri-testimonials__footer-text animate-text">
                        Each story is a testament to the trust our global community places in Ashtech.
                    </p>
                    <div className="nri-testimonials__dots"></div>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="nri-cta">
                <div className="project-about__decoration"></div>
                <div className="nri-cta__container">
                    <div className="nri-cta__left">
                        <h2 className="nri-cta__title animate-text">Own an Iconic Address That<br />Mirrors Your Global Vision</h2>
                    </div>
                    <div className="nri-cta__right">
                        <p className="nri-cta__description animate-text">
                            At Ashtech Presidential Towers, every residence is a statement of legacy,<br /> One that carries the confidence of engineering precision and the<br /> comfort of world-class living.
                        </p>
                        <button className="btn btn--primary downloadCta">
                            <span>Connect with Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

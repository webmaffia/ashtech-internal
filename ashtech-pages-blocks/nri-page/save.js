import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { 
        heroTitle, heroSubtitle,
        overviewLabel, overviewTitle, overviewDescription, overviewButtonText,
        architectureLabel, architectureTitle, architectureDescription, architectureFeatures, architectureFooter,
        whyChooseLabel, whyChooseTitle, whyChooseDescription, whyChooseButtonText, whyChooseItems,
        benefitsImage, benefitsLabel, benefitsTitle, benefitsDescription, benefitsItems, benefitsFooter, benefitsButtonText,
        directorLabel, directorTitle1, directorTitle2, directorDescription, directorFooter, directorServices, directorImage,
        testimonialsLabel, testimonialsTitle, testimonials
    } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

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
                            <RichText.Content tagName="span" className="nri-overview__label animate-text" value={overviewLabel} />
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
                                <RichText.Content tagName="span" value={overviewButtonText} />
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
                        <RichText.Content tagName="span" className="nri-architecture__label animate-text" value={architectureLabel} />
                        <RichText.Content tagName="h2" className="nri-architecture__title animate-text" value={architectureTitle} />
                        <RichText.Content tagName="p" className="nri-architecture__description animate-text" value={architectureDescription} />
                    </div>
                    <div className="nri-architecture__features">
                        <div className="nri-architecture__feature-row">
                            {(architectureFeatures || []).slice(0, 3).map((feature, index) => (
                                <div key={index} className="nri-architecture__feature-item animate-text">
                                    <div className="nri-architecture__feature-icon">
                                        <img src={`${assetsUrl}images/nri/tick.svg`} alt="" />
                                    </div>
                                    <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature} />
                                </div>
                            ))}
                        </div>
                        <div className="nri-architecture__feature-row">
                            {(architectureFeatures || []).slice(3, 6).map((feature, index) => (
                                <div key={index + 3} className="nri-architecture__feature-item animate-text">
                                    <div className="nri-architecture__feature-icon">
                                        <img src={`${assetsUrl}images/nri/tick.svg`} alt="" />
                                    </div>
                                    <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <RichText.Content tagName="p" className="nri-architecture__footer-text animate-text" value={architectureFooter} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="nri-why-choose">
                <div className="nri-why-choose__container">
                    <div className="nri-why-choose__header">
                        <div className="nri-why-choose__header-left">
                            <RichText.Content tagName="span" className="nri-why-choose__label animate-text" value={whyChooseLabel} />
                            <RichText.Content tagName="h2" className="nri-why-choose__title animate-text" value={whyChooseTitle} />
                        </div>
                        <div className="nri-why-choose__header-right">
                            <RichText.Content tagName="p" className="nri-why-choose__description animate-text" value={whyChooseDescription} />
                            <button className="btn btn--primary downloadCta">
                                <RichText.Content tagName="span" value={whyChooseButtonText} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="nri-why-choose__items">
                        {(whyChooseItems || []).map((item, index) => (
                            <div key={index} className={`nri-why-choose__item ${index === 0 ? 'nri-why-choose__item--first' : 'nri-why-choose__item--others'} animate-text`}>
                                <span className="nri-why-choose__item-number">{String(index + 1).padStart(2, '0')}</span>
                                <div className="nri-why-choose__item-content">
                                    <RichText.Content tagName="p" className="nri-why-choose__item-text" value={item} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Benefits Section */}
            <section className="nri-benefits">
                <div className="nri-benefits__container">
                    <div className="nri-benefits__image">
                        <img src={benefitsImage || `${assetsUrl}images/nri/nri-benefits.jpg`} alt="Investment Benefits" />
                    </div>
                    <div className="nri-benefits__content">
                        <div className="nri-benefits__header">
                            <div className="nri-benefits__header-inner">
                                <RichText.Content tagName="span" className="nri-benefits__label animate-text" value={benefitsLabel} />
                                <RichText.Content tagName="h2" className="nri-benefits__title animate-text" value={benefitsTitle} />
                            </div>
                            <RichText.Content tagName="p" className="nri-benefits__description animate-text" value={benefitsDescription} />
                        </div>
                        <div className="nri-benefits__grid">
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--first">
                                {(benefitsItems || []).slice(0, 4).map((item, index) => {
                                    const icons = ['nri-benefit-1.svg', 'nri-benefit-2.svg', 'nri-benefit-3.svg', 'nri-benefit-4.svg'];
                                    return (
                                        <div key={index} className="nri-benefits__grid-item animate-text">
                                            <div className="nri-benefits__grid-icon">
                                                <img src={`${assetsUrl}images/nri/${icons[index] || 'nri-benefit-1.svg'}`} alt="Icon" />
                                            </div>
                                            <RichText.Content tagName="p" className="nri-benefits__grid-text" value={item} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--second">
                                {(benefitsItems || []).slice(4, 7).map((item, index) => {
                                    const icons = ['nri-benefit-5.svg', 'nri-benefit-6.svg', 'nri-benefit-7.svg'];
                                    return (
                                        <div key={index + 4} className="nri-benefits__grid-item animate-text">
                                            <div className="nri-benefits__grid-icon">
                                                <img src={`${assetsUrl}images/nri/${icons[index] || 'nri-benefit-5.svg'}`} alt="Icon" />
                                            </div>
                                            <RichText.Content tagName="p" className="nri-benefits__grid-text" value={item} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="nri-benefits__footer">
                            <RichText.Content tagName="p" className="nri-benefits__footer-text animate-text" value={benefitsFooter} />
                            <button className="btn btn--primary downloadCta">
                                <RichText.Content tagName="span" value={benefitsButtonText} />
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
                                <RichText.Content tagName="span" className="nri-director__label animate-text" value={directorLabel} />
                                <div className="nri-director__title animate-text">
                                    <RichText.Content tagName="p" className="nri-director__title-line" value={directorTitle1} />
                                    <RichText.Content tagName="p" className="nri-director__title-line" value={directorTitle2} />
                                </div>
                            </div>
                            <RichText.Content tagName="p" className="nri-director__description animate-text" value={directorDescription} />
                        </div>
                        <RichText.Content tagName="p" className="nri-director__footer-text animate-text" value={directorFooter} />
                        <div className="nri-director__services">
                            {(directorServices || []).map((service, index) => {
                                const icons = ['icon-virtual-tour.svg', 'icon-support.svg', 'icon-residences.svg', 'icon-documentation.svg', 'icon-documentation.svg'];
                                return (
                                    <div key={index} className="nri-director__service-item animate-text">
                                        <div className="nri-director__service-icon">
                                            <img src={`${assetsUrl}images/landing/${icons[index] || 'icon-virtual-tour.svg'}`} alt="Service" />
                                        </div>
                                        <RichText.Content tagName="p" className="nri-director__service-text" value={service} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="nri-director__image">
                        <img src={directorImage || `${assetsUrl}images/nri/nri-director.png`} alt="Director" />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="nri-testimonials">
                <div className="nri-testimonials__decoration"></div>
                <div className="nri-testimonials__container">
                    <div className="nri-testimonials__header">
                        <RichText.Content tagName="span" className="nri-testimonials__label animate-text" value={testimonialsLabel} />
                        <RichText.Content tagName="h2" className="nri-testimonials__title animate-text" value={testimonialsTitle} />
                    </div>
                    <div className="nri-testimonials__cards">
                        {(testimonials || []).map((testimonial, index) => (
                            <div key={index} className="tm-item">
                                <div className="nri-testimonials__card animate-text">
                                    <div className="nri-testimonials__card-quote">
                                        <img src={`${assetsUrl}images/nri/nri-quote.svg`} alt="Quote" />
                                    </div>
                                    <RichText.Content tagName="p" className="nri-testimonials__card-text" value={testimonial.text} />
                                    <div className="nri-testimonials__card-author">
                                        <div className="nri-testimonials__card-avatar">
                                            <img src={`${assetsUrl}images/nri/nri-avatar.png`} alt="Avatar" />
                                        </div>
                                        <div className="nri-testimonials__card-info">
                                            <RichText.Content tagName="p" className="nri-testimonials__card-name" value={testimonial.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

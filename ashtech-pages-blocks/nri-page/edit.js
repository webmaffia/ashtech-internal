import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
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
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero nribg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('NRI Corner', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Your trusted partner...', 'ashtech-pages-blocks')}
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
                            <RichText
                                tagName="span"
                                className="nri-overview__label animate-text"
                                value={overviewLabel}
                                onChange={(value) => setAttributes({ overviewLabel: value })}
                                placeholder={__('Overview', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="h2"
                                className="nri-overview__title animate-text"
                                value={overviewTitle}
                                onChange={(value) => setAttributes({ overviewTitle: value })}
                                placeholder={__('Overview Title', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                    <div className="nri-overview__right">
                        <RichText
                            tagName="p"
                            className="nri-overview__description animate-text"
                            value={overviewDescription}
                            onChange={(value) => setAttributes({ overviewDescription: value })}
                            placeholder={__('Overview description...', 'ashtech-pages-blocks')}
                        />
                        <div className="nri-overview__button">
                            <button className="btn btn--primary">
                                <RichText
                                    tagName="span"
                                    value={overviewButtonText}
                                    onChange={(value) => setAttributes({ overviewButtonText: value })}
                                    placeholder={__('Book a Virtual Tour', 'ashtech-pages-blocks')}
                                />
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
                        <RichText
                            tagName="span"
                            className="nri-architecture__label animate-text"
                            value={architectureLabel}
                            onChange={(value) => setAttributes({ architectureLabel: value })}
                            placeholder={__('Why Invest in India\'s Greater Noida', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="nri-architecture__title animate-text"
                            value={architectureTitle}
                            onChange={(value) => setAttributes({ architectureTitle: value })}
                            placeholder={__('Smartest Investment Opportunity...', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="nri-architecture__description animate-text"
                            value={architectureDescription}
                            onChange={(value) => setAttributes({ architectureDescription: value })}
                            placeholder={__('Architecture description...', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="nri-architecture__features">
                        <div className="nri-architecture__feature-row">
                            {(architectureFeatures || []).slice(0, 3).map((feature, index) => (
                                <div key={index} className="nri-architecture__feature-item animate-text">
                                    <div className="nri-architecture__feature-icon">
                                        <img src={`${assetsUrl}images/nri/tick.svg`} alt="" />
                                    </div>
                                    <RichText
                                        tagName="p"
                                        className="nri-architecture__feature-text"
                                        value={feature}
                                        onChange={(value) => {
                                            const newFeatures = [...(architectureFeatures || [])];
                                            newFeatures[index] = value;
                                            setAttributes({ architectureFeatures: newFeatures });
                                        }}
                                        placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="nri-architecture__feature-row">
                            {(architectureFeatures || []).slice(3, 6).map((feature, index) => (
                                <div key={index + 3} className="nri-architecture__feature-item animate-text">
                                    <div className="nri-architecture__feature-icon">
                                        <img src={`${assetsUrl}images/nri/tick.svg`} alt="" />
                                    </div>
                                    <RichText
                                        tagName="p"
                                        className="nri-architecture__feature-text"
                                        value={feature}
                                        onChange={(value) => {
                                            const newFeatures = [...(architectureFeatures || [])];
                                            newFeatures[index + 3] = value;
                                            setAttributes({ architectureFeatures: newFeatures });
                                        }}
                                        placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <RichText
                        tagName="p"
                        className="nri-architecture__footer-text animate-text"
                        value={architectureFooter}
                        onChange={(value) => setAttributes({ architectureFooter: value })}
                        placeholder={__('Architecture footer text...', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="nri-why-choose">
                <div className="nri-why-choose__container">
                    <div className="nri-why-choose__header">
                        <div className="nri-why-choose__header-left">
                            <RichText
                                tagName="span"
                                className="nri-why-choose__label animate-text"
                                value={whyChooseLabel}
                                onChange={(value) => setAttributes({ whyChooseLabel: value })}
                                placeholder={__('Why Choose Ashtech Presidential Towers', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="h2"
                                className="nri-why-choose__title animate-text"
                                value={whyChooseTitle}
                                onChange={(value) => setAttributes({ whyChooseTitle: value })}
                                placeholder={__('High On ROI...', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <div className="nri-why-choose__header-right">
                            <RichText
                                tagName="p"
                                className="nri-why-choose__description animate-text"
                                value={whyChooseDescription}
                                onChange={(value) => setAttributes({ whyChooseDescription: value })}
                                placeholder={__('Why choose description...', 'ashtech-pages-blocks')}
                            />
                            <button className="btn btn--primary downloadCta">
                                <RichText
                                    tagName="span"
                                    value={whyChooseButtonText}
                                    onChange={(value) => setAttributes({ whyChooseButtonText: value })}
                                    placeholder={__('Download Brochure', 'ashtech-pages-blocks')}
                                />
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
                                    <RichText
                                        tagName="p"
                                        className="nri-why-choose__item-text"
                                        value={item}
                                        onChange={(value) => {
                                            const newItems = [...(whyChooseItems || [])];
                                            newItems[index] = value;
                                            setAttributes({ whyChooseItems: newItems });
                                        }}
                                        placeholder={__('Why choose item text...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Benefits Section */}
            <section className="nri-benefits">
                <div className="nri-benefits__container">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ benefitsImage: media.url })}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <div className="nri-benefits__image">
                                    {benefitsImage ? (
                                        <img src={benefitsImage} alt="Investment Benefits" />
                                    ) : (
                                        <img src={`${assetsUrl}images/nri/nri-benefits.jpg`} alt="Investment Benefits" />
                                    )}
                                    <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                        {benefitsImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                    </Button>
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                    <div className="nri-benefits__content">
                        <div className="nri-benefits__header">
                            <div className="nri-benefits__header-inner">
                                <RichText
                                    tagName="span"
                                    className="nri-benefits__label animate-text"
                                    value={benefitsLabel}
                                    onChange={(value) => setAttributes({ benefitsLabel: value })}
                                    placeholder={__('Investment Benefits for NRIs', 'ashtech-pages-blocks')}
                                />
                                <RichText
                                    tagName="h2"
                                    className="nri-benefits__title animate-text"
                                    value={benefitsTitle}
                                    onChange={(value) => setAttributes({ benefitsTitle: value })}
                                    placeholder={__('Specially Curated Offer...', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <RichText
                                tagName="p"
                                className="nri-benefits__description animate-text"
                                value={benefitsDescription}
                                onChange={(value) => setAttributes({ benefitsDescription: value })}
                                placeholder={__('Benefits description...', 'ashtech-pages-blocks')}
                            />
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
                                            <RichText
                                                tagName="p"
                                                className="nri-benefits__grid-text"
                                                value={item}
                                                onChange={(value) => {
                                                    const newItems = [...(benefitsItems || [])];
                                                    newItems[index] = value;
                                                    setAttributes({ benefitsItems: newItems });
                                                }}
                                                placeholder={__('Benefits item text...', 'ashtech-pages-blocks')}
                                            />
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
                                            <RichText
                                                tagName="p"
                                                className="nri-benefits__grid-text"
                                                value={item}
                                                onChange={(value) => {
                                                    const newItems = [...(benefitsItems || [])];
                                                    newItems[index + 4] = value;
                                                    setAttributes({ benefitsItems: newItems });
                                                }}
                                                placeholder={__('Benefits item text...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="nri-benefits__footer">
                            <RichText
                                tagName="p"
                                className="nri-benefits__footer-text animate-text"
                                value={benefitsFooter}
                                onChange={(value) => setAttributes({ benefitsFooter: value })}
                                placeholder={__('Benefits footer text...', 'ashtech-pages-blocks')}
                            />
                            <button className="btn btn--primary downloadCta">
                                <RichText
                                    tagName="span"
                                    value={benefitsButtonText}
                                    onChange={(value) => setAttributes({ benefitsButtonText: value })}
                                    placeholder={__('Schedule a Call Now', 'ashtech-pages-blocks')}
                                />
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
                                <RichText
                                    tagName="span"
                                    className="nri-director__label animate-text"
                                    value={directorLabel}
                                    onChange={(value) => setAttributes({ directorLabel: value })}
                                    placeholder={__('NRI Support & Concierge Services', 'ashtech-pages-blocks')}
                                />
                                <div className="nri-director__title animate-text">
                                    <RichText
                                        tagName="p"
                                        className="nri-director__title-line"
                                        value={directorTitle1}
                                        onChange={(value) => setAttributes({ directorTitle1: value })}
                                        placeholder={__('At Your Service Always,', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="nri-director__title-line"
                                        value={directorTitle2}
                                        onChange={(value) => setAttributes({ directorTitle2: value })}
                                        placeholder={__('Because Your Time Is Precious', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                            <RichText
                                tagName="p"
                                className="nri-director__description animate-text"
                                value={directorDescription}
                                onChange={(value) => setAttributes({ directorDescription: value })}
                                placeholder={__('Director description...', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <RichText
                            tagName="p"
                            className="nri-director__footer-text animate-text"
                            value={directorFooter}
                            onChange={(value) => setAttributes({ directorFooter: value })}
                            placeholder={__('Director footer text...', 'ashtech-pages-blocks')}
                        />
                        <div className="nri-director__services">
                            {(directorServices || []).map((service, index) => {
                                const icons = ['icon-virtual-tour.svg', 'icon-support.svg', 'icon-residences.svg', 'icon-documentation.svg', 'icon-documentation.svg'];
                                return (
                                    <div key={index} className="nri-director__service-item animate-text">
                                        <div className="nri-director__service-icon">
                                            <img src={`${assetsUrl}images/landing/${icons[index] || 'icon-virtual-tour.svg'}`} alt="Service" />
                                        </div>
                                        <RichText
                                            tagName="p"
                                            className="nri-director__service-text"
                                            value={service}
                                            onChange={(value) => {
                                                const newServices = [...(directorServices || [])];
                                                newServices[index] = value;
                                                setAttributes({ directorServices: newServices });
                                            }}
                                            placeholder={__('Service text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ directorImage: media.url })}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                <div className="nri-director__image">
                                    {directorImage ? (
                                        <img src={directorImage} alt="Director" />
                                    ) : (
                                        <img src={`${assetsUrl}images/nri/nri-director.png`} alt="Director" />
                                    )}
                                    <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                        {directorImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                    </Button>
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="nri-testimonials">
                <div className="nri-testimonials__decoration"></div>
                <div className="nri-testimonials__container">
                    <div className="nri-testimonials__header">
                        <RichText
                            tagName="span"
                            className="nri-testimonials__label animate-text"
                            value={testimonialsLabel}
                            onChange={(value) => setAttributes({ testimonialsLabel: value })}
                            placeholder={__('Global Homeowners', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="nri-testimonials__title animate-text"
                            value={testimonialsTitle}
                            onChange={(value) => setAttributes({ testimonialsTitle: value })}
                            placeholder={__('Stories of Confidence...', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="nri-testimonials__cards">
                        {(testimonials || []).map((testimonial, index) => (
                            <div key={index} className="tm-item">
                                <div className="nri-testimonials__card animate-text">
                                    <div className="nri-testimonials__card-quote">
                                        <img src={`${assetsUrl}images/nri/nri-quote.svg`} alt="Quote" />
                                    </div>
                                    <RichText
                                        tagName="p"
                                        className="nri-testimonials__card-text"
                                        value={testimonial.text}
                                        onChange={(value) => {
                                            const newTestimonials = [...(testimonials || [])];
                                            newTestimonials[index].text = value;
                                            setAttributes({ testimonials: newTestimonials });
                                        }}
                                        placeholder={__('Testimonial text...', 'ashtech-pages-blocks')}
                                    />
                                    <div className="nri-testimonials__card-author">
                                        <div className="nri-testimonials__card-avatar">
                                            <img src={`${assetsUrl}images/nri/nri-avatar.png`} alt="Avatar" />
                                        </div>
                                        <div className="nri-testimonials__card-info">
                                            <RichText
                                                tagName="p"
                                                className="nri-testimonials__card-name"
                                                value={testimonial.name}
                                                onChange={(value) => {
                                                    const newTestimonials = [...(testimonials || [])];
                                                    newTestimonials[index].name = value;
                                                    setAttributes({ testimonials: newTestimonials });
                                                }}
                                                placeholder={__('Testimonial name...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            const newTestimonials = [...(testimonials || [])];
                                            newTestimonials.splice(index, 1);
                                            setAttributes({ testimonials: newTestimonials });
                                        }}
                                        isDestructive
                                        style={{ marginTop: '10px' }}
                                    >
                                        {__('Remove', 'ashtech-pages-blocks')}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => {
                            const newTestimonials = [...(testimonials || [])];
                            newTestimonials.push({ text: '', name: '' });
                            setAttributes({ testimonials: newTestimonials });
                        }}
                        isPrimary
                        style={{ marginTop: '20px' }}
                    >
                        {__('Add New Testimonial', 'ashtech-pages-blocks')}
                    </Button>
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

import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { 
        heroTitle, 
        mainContent, 
        overviewLabel,
        overviewTitle,
        overviewImage, 
        valuesLabel,
        valuesTitle,
        values = [],
        projectLabel,
        projectTitle,
        projectDescription,
        buildingImage,
        project1Image, 
        project2Image, 
        nriLabel,
        nriTitle,
        nriDescription,
        nriButtonText,
        nriFeatures = [],
        nriImage, 
        awardsLabel,
        awardsTitle,
        awardsDescription,
        awards = [],
        testimonialBgImage, 
        testimonials = [] 
    } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    // Helper functions for testimonials
    const updateTestimonial = (index, field, value) => {
        const newTestimonials = [...testimonials];
        newTestimonials[index] = { ...newTestimonials[index], [field]: value };
        setAttributes({ testimonials: newTestimonials });
    };

    const addTestimonial = () => {
        setAttributes({
            testimonials: [
                ...testimonials,
                {
                    quote: 'New testimonial quote',
                    authorName: 'Author Name',
                    authorRole: 'Role'
                }
            ]
        });
    };

    const removeTestimonial = (index) => {
        const newTestimonials = testimonials.filter((_, i) => i !== index);
        setAttributes({ testimonials: newTestimonials });
    };

    // Helper functions for values
    const updateValue = (index, field, value) => {
        const newValues = [...values];
        newValues[index] = { ...newValues[index], [field]: value };
        setAttributes({ values: newValues });
    };

    const addValue = () => {
        setAttributes({
            values: [
                ...values,
                {
                    title: 'New Value Title',
                    description: 'New value description'
                }
            ]
        });
    };

    const removeValue = (index) => {
        const newValues = values.filter((_, i) => i !== index);
        setAttributes({ values: newValues });
    };

    // Helper functions for NRI features
    const updateNriFeature = (index, value) => {
        const newFeatures = [...nriFeatures];
        newFeatures[index] = value;
        setAttributes({ nriFeatures: newFeatures });
    };

    const addNriFeature = () => {
        setAttributes({
            nriFeatures: [
                ...nriFeatures,
                'New NRI Feature'
            ]
        });
    };

    const removeNriFeature = (index) => {
        const newFeatures = nriFeatures.filter((_, i) => i !== index);
        setAttributes({ nriFeatures: newFeatures });
    };

    // Helper functions for awards
    const updateAward = (index, value) => {
        const newAwards = [...awards];
        newAwards[index] = value;
        setAttributes({ awards: newAwards });
    };

    const addAward = () => {
        setAttributes({
            awards: [
                ...awards,
                'New Award'
            ]
        });
    };

    const removeAward = (index) => {
        const newAwards = awards.filter((_, i) => i !== index);
        setAttributes({ awards: newAwards });
    };

    return (
        <div {...useBlockProps({
            style: {
                width: '100%',
                maxWidth: '100%',
                marginLeft: 0,
                marginRight: 0
            }
        })}>
            {/* Banner Section */}
            <section className="landing-banner">
                <div className="landing-banner__overlay"></div>
                <div className="landing-banner__content">
                    <RichText
                        tagName="h1"
                        className="landing-banner__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Nature and Architecture in Perfect Sync', 'ashtech-pages-blocks')}
                    />
                    <p className="landing-banner__scroll">(SCROLL)</p>
                </div>

                <div className="landing-banner__svg-placeholder">
                    <p style={{ color: '#fff', textAlign: 'center', padding: '50px' }}>
                        {__('SVG Animation will display on frontend', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <div style={{ 
                width: '100%',
                padding: '40px 20px',
                backgroundColor: '#f4ead7',
                marginBottom: '40px',
                border: '2px solid #720C10',
                borderRadius: '8px',
                position: 'relative'
            }}>
                <div style={{ 
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div className="landing-overview__header" style={{ marginBottom: '20px' }}>
                        <div className="landing-overview__label" style={{ 
                            fontSize: '14px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '10px',
                            color: '#720C10'
                        }}>
                            <RichText
                                tagName="span"
                                value={overviewLabel}
                                onChange={(value) => setAttributes({ overviewLabel: value })}
                                placeholder={__('Overview', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <RichText
                            tagName="h2"
                            className="landing-overview__title"
                            value={overviewTitle}
                            onChange={(value) => setAttributes({ overviewTitle: value })}
                            placeholder={__('Curated for Magnificence', 'ashtech-pages-blocks')}
                            style={{ 
                                fontSize: '36px',
                                fontWeight: 'bold',
                                lineHeight: '1.2',
                                marginBottom: '20px',
                                color: '#0C0D0D'
                            }}
                        />
                    </div>
                    <RichText
                        tagName="p"
                        className="landing-overview__description"
                        value={mainContent}
                        onChange={(value) => setAttributes({ mainContent: value })}
                        placeholder={__('Ashtech Presidential Towers description...', 'ashtech-pages-blocks')}
                        style={{ 
                            fontSize: '16px',
                            lineHeight: '1.6',
                            marginBottom: '30px',
                            color: '#333',
                            maxWidth: '800px'
                        }}
                    />
                    <div className="landing-overview__button" style={{ marginTop: '20px' }}>
                        <button className="btn btn--primary" style={{
                            padding: '12px 24px',
                            backgroundColor: '#fff',
                            color: '#0C0D0D',
                            border: '2px solid #720C10',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: '600'
                        }}>
                            <span>Discover More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <section className="landing-values">
                <div className="landing-values__container">
                    <div className="landing-values__header">
                        <RichText
                            tagName="div"
                            className="landing-values__label animate-text"
                            value={valuesLabel}
                            onChange={(value) => setAttributes({ valuesLabel: value })}
                            placeholder={__('Core Values', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-values__title animate-text-rtl"
                            value={valuesTitle}
                            onChange={(value) => setAttributes({ valuesTitle: value })}
                            placeholder={__('30 Years of Excellence', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="landing-values__graphic">
                        <img src={`${assetsUrl}images/landing/values-graphic.svg`} alt="Core Values" />
                    </div>
                    <div className="landing-values__items">
                        {values.map((value, index) => {
                            const itemClasses = [
                                'landing-values__item',
                                index < 3 ? 'landing-values__item--left' : 'landing-values__item--right',
                                `landing-values__item--${index + 1}`
                            ].join(' ');
                            return (
                                <div key={index} className={itemClasses} data-value={index}>
                                    <RichText
                                        tagName="h3"
                                        className="landing-values__item-title"
                                        value={value.title || ''}
                                        onChange={(valueText) => updateValue(index, 'title', valueText)}
                                        placeholder={__('Value Title', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="landing-values__item-description"
                                        value={value.description || ''}
                                        onChange={(valueText) => updateValue(index, 'description', valueText)}
                                        placeholder={__('Value Description', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Ongoing Projects Section */}
            <section className="landing-projects">
                <div className="landing-projects__background"></div>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(media) => setAttributes({ buildingImage: media.url })}
                        allowedTypes={['image']}
                        value={buildingImage}
                        render={({ open }) => (
                            <div style={{ 
                                position: 'relative', 
                                display: 'inline-block',
                                width: '100%',
                                border: '2px dashed #ccc',
                                padding: '10px',
                                backgroundColor: '#f9f9f9',
                                marginBottom: '20px'
                            }}>
                                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                    <img 
                                        src={buildingImage || `${assetsUrl}images/landing/building.png`} 
                                        alt="Building" 
                                        className="building"
                                        style={{ 
                                            cursor: 'pointer', 
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            maxWidth: '100%'
                                        }}
                                        onClick={open}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 10
                                    }}>
                                        <Button 
                                            onClick={open} 
                                            isPrimary 
                                            style={{ 
                                                padding: '10px 20px',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                backgroundColor: '#0073aa',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {buildingImage ? __('Change Image', 'ashtech-pages-blocks') : __('Upload Building Image', 'ashtech-pages-blocks')}
                                        </Button>
                                    </div>
                                </div>
                                <p style={{ 
                                    textAlign: 'center', 
                                    marginTop: '10px', 
                                    fontSize: '12px', 
                                    color: '#666',
                                    fontStyle: 'italic'
                                }}>
                                    {buildingImage ? __('Click image or button to change', 'ashtech-pages-blocks') : __('Click to upload building image', 'ashtech-pages-blocks')}
                                </p>
                            </div>
                        )}
                    />
                </MediaUploadCheck>
                <div className="landing-projects__content">
                    <div className="landing-projects__header">
                        <RichText
                            tagName="div"
                            className="landing-projects__label animate-text"
                            value={projectLabel}
                            onChange={(value) => setAttributes({ projectLabel: value })}
                            placeholder={__('Ongoing Project', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-projects__title animate-text"
                            value={projectTitle}
                            onChange={(value) => setAttributes({ projectTitle: value })}
                            placeholder={__('An Expression of Refinement', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <RichText
                        tagName="p"
                        className="landing-projects__description animate-text"
                        value={projectDescription}
                        onChange={(value) => setAttributes({ projectDescription: value })}
                        placeholder={__('Project description...', 'ashtech-pages-blocks')}
                    />
                    <div className="landing-projects__buttons">
                        <button className="btn btn--primary">
                            <span>Explore More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="btn btn--secondary">
                            <span>Book a Private Tour</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* NRI Desk Section */}
            <section className="landing-nri">
                <div className="landing-nri__image">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ nriImage: media.url })}
                            allowedTypes={['image']}
                            value={nriImage}
                            render={({ open }) => (
                                <div style={{ 
                                    position: 'relative',
                                    border: '2px dashed #ccc',
                                    padding: '10px',
                                    backgroundColor: '#f9f9f9',
                                    marginBottom: '20px'
                                }}>
                                    <div style={{ position: 'relative', width: '100%' }}>
                                        <img 
                                            src={nriImage || `${assetsUrl}images/landing/nri.png`} 
                                            alt="NRI Desk"
                                            style={{ 
                                                width: '100%', 
                                                cursor: 'pointer',
                                                display: 'block',
                                                maxWidth: '100%',
                                                height: 'auto'
                                            }}
                                            onClick={open}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 10
                                        }}>
                                            <Button 
                                                onClick={open} 
                                                isPrimary 
                                                style={{ 
                                                    padding: '10px 20px',
                                                    fontSize: '14px',
                                                    fontWeight: 'bold',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                    backgroundColor: '#0073aa',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {nriImage ? __('Change NRI Image', 'ashtech-pages-blocks') : __('Upload NRI Image', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    </div>
                                    <p style={{ 
                                        textAlign: 'center', 
                                        marginTop: '10px', 
                                        fontSize: '12px', 
                                        color: '#666',
                                        fontStyle: 'italic'
                                    }}>
                                        {nriImage ? __('Click image or button to change', 'ashtech-pages-blocks') : __('Click to upload NRI image', 'ashtech-pages-blocks')}
                                    </p>
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
                <div className="landing-nri__content">
                    <div className="landing-nri__info">
                        <div className="landing-nri__header">
                            <RichText
                                tagName="div"
                                className="landing-nri__label animate-text"
                                value={nriLabel}
                                onChange={(value) => setAttributes({ nriLabel: value })}
                                placeholder={__('NRI Desk', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="h2"
                                className="landing-nri__title animate-text"
                                value={nriTitle}
                                onChange={(value) => setAttributes({ nriTitle: value })}
                                placeholder={__('Seamless Access to Signature Residences', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <div className="landing-nri__description-container">
                            <RichText
                                tagName="p"
                                className="landing-nri__description animate-text"
                                value={nriDescription}
                                onChange={(value) => setAttributes({ nriDescription: value })}
                                placeholder={__('NRI description...', 'ashtech-pages-blocks')}
                            />
                            <button className="btn btn--primary">
                                <RichText
                                    tagName="span"
                                    value={nriButtonText}
                                    onChange={(value) => setAttributes({ nriButtonText: value })}
                                    placeholder={__('Connect with Our NRI Desk', 'ashtech-pages-blocks')}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="landing-nri__features">
                        {nriFeatures.map((feature, index) => (
                            <div key={index} className="landing-nri__feature">
                                <div className="landing-nri__feature-icon">
                                    <img src={`${assetsUrl}images/landing/icon-virtual-tour.svg`} alt="Feature" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="landing-nri__feature-text animate-text"
                                    value={feature || ''}
                                    onChange={(value) => updateNriFeature(index, value)}
                                    placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="landing-nri__accent"></div>
            </section>

            {/* Awards Section */}
            <section className="landing-awards">
                <div className="landing-awards__container">
                    <div className="landing-awards__header">
                        <RichText
                            tagName="div"
                            className="landing-awards__label animate-text"
                            value={awardsLabel}
                            onChange={(value) => setAttributes({ awardsLabel: value })}
                            placeholder={__('Awards & Recognition', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-awards__title animate-text"
                            value={awardsTitle}
                            onChange={(value) => setAttributes({ awardsTitle: value })}
                            placeholder={__('Honoured for Distinction', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="landing-awards__description animate-text"
                            value={awardsDescription}
                            onChange={(value) => setAttributes({ awardsDescription: value })}
                            placeholder={__('Awards description...', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="landing-awards__grid">
                        {awards.map((award, index) => (
                            <div key={index} className="landing-awards__item">
                                <div className="landing-awards__item-images">
                                    <img src={`${assetsUrl}images/landing/award-laurel-left.svg`} alt="Award" className="landing-awards__laurel landing-awards__laurel--left" />
                                    <img src={`${assetsUrl}images/landing/award-laurel-right.svg`} alt="Award" className="landing-awards__laurel landing-awards__laurel--right" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="landing-awards__item-text animate-text"
                                    value={award || ''}
                                    onChange={(value) => updateAward(index, value)}
                                    placeholder={__('Award name...', 'ashtech-pages-blocks')}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="landing-testimonials">
                <div className="landing-testimonials__container">
                    <div className="landing-testimonials__header">
                        <div className="landing-testimonials__label animate-text">Testimonials</div>
                        <h2 className="landing-testimonials__title animate-text">Trusted by Those Who<br />Value Mastery</h2>
                    </div>
                    <div className="landing-testimonials__slider-wrapper">
                        <div className="landing-testimonials__slider">
                            {testimonials.length === 0 ? (
                                <div className="landing-testimonials__slide">
                                    <div className="landing-testimonials__content animate-text-rtl">
                                        <div className="landing-testimonials__image">
                                            <MediaUploadCheck>
                                                <MediaUpload
                                                    onSelect={(media) => setAttributes({ testimonialBgImage: media.url })}
                                                    allowedTypes={['image']}
                                                    value={testimonialBgImage}
                                                    render={({ open }) => (
                                                        <div style={{ position: 'relative' }}>
                                                            <img 
                                                                src={testimonialBgImage || `${assetsUrl}images/landing/testimonial-bg.jpg`} 
                                                                alt="Testimonials Background"
                                                                style={{ width: '100%', cursor: 'pointer' }}
                                                                onClick={open}
                                                            />
                                                            <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                                {testimonialBgImage ? __('Change', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                            </Button>
                                                        </div>
                                                    )}
                                                />
                                            </MediaUploadCheck>
                                        </div>
                                        <div className="landing-testimonials__card">
                                            <div className="landing-testimonials__card-content">
                                                <p style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                                                    {__('No testimonials yet. Click "Add Testimonial" to add one.', 'ashtech-pages-blocks')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                testimonials.map((testimonial, index) => (
                                    <div key={index} className="landing-testimonials__slide" style={{ position: 'relative', marginBottom: '20px' }}>
                                        <Button
                                            isDestructive
                                            isSmall
                                            onClick={() => removeTestimonial(index)}
                                            style={{ 
                                                position: 'absolute', 
                                                top: '10px', 
                                                right: '10px', 
                                                zIndex: 10 
                                            }}
                                        >
                                            {__('Remove', 'ashtech-pages-blocks')}
                                        </Button>
                                        <div className="landing-testimonials__content animate-text-rtl">
                                            <div className="landing-testimonials__image">
                                                <MediaUploadCheck>
                                                    <MediaUpload
                                                        onSelect={(media) => setAttributes({ testimonialBgImage: media.url })}
                                                        allowedTypes={['image']}
                                                        value={testimonialBgImage}
                                                        render={({ open }) => (
                                                            <div style={{ position: 'relative' }}>
                                                                <img 
                                                                    src={testimonialBgImage || `${assetsUrl}images/landing/testimonial-bg.jpg`} 
                                                                    alt="Testimonials Background"
                                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                                    onClick={open}
                                                                />
                                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '11px' }}>
                                                                    {testimonialBgImage ? __('Change', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                                </Button>
                                                            </div>
                                                        )}
                                                    />
                                                </MediaUploadCheck>
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
                                                        <RichText
                                                            tagName="p"
                                                            className="landing-testimonials__quote"
                                                            value={testimonial.quote || ''}
                                                            onChange={(value) => updateTestimonial(index, 'quote', value)}
                                                            placeholder={__('Testimonial quote...', 'ashtech-pages-blocks')}
                                                        />
                                                        <div className="landing-testimonials__author">
                                                            <div className="landing-testimonials__author-name">
                                                                <RichText
                                                                    tagName="span"
                                                                    value={testimonial.authorName || ''}
                                                                    onChange={(value) => updateTestimonial(index, 'authorName', value)}
                                                                    placeholder={__('Author Name', 'ashtech-pages-blocks')}
                                                                />
                                                            </div>
                                                            <RichText
                                                                tagName="span"
                                                                className="landing-testimonials__author-role"
                                                                value={testimonial.authorRole || ''}
                                                                onChange={(value) => updateTestimonial(index, 'authorRole', value)}
                                                                placeholder={__('Author Role', 'ashtech-pages-blocks')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        
                        {/* Add New Testimonial Button */}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button
                                isPrimary
                                onClick={addTestimonial}
                            >
                                {__('+ Add New Testimonial', 'ashtech-pages-blocks')}
                            </Button>
                        </div>

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
        </div>
    );
}

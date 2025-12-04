import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, mainContent, overviewImage, project1Image, project2Image, nriImage, testimonialBgImage } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps()}>
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
            <section className="landing-overview">
                <div className="landing-overview__container">
                    <div className="landing-overview__content">
                        <div className="landing-overview__text">
                            <h2 className="landing-overview__title">Overview</h2>
                            <RichText
                                tagName="p"
                                className="landing-overview__description"
                                value={mainContent}
                                onChange={(value) => setAttributes({ mainContent: value })}
                                placeholder={__('Ashtech Presidential Towers description...', 'ashtech-pages-blocks')}
                            />
                            <button className="btn btn--primary">
                                <span>Discover More</span>
                                <div className="btn__icon">
                                    <img src={`${assetsUrl}images/landing/icon-arrow.svg`} alt="Arrow" />
                                </div>
                            </button>
                        </div>
                        <div className="landing-overview__image">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => setAttributes({ overviewImage: media.url })}
                                    allowedTypes={['image']}
                                    value={overviewImage}
                                    render={({ open }) => (
                                        <div style={{ position: 'relative' }}>
                                            <img 
                                                src={overviewImage || `${assetsUrl}images/landing/overview-image.jpg`} 
                                                alt="Ashtech Overview"
                                                style={{ width: '100%', cursor: 'pointer' }}
                                                onClick={open}
                                            />
                                            <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                {overviewImage ? __('Change', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="landing-values">
                <div className="landing-values__container">
                    <div className="landing-values__header">
                        <h2 className="landing-values__title">Core Values We're Built On</h2>
                    </div>
                    <div className="landing-values__graphic">
                        <img src={`${assetsUrl}images/landing/values-graphic.svg`} alt="Core Values" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="landing-projects">
                <div className="landing-projects__container">
                    <div className="landing-projects__header">
                        <h2 className="landing-projects__title">Our Projects</h2>
                        <p className="landing-projects__subtitle">Delivering Excellence, Building Trust</p>
                    </div>
                    <div className="landing-projects__content">
                        <div className="landing-projects__card">
                            <div className="landing-projects__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ project1Image: media.url })}
                                        allowedTypes={['image']}
                                        value={project1Image}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                <img 
                                                    src={project1Image || `${assetsUrl}images/landing/project-presidential.jpg`} 
                                                    alt="Presidential Towers"
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    onClick={open}
                                                />
                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '11px' }}>
                                                    {project1Image ? __('Change', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="landing-projects__info">
                                <h3 className="landing-projects__card-title">Ashtech Presidential Towers</h3>
                                <p className="landing-projects__description">Experience luxury living</p>
                                <button className="btn btn--secondary">
                                    <span>Explore More</span>
                                    <div className="btn__icon">
                                        <img src={`${assetsUrl}images/landing/icon-arrow-white.svg`} alt="Arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="landing-projects__card">
                            <div className="landing-projects__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ project2Image: media.url })}
                                        allowedTypes={['image']}
                                        value={project2Image}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                <img 
                                                    src={project2Image || `${assetsUrl}images/landing/project-grand.jpg`} 
                                                    alt="Grand View"
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    onClick={open}
                                                />
                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '11px' }}>
                                                    {project2Image ? __('Change', 'ashtech-pages-blocks') : __('Upload', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="landing-projects__info">
                                <h3 className="landing-projects__card-title">Ashtech Grand View</h3>
                                <p className="landing-projects__description">Where comfort meets elegance</p>
                                <button className="btn btn--secondary">
                                    <span>Book a Private Tour</span>
                                    <div className="btn__icon">
                                        <img src={`${assetsUrl}images/landing/icon-arrow-white.svg`} alt="Arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NRI Desk Section */}
            <section className="landing-nri">
                <div className="landing-nri__container">
                    <div className="landing-nri__content">
                        <div className="landing-nri__text">
                            <h2 className="landing-nri__title">NRI Corner</h2>
                            <p className="landing-nri__description">Special services for our NRI customers</p>
                            <div className="landing-nri__features">
                                <div className="landing-nri__feature">
                                    <img src={`${assetsUrl}images/landing/icon-repatriation.svg`} alt="Repatriation" />
                                    <span>Easy Repatriation</span>
                                </div>
                                <div className="landing-nri__feature">
                                    <img src={`${assetsUrl}images/landing/icon-support.svg`} alt="Support" />
                                    <span>24/7 Support</span>
                                </div>
                                <div className="landing-nri__feature">
                                    <img src={`${assetsUrl}images/landing/icon-investment.svg`} alt="Investment" />
                                    <span>Safe Investment</span>
                                </div>
                                <div className="landing-nri__feature">
                                    <img src={`${assetsUrl}images/landing/icon-documentation.svg`} alt="Documentation" />
                                    <span>Easy Documentation</span>
                                </div>
                            </div>
                            <button className="btn btn--primary">
                                <span>Connect with NRI Desk</span>
                                <div className="btn__icon">
                                    <img src={`${assetsUrl}images/landing/icon-arrow.svg`} alt="Arrow" />
                                </div>
                            </button>
                        </div>
                        <div className="landing-nri__image">
                            <img src={`${assetsUrl}images/landing/nri-desk.jpg`} alt="NRI Desk" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="landing-awards">
                <div className="landing-awards__container">
                    <div className="landing-awards__header">
                        <h2 className="landing-awards__title">Awards & Recognition</h2>
                    </div>
                    <div className="landing-awards__content">
                        <div className="landing-awards__item">
                            <img src={`${assetsUrl}images/landing/award-1.png`} alt="Award 1" />
                        </div>
                        <div className="landing-awards__item">
                            <img src={`${assetsUrl}images/landing/award-2.png`} alt="Award 2" />
                        </div>
                        <div className="landing-awards__item">
                            <img src={`${assetsUrl}images/landing/award-3.png`} alt="Award 3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="landing-testimonials">
                <div className="landing-testimonials__container">
                    <div className="landing-testimonials__header">
                        <h2 className="landing-testimonials__title">What Our Customers Say</h2>
                    </div>
                    <div className="landing-testimonials__slider">
                        <div className="landing-testimonials__item">
                            <p className="landing-testimonials__quote">Excellent service and quality construction</p>
                            <p className="landing-testimonials__author">- Customer Name</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

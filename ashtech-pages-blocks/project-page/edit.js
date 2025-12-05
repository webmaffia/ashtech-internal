import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { 
        heroTitle, heroSubtitle, overviewTitle, overviewContent,
        overviewStatAcres, overviewStatOpenPlot, overviewStatTowers, overviewStatResidences, overviewButtonText,
        architectureLabel, architectureTitle, architectureDescription,
        architectureSunTitle, architectureSunText, architectureAirTitle, architectureAirText,
        architectureWaterTitle, architectureWaterText, architectureEarthTitle, architectureEarthText,
        experiencesLabel, experiencesTitle, experiencesDescription, experiencesButtonText,
        experiencesWellnessTab, experiencesMovementTab, experiencesCultureTab, experiencesEaseTab,
        experiencesWellnessFeatures, experiencesMovementFeatures, experiencesCultureFeatures, experiencesEaseFeatures,
        locationLabel, locationTitle, locationDescription, locationMapSrc, locationConnectivityItems,
        specificationsLabel, specificationsTitle,
        specResidencesImage, specResidencesTitle, specResidencesList,
        specStructureImage, specStructureTitle, specStructureList,
        specSustainabilityImage, specSustainabilityTitle, specSustainabilityList,
        aboutLabel, aboutTitle, aboutDescription, aboutButtonText
    } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('A Space to Breathe<br>A Space to Belong', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <p className="project-hero__subtitle-main">Ashtech Presidential Towers by Ashtech Group</p>
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-text"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Over 80% open greens, enveloped by quiet avenues and timeless design.', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Sub Menubar Section */}
            <section className="project-submenu" id="project-submenu">
                <div className="project-submenu__container">
                    <div className="project-submenu__logo">
                        <img src={`${assetsUrl}images/project/project_logo.png`} alt="Ashtech Presidential Logo" />
                    </div>
                    <nav className="project-submenu__nav">
                        <a href="#overview" className="project-submenu__link">Overview</a>
                        <a href="#architecture" className="project-submenu__link">Architecture</a>
                        <a href="#experiences" className="project-submenu__link">Experiences</a>
                        <a href="#location" className="project-submenu__link">Location</a>
                        <a href="#specifications" className="project-submenu__link">Specifications</a>
                        <a href="#about" className="project-submenu__link">About Ashtech Group</a>
                    </nav>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="project-overview">
                <div className="project-overview__decoration"></div>
                <div className="project-overview__container">
                    <div className="project-overview__left">
                        <div className="project-overview__header">
                            <span className="project-overview__label animate-text">Overview</span>
                            <RichText
                                tagName="h2"
                                className="project-overview__title animate-text"
                                value={overviewTitle}
                                onChange={(value) => setAttributes({ overviewTitle: value })}
                                placeholder={__('Crafted for Those Who <br>Value the Calm Within', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                    <div className="project-overview__right">
                        <div className="project-overview__description animate-text">
                            <RichText
                                tagName="div"
                                value={overviewContent}
                                onChange={(value) => setAttributes({ overviewContent: value })}
                                placeholder={__('Project overview content...', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <div className="project-overview__stats">
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/ease-vehicular.svg`} alt="Acres" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="project-overview__stat-text"
                                    value={overviewStatAcres}
                                    onChange={(value) => setAttributes({ overviewStatAcres: value })}
                                    placeholder={__('5.6 ACRES', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-open-plot.svg`} alt="Open Plot" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="project-overview__stat-text"
                                    value={overviewStatOpenPlot}
                                    onChange={(value) => setAttributes({ overviewStatOpenPlot: value })}
                                    placeholder={__('3-SIDE OPEN PLOT', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-towers.svg`} alt="Towers" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="project-overview__stat-text"
                                    value={overviewStatTowers}
                                    onChange={(value) => setAttributes({ overviewStatTowers: value })}
                                    placeholder={__('5 TOWERS', 'ashtech-pages-blocks')}
                                />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-residences.svg`} alt="Residences" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="project-overview__stat-text"
                                    value={overviewStatResidences}
                                    onChange={(value) => setAttributes({ overviewStatResidences: value })}
                                    placeholder={__('456 RESIDENCES', 'ashtech-pages-blocks')}
                                />
                            </div>
                        </div>
                        <div className="project-overview__button">
                            <button className="btn btn--primary">
                                <RichText
                                    tagName="span"
                                    value={overviewButtonText}
                                    onChange={(value) => setAttributes({ overviewButtonText: value })}
                                    placeholder={__('Download Brochure', 'ashtech-pages-blocks')}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section id="architecture" className="project-architecture">
                <div className="project-architecture__overlay"></div>
                <div className="project-architecture__container">
                    <div className="project-architecture__header">
                        <RichText
                            tagName="span"
                            className="project-architecture__label animate-text"
                            value={architectureLabel}
                            onChange={(value) => setAttributes({ architectureLabel: value })}
                            placeholder={__('Architecture: The Four Elements', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="project-architecture__title animate-text"
                            value={architectureTitle}
                            onChange={(value) => setAttributes({ architectureTitle: value })}
                            placeholder={__('Architecture Shaped by the Elements of Nature', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="project-architecture__description animate-text"
                            value={architectureDescription}
                            onChange={(value) => setAttributes({ architectureDescription: value })}
                            placeholder={__('Architecture description...', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="project-architecture__content">
                        <div className="project-architecture__card">
                            <div className="project-architecture__element active" data-element="sun">
                                <div className="project-architecture__element-content">
                                    <RichText
                                        tagName="h3"
                                        className="project-architecture__element-title"
                                        value={architectureSunTitle}
                                        onChange={(value) => setAttributes({ architectureSunTitle: value })}
                                        placeholder={__('Sun', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="project-architecture__element-text"
                                        value={architectureSunText}
                                        onChange={(value) => setAttributes({ architectureSunText: value })}
                                        placeholder={__('Sun description...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="air" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText
                                        tagName="h3"
                                        className="project-architecture__element-title"
                                        value={architectureAirTitle}
                                        onChange={(value) => setAttributes({ architectureAirTitle: value })}
                                        placeholder={__('Air', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="project-architecture__element-text"
                                        value={architectureAirText}
                                        onChange={(value) => setAttributes({ architectureAirText: value })}
                                        placeholder={__('Air description...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="water" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText
                                        tagName="h3"
                                        className="project-architecture__element-title"
                                        value={architectureWaterTitle}
                                        onChange={(value) => setAttributes({ architectureWaterTitle: value })}
                                        placeholder={__('Water', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="project-architecture__element-text"
                                        value={architectureWaterText}
                                        onChange={(value) => setAttributes({ architectureWaterText: value })}
                                        placeholder={__('Water description...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="earth" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText
                                        tagName="h3"
                                        className="project-architecture__element-title"
                                        value={architectureEarthTitle}
                                        onChange={(value) => setAttributes({ architectureEarthTitle: value })}
                                        placeholder={__('Earth', 'ashtech-pages-blocks')}
                                    />
                                    <RichText
                                        tagName="p"
                                        className="project-architecture__element-text"
                                        value={architectureEarthText}
                                        onChange={(value) => setAttributes({ architectureEarthText: value })}
                                        placeholder={__('Earth description...', 'ashtech-pages-blocks')}
                                    />
                                </div>
                            </div>
                            <div className="project-architecture__tabs">
                                <button className="project-architecture__tab active" data-tab="sun">SUN</button>
                                <button className="project-architecture__tab" data-tab="air">AIR</button>
                                <button className="project-architecture__tab" data-tab="water">WATER</button>
                                <button className="project-architecture__tab" data-tab="earth">EARTH</button>
                            </div>
                            <div className="project-architecture__progress">
                                <div className="project-architecture__progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCES SECTION */}
            <section className="experiences" id="experiences">
                <div className="project-about__decoration"></div>
                
                <div className="experiences__header">
                    <div className="experiences__header-left">
                        <RichText
                            tagName="p"
                            className="experiences__label"
                            value={experiencesLabel}
                            onChange={(value) => setAttributes({ experiencesLabel: value })}
                            placeholder={__('Experiences and Privileges', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="experiences__title"
                            value={experiencesTitle}
                            onChange={(value) => setAttributes({ experiencesTitle: value })}
                            placeholder={__('A Life Composed for Grace and Grandeur', 'ashtech-pages-blocks')}
                        />
                    </div>
                    
                    <div className="experiences__header-right">
                        <RichText
                            tagName="p"
                            className="experiences__description"
                            value={experiencesDescription}
                            onChange={(value) => setAttributes({ experiencesDescription: value })}
                            placeholder={__('Experiences description...', 'ashtech-pages-blocks')}
                        />
                        <button className="btn btn--primary">
                            <RichText
                                tagName="span"
                                value={experiencesButtonText}
                                onChange={(value) => setAttributes({ experiencesButtonText: value })}
                                placeholder={__('Download Brochure', 'ashtech-pages-blocks')}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="experiences__tabs">
                    <div className="experiences__tab-list">
                        <button className="experiences__tab-button experiences__tab-button--active" data-tab="wellness">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText
                                tagName="span"
                                className="experiences__tab-text"
                                value={experiencesWellnessTab}
                                onChange={(value) => setAttributes({ experiencesWellnessTab: value })}
                                placeholder={__('Wellness & Rejuvenation', 'ashtech-pages-blocks')}
                            />
                        </button>
                        <button className="experiences__tab-button" data-tab="movement">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText
                                tagName="span"
                                className="experiences__tab-text"
                                value={experiencesMovementTab}
                                onChange={(value) => setAttributes({ experiencesMovementTab: value })}
                                placeholder={__('Movement & Play', 'ashtech-pages-blocks')}
                            />
                        </button>
                        <button className="experiences__tab-button" data-tab="culture">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText
                                tagName="span"
                                className="experiences__tab-text"
                                value={experiencesCultureTab}
                                onChange={(value) => setAttributes({ experiencesCultureTab: value })}
                                placeholder={__('Culture & Gathering', 'ashtech-pages-blocks')}
                            />
                        </button>
                        <button className="experiences__tab-button" data-tab="ease">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText
                                tagName="span"
                                className="experiences__tab-text"
                                value={experiencesEaseTab}
                                onChange={(value) => setAttributes({ experiencesEaseTab: value })}
                                placeholder={__('Ease & Arrival', 'ashtech-pages-blocks')}
                            />
                        </button>
                    </div>
                    
                    {/* Wellness & Rejuvenation Content */}
                    <div className="experiences__tab-content experiences__tab-content--active" data-content="wellness">
                        <div className="experiences__features">
                            {(experiencesWellnessFeatures || []).map((feature, index) => {
                                const icons = ['wellness-pool.svg', 'wellness-spa-1.svg', 'wellness-steam.svg', 'wellness-yoga.svg'];
                                return (
                                    <div key={index} className="feature-card">
                                        <div className="feature-card__icon">
                                            <img src={`${assetsUrl}images/project/${icons[index] || 'wellness-pool.svg'}`} alt="Feature icon" />
                                        </div>
                                        <RichText
                                            tagName="p"
                                            className="feature-card__text"
                                            value={feature}
                                            onChange={(value) => {
                                                const newFeatures = [...(experiencesWellnessFeatures || [])];
                                                newFeatures[index] = value;
                                                setAttributes({ experiencesWellnessFeatures: newFeatures });
                                            }}
                                            placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Movement & Play Content */}
                    <div className="experiences__tab-content" data-content="movement">
                        <div className="experiences__features">
                            {(experiencesMovementFeatures || []).map((feature, index) => {
                                const icons = ['movement-gym.svg', 'movement-training.svg', 'movement-sports-bar.svg', 'movement-zumba.svg', 'movement-bowling.svg', 'movement-golf.svg', 'movement-arena.svg'];
                                return (
                                    <div key={index} className="feature-card">
                                        <div className="feature-card__icon">
                                            <img src={`${assetsUrl}images/project/${icons[index] || 'movement-gym.svg'}`} alt="Feature icon" />
                                        </div>
                                        <RichText
                                            tagName="p"
                                            className="feature-card__text"
                                            value={feature}
                                            onChange={(value) => {
                                                const newFeatures = [...(experiencesMovementFeatures || [])];
                                                newFeatures[index] = value;
                                                setAttributes({ experiencesMovementFeatures: newFeatures });
                                            }}
                                            placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Culture & Gathering Content */}
                    <div className="experiences__tab-content" data-content="culture">
                        <div className="experiences__features">
                            {(experiencesCultureFeatures || []).map((feature, index) => {
                                const icons = ['culture-community.svg', 'culture-theatre.svg', 'culture-library.svg', 'culture-podcast.svg', 'culture-business.svg', 'culture-meeting.svg', 'culture-dining.svg', 'culture-restaurant.svg'];
                                return (
                                    <div key={index} className="feature-card">
                                        <div className="feature-card__icon">
                                            <img src={`${assetsUrl}images/project/${icons[index] || 'culture-community.svg'}`} alt="Feature icon" />
                                        </div>
                                        <RichText
                                            tagName="p"
                                            className="feature-card__text"
                                            value={feature}
                                            onChange={(value) => {
                                                const newFeatures = [...(experiencesCultureFeatures || [])];
                                                newFeatures[index] = value;
                                                setAttributes({ experiencesCultureFeatures: newFeatures });
                                            }}
                                            placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Ease & Arrival Content */}
                    <div className="experiences__tab-content" data-content="ease">
                        <div className="experiences__features">
                            {(experiencesEaseFeatures || []).map((feature, index) => {
                                const icons = ['ease-vehicular.svg', 'ease-lift-lobby.svg', 'ease-private-lift.svg', 'ease-parking.svg'];
                                return (
                                    <div key={index} className="feature-card">
                                        <div className="feature-card__icon">
                                            <img src={`${assetsUrl}images/project/${icons[index] || 'ease-vehicular.svg'}`} alt="Feature icon" />
                                        </div>
                                        <RichText
                                            tagName="p"
                                            className="feature-card__text"
                                            value={feature}
                                            onChange={(value) => {
                                                const newFeatures = [...(experiencesEaseFeatures || [])];
                                                newFeatures[index] = value;
                                                setAttributes({ experiencesEaseFeatures: newFeatures });
                                            }}
                                            placeholder={__('Feature text...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location and Connectivity Section */}
            <section id="location" className="project-location">
                <div className="project-location__container">
                    <div className="project-location__header">
                        <div className="project-location__header-left">
                            <RichText
                                tagName="span"
                                className="project-location__label animate-text"
                                value={locationLabel}
                                onChange={(value) => setAttributes({ locationLabel: value })}
                                placeholder={__('Location and Connectivity', 'ashtech-pages-blocks')}
                            />
                            <RichText
                                tagName="h2"
                                className="project-location__title animate-text"
                                value={locationTitle}
                                onChange={(value) => setAttributes({ locationTitle: value })}
                                placeholder={__('A Rare Balance of Access, Convenience and Calm', 'ashtech-pages-blocks')}
                            />
                        </div>
                        <div className="project-location__header-right">
                            <RichText
                                tagName="p"
                                className="project-location__description animate-text"
                                value={locationDescription}
                                onChange={(value) => setAttributes({ locationDescription: value })}
                                placeholder={__('Location description...', 'ashtech-pages-blocks')}
                            />
                        </div>
                    </div>
                    <div className="project-location__map">
                        <input
                            type="text"
                            value={locationMapSrc}
                            onChange={(e) => setAttributes({ locationMapSrc: e.target.value })}
                            placeholder={__('Google Maps embed URL', 'ashtech-pages-blocks')}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        />
                        <iframe 
                            src={locationMapSrc || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37c5b5b5b5b5b5b5!2sSector%2012%2C%20Greater%20Noida%20West%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ashtech Presidential Towers Location - Sector 12, Greater Noida West">
                        </iframe>
                    </div>
                    <div className="project-location__connectivity">
                        <div className="project-location__slider">
                            <div className="project-location__slider-track">
                                {(locationConnectivityItems || []).map((item, index) => {
                                    const icons = ['location-expressway.svg', 'location-schools.svg', 'location-noida.svg', 'location-corporate.svg', 'location-airport.svg', 'location-airport.svg'];
                                    return (
                                        <div key={index} className="project-location__item">
                                            <div className="project-location__item-icon">
                                                <img src={`${assetsUrl}images/project/${icons[index] || 'location-expressway.svg'}`} alt="Location icon" />
                                            </div>
                                            <RichText
                                                tagName="p"
                                                className="project-location__item-text"
                                                value={item}
                                                onChange={(value) => {
                                                    const newItems = [...(locationConnectivityItems || [])];
                                                    newItems[index] = value;
                                                    setAttributes({ locationConnectivityItems: newItems });
                                                }}
                                                placeholder={__('Connectivity item...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIFICATIONS SECTION */}
            <section className="specifications" id="specifications">
                <div className="specifications__header">
                    <RichText
                        tagName="p"
                        className="specifications__label"
                        value={specificationsLabel}
                        onChange={(value) => setAttributes({ specificationsLabel: value })}
                        placeholder={__('Specifications', 'ashtech-pages-blocks')}
                    />
                    <RichText
                        tagName="h2"
                        className="specifications__title"
                        value={specificationsTitle}
                        onChange={(value) => setAttributes({ specificationsTitle: value })}
                        placeholder={__('Design That Reflects the<br>Art of Perfection', 'ashtech-pages-blocks')}
                    />
                </div>
                
                <div className="specifications__cards">
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => setAttributes({ specResidencesImage: media.url })}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <div className="spec-card__image">
                                            {specResidencesImage ? (
                                                <img src={specResidencesImage} alt="Residences" />
                                            ) : (
                                                <img src={`${assetsUrl}images/project/spec-residences.jpg`} alt="Residences" />
                                            )}
                                            <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                {specResidencesImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                            <div className="spec-card__content">
                                <RichText
                                    tagName="h3"
                                    className="spec-card__title"
                                    value={specResidencesTitle}
                                    onChange={(value) => setAttributes({ specResidencesTitle: value })}
                                    placeholder={__('Residences', 'ashtech-pages-blocks')}
                                />
                                <ul className="spec-card__list">
                                    {(specResidencesList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newList = [...(specResidencesList || [])];
                                                    newList[index] = value;
                                                    setAttributes({ specResidencesList: newList });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => setAttributes({ specStructureImage: media.url })}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <div className="spec-card__image">
                                            {specStructureImage ? (
                                                <img src={specStructureImage} alt="Structure & Safety" />
                                            ) : (
                                                <img src={`${assetsUrl}images/project/spec-structure.jpg`} alt="Structure & Safety" />
                                            )}
                                            <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                {specStructureImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                            <div className="spec-card__content">
                                <RichText
                                    tagName="h3"
                                    className="spec-card__title"
                                    value={specStructureTitle}
                                    onChange={(value) => setAttributes({ specStructureTitle: value })}
                                    placeholder={__('Structure & Safety', 'ashtech-pages-blocks')}
                                />
                                <ul className="spec-card__list">
                                    {(specStructureList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newList = [...(specStructureList || [])];
                                                    newList[index] = value;
                                                    setAttributes({ specStructureList: newList });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => setAttributes({ specSustainabilityImage: media.url })}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <div className="spec-card__image">
                                            {specSustainabilityImage ? (
                                                <img src={specSustainabilityImage} alt="Sustainability" />
                                            ) : (
                                                <img src={`${assetsUrl}images/project/spec-sustainability.jpg`} alt="Sustainability" />
                                            )}
                                            <Button onClick={open} isPrimary style={{ marginTop: '10px' }}>
                                                {specSustainabilityImage ? __('Replace Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                            </Button>
                                        </div>
                                    )}
                                />
                            </MediaUploadCheck>
                            <div className="spec-card__content">
                                <RichText
                                    tagName="h3"
                                    className="spec-card__title"
                                    value={specSustainabilityTitle}
                                    onChange={(value) => setAttributes({ specSustainabilityTitle: value })}
                                    placeholder={__('Sustainability', 'ashtech-pages-blocks')}
                                />
                                <ul className="spec-card__list">
                                    {(specSustainabilityList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText
                                                tagName="span"
                                                value={item}
                                                onChange={(value) => {
                                                    const newList = [...(specSustainabilityList || [])];
                                                    newList[index] = value;
                                                    setAttributes({ specSustainabilityList: newList });
                                                }}
                                                placeholder={__('List item...', 'ashtech-pages-blocks')}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Ashtech Section */}
            <section id="about" className="project-about">
                <div className="project-about__decoration"></div>
                <div className="project-about__container">
                    <div className="project-about__left">
                        <RichText
                            tagName="span"
                            className="project-about__label animate-text"
                            value={aboutLabel}
                            onChange={(value) => setAttributes({ aboutLabel: value })}
                            placeholder={__('About Ashtech Group', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="project-about__title animate-text"
                            value={aboutTitle}
                            onChange={(value) => setAttributes({ aboutTitle: value })}
                            placeholder={__('A Legacy Etched in Precision and Purpose', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="project-about__right">
                        <RichText
                            tagName="p"
                            className="project-about__description animate-text"
                            value={aboutDescription}
                            onChange={(value) => setAttributes({ aboutDescription: value })}
                            placeholder={__('About description...', 'ashtech-pages-blocks')}
                        />
                        <button className="btn btn--primary">
                            <RichText
                                tagName="span"
                                value={aboutButtonText}
                                onChange={(value) => setAttributes({ aboutButtonText: value })}
                                placeholder={__('Know More', 'ashtech-pages-blocks')}
                            />
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

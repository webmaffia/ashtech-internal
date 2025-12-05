import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
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
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                    <div className="project-hero__subtitle">
                        <p className="project-hero__subtitle-main">Ashtech Presidential Towers by Ashtech Group</p>
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-text" 
                            value={heroSubtitle} 
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
                            <RichText.Content 
                                tagName="h2" 
                                className="project-overview__title animate-text" 
                                value={overviewTitle} 
                            />
                        </div>
                    </div>
                    <div className="project-overview__right">
                        <div className="project-overview__description animate-text">
                            <RichText.Content 
                                tagName="div" 
                                value={overviewContent} 
                            />
                        </div>
                        <div className="project-overview__stats">
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/ease-vehicular.svg`} alt="Acres" />
                                </div>
                                <RichText.Content tagName="p" className="project-overview__stat-text" value={overviewStatAcres} />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-open-plot.svg`} alt="Open Plot" />
                                </div>
                                <RichText.Content tagName="p" className="project-overview__stat-text" value={overviewStatOpenPlot} />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-towers.svg`} alt="Towers" />
                                </div>
                                <RichText.Content tagName="p" className="project-overview__stat-text" value={overviewStatTowers} />
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-residences.svg`} alt="Residences" />
                                </div>
                                <RichText.Content tagName="p" className="project-overview__stat-text" value={overviewStatResidences} />
                            </div>
                        </div>
                        <div className="project-overview__button">
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

            {/* Architecture Section */}
            <section id="architecture" className="project-architecture">
                <div className="project-architecture__overlay"></div>
                <div className="project-architecture__container">
                    <div className="project-architecture__header">
                        <RichText.Content tagName="span" className="project-architecture__label animate-text" value={architectureLabel} />
                        <RichText.Content tagName="h2" className="project-architecture__title animate-text" value={architectureTitle} />
                        <RichText.Content tagName="p" className="project-architecture__description animate-text" value={architectureDescription} />
                    </div>
                    <div className="project-architecture__content">
                        <div className="project-architecture__card">
                            <div className="project-architecture__element active" data-element="sun">
                                <div className="project-architecture__element-content">
                                    <RichText.Content tagName="h3" className="project-architecture__element-title" value={architectureSunTitle} />
                                    <RichText.Content tagName="p" className="project-architecture__element-text" value={architectureSunText} />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="air" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText.Content tagName="h3" className="project-architecture__element-title" value={architectureAirTitle} />
                                    <RichText.Content tagName="p" className="project-architecture__element-text" value={architectureAirText} />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="water" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText.Content tagName="h3" className="project-architecture__element-title" value={architectureWaterTitle} />
                                    <RichText.Content tagName="p" className="project-architecture__element-text" value={architectureWaterText} />
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="earth" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <RichText.Content tagName="h3" className="project-architecture__element-title" value={architectureEarthTitle} />
                                    <RichText.Content tagName="p" className="project-architecture__element-text" value={architectureEarthText} />
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
                        <RichText.Content tagName="p" className="experiences__label" value={experiencesLabel} />
                        <RichText.Content tagName="h2" className="experiences__title" value={experiencesTitle} />
                    </div>
                    
                    <div className="experiences__header-right">
                        <RichText.Content tagName="p" className="experiences__description" value={experiencesDescription} />
                        <button className="btn btn--primary">
                            <RichText.Content tagName="span" value={experiencesButtonText} />
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
                            <RichText.Content tagName="span" className="experiences__tab-text" value={experiencesWellnessTab} />
                        </button>
                        <button className="experiences__tab-button" data-tab="movement">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText.Content tagName="span" className="experiences__tab-text" value={experiencesMovementTab} />
                        </button>
                        <button className="experiences__tab-button" data-tab="culture">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText.Content tagName="span" className="experiences__tab-text" value={experiencesCultureTab} />
                        </button>
                        <button className="experiences__tab-button" data-tab="ease">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <RichText.Content tagName="span" className="experiences__tab-text" value={experiencesEaseTab} />
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
                                        <RichText.Content tagName="p" className="feature-card__text" value={feature} />
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
                                        <RichText.Content tagName="p" className="feature-card__text" value={feature} />
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
                                        <RichText.Content tagName="p" className="feature-card__text" value={feature} />
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
                                        <RichText.Content tagName="p" className="feature-card__text" value={feature} />
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
                            <RichText.Content tagName="span" className="project-location__label animate-text" value={locationLabel} />
                            <RichText.Content tagName="h2" className="project-location__title animate-text" value={locationTitle} />
                        </div>
                        <div className="project-location__header-right">
                            <RichText.Content tagName="p" className="project-location__description animate-text" value={locationDescription} />
                        </div>
                    </div>
                    <div className="project-location__map">
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
                                            <RichText.Content tagName="p" className="project-location__item-text" value={item} />
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
                    <RichText.Content tagName="p" className="specifications__label" value={specificationsLabel} />
                    <RichText.Content tagName="h2" className="specifications__title" value={specificationsTitle} />
                </div>
                
                <div className="specifications__cards">
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={specResidencesImage || `${assetsUrl}images/project/spec-residences.jpg`} alt="Residences" />
                            </div>
                            <div className="spec-card__content">
                                <RichText.Content tagName="h3" className="spec-card__title" value={specResidencesTitle} />
                                <ul className="spec-card__list">
                                    {(specResidencesList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText.Content tagName="span" value={item} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={specStructureImage || `${assetsUrl}images/project/spec-structure.jpg`} alt="Structure & Safety" />
                            </div>
                            <div className="spec-card__content">
                                <RichText.Content tagName="h3" className="spec-card__title" value={specStructureTitle} />
                                <ul className="spec-card__list">
                                    {(specStructureList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText.Content tagName="span" value={item} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={specSustainabilityImage || `${assetsUrl}images/project/spec-sustainability.jpg`} alt="Sustainability" />
                            </div>
                            <div className="spec-card__content">
                                <RichText.Content tagName="h3" className="spec-card__title" value={specSustainabilityTitle} />
                                <ul className="spec-card__list">
                                    {(specSustainabilityList || []).map((item, index) => (
                                        <li key={index}>
                                            <RichText.Content tagName="span" value={item} />
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
                        <RichText.Content tagName="span" className="project-about__label animate-text" value={aboutLabel} />
                        <RichText.Content tagName="h2" className="project-about__title animate-text" value={aboutTitle} />
                    </div>
                    <div className="project-about__right">
                        <RichText.Content tagName="p" className="project-about__description animate-text" value={aboutDescription} />
                        <button className="btn btn--primary">
                            <RichText.Content tagName="span" value={aboutButtonText} />
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

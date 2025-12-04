import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewContent } = attributes;

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
                                <p className="project-overview__stat-text">5.6 ACRES</p>
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-open-plot.svg`} alt="Open Plot" />
                                </div>
                                <p className="project-overview__stat-text">3-SIDE OPEN PLOT</p>
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-towers.svg`} alt="Towers" />
                                </div>
                                <p className="project-overview__stat-text">5 TOWERS</p>
                            </div>
                            <div className="project-overview__stat">
                                <div className="project-overview__stat-icon">
                                    <img src={`${assetsUrl}images/project/overview-residences.svg`} alt="Residences" />
                                </div>
                                <p className="project-overview__stat-text">456 RESIDENCES</p>
                            </div>
                        </div>
                        <div className="project-overview__button">
                            <button className="btn btn--primary">
                                <span>Download Brochure</span>
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
                        <span className="project-architecture__label animate-text">Architecture: The Four Elements</span>
                        <h2 className="project-architecture__title animate-text">Architecture Shaped by the Elements of Nature</h2>
                        <p className="project-architecture__description animate-text">The architecture of Ashtech Presidential Towers, Greater Noida - West, draws inspiration from presidential living and also nature's four elements, expressed through timeless geometry, natural materials, and serene spaces that feel deeply personal.</p>
                    </div>
                    <div className="project-architecture__content">
                        <div className="project-architecture__card">
                            <div className="project-architecture__element active" data-element="sun">
                                <div className="project-architecture__element-content">
                                    <h3 className="project-architecture__element-title">Sun</h3>
                                    <p className="project-architecture__element-text">East-facing layouts, curved glass balustrades, and deep sundecks that receive every sunrise in quiet warmth.</p>
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="air" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <h3 className="project-architecture__element-title">Air</h3>
                                    <p className="project-architecture__element-text">Cross-ventilation through every home, open corridors, and layered terraces that invite movement and breath into the architecture.</p>
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="water" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <h3 className="project-architecture__element-title">Water</h3>
                                    <p className="project-architecture__element-text">Reflective water features, cascading elements, and aquatic landscaping that bring tranquility and fluidity to the environment.</p>
                                </div>
                            </div>
                            <div className="project-architecture__element" data-element="earth" style={{ display: 'none' }}>
                                <div className="project-architecture__element-content">
                                    <h3 className="project-architecture__element-title">Earth</h3>
                                    <p className="project-architecture__element-text">Natural stone finishes, grounded forms, and native landscaping that connect every residence to the terrain beneath.</p>
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
                        <p className="experiences__label">Experiences and Privileges</p>
                        <h2 className="experiences__title">A Life Composed for Grace and Grandeur</h2>
                    </div>
                    
                    <div className="experiences__header-right">
                        <p className="experiences__description">
                            Every space at Ashtech Presidential Towers, Greater Noida - West, has been envisioned to create balance between solitude and togetherness, wellness and celebration, simplicity and splendour. Across seventy thousand square feet, experiences unfold with quiet precision.
                        </p>
                        <button className="btn btn--primary">
                            <span>Download Brochure</span>
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
                            <span className="experiences__tab-text">Wellness & Rejuvenation</span>
                        </button>
                        <button className="experiences__tab-button" data-tab="movement">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <span className="experiences__tab-text">Movement & Play</span>
                        </button>
                        <button className="experiences__tab-button" data-tab="culture">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <span className="experiences__tab-text">Culture & Gathering</span>
                        </button>
                        <button className="experiences__tab-button" data-tab="ease">
                            <div className="experiences__tab-icon">
                                <img src={`${assetsUrl}images/project/arrow-right.svg`} alt="" />
                            </div>
                            <span className="experiences__tab-text">Ease & Arrival</span>
                        </button>
                    </div>
                    
                    {/* Wellness & Rejuvenation Content */}
                    <div className="experiences__tab-content experiences__tab-content--active" data-content="wellness">
                        <div className="experiences__features">
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/wellness-pool.svg`} alt="Pool icon" />
                                </div>
                                <p className="feature-card__text">Temperature-controlled <br />pool for every season</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/wellness-spa-1.svg`} alt="Spa icon" />
                                </div>
                                <p className="feature-card__text">International-inspired <br />spa with hot pool and <br />therapy suites</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/wellness-steam.svg`} alt="Steam icon" />
                                </div>
                                <p className="feature-card__text">Steam and sauna retreats</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/wellness-yoga.svg`} alt="Yoga icon" />
                                </div>
                                <p className="feature-card__text">Yoga and meditation studios</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Movement & Play Content */}
                    <div className="experiences__tab-content" data-content="movement">
                        <div className="experiences__features">
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-gym.svg`} alt="Gym icon" />
                                </div>
                                <p className="feature-card__text">High-performance gym</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-training.svg`} alt="Training icon" />
                                </div>
                                <p className="feature-card__text">Functional training zones</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-sports-bar.svg`} alt="Sports Bar icon" />
                                </div>
                                <p className="feature-card__text">Sports Bar</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-zumba.svg`} alt="Zumba icon" />
                                </div>
                                <p className="feature-card__text">Zumba & yoga zones</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-bowling.svg`} alt="Bowling icon" />
                                </div>
                                <p className="feature-card__text">Bowling Alley</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-golf.svg`} alt="Golf icon" />
                                </div>
                                <p className="feature-card__text">Golf Simulator</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/movement-arena.svg`} alt="Sports arena icon" />
                                </div>
                                <p className="feature-card__text">Indoor sports arena</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Culture & Gathering Content */}
                    <div className="experiences__tab-content" data-content="culture">
                        <div className="experiences__features">
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-community.svg`} alt="Community Hall icon" />
                                </div>
                                <p className="feature-card__text">Community Hall</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-theatre.svg`} alt="Theatre icon" />
                                </div>
                                <p className="feature-card__text">Mini Theatre</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-library.svg`} alt="Library icon" />
                                </div>
                                <p className="feature-card__text">Library Lounges</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-podcast.svg`} alt="Podcast icon" />
                                </div>
                                <p className="feature-card__text">Podcast Room</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-business.svg`} alt="Business icon" />
                                </div>
                                <p className="feature-card__text">Business Centre</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-meeting.svg`} alt="Meeting icon" />
                                </div>
                                <p className="feature-card__text">Private Meeting Room</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-dining.svg`} alt="Dining icon" />
                                </div>
                                <p className="feature-card__text">Alfesco Dining</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/culture-restaurant.svg`} alt="Restaurant icon" />
                                </div>
                                <p className="feature-card__text">Restaurant & Bar</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Ease & Arrival Content */}
                    <div className="experiences__tab-content" data-content="ease">
                        <div className="experiences__features">
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/ease-vehicular.svg`} alt="Vehicular icon" />
                                </div>
                                <p className="feature-card__text">Zero vehicular movement<br />at ground level</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/ease-lift-lobby.svg`} alt="Lift lobby icon" />
                                </div>
                                <p className="feature-card__text">Fully air-conditioned,<br />triple-height grand lift lobby</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/ease-private-lift.svg`} alt="Private lift icon" />
                                </div>
                                <p className="feature-card__text">Private lift foyers for every<br />home in Gold Towers with 2 <br />apartment per core</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-card__icon">
                                    <img src={`${assetsUrl}images/project/ease-parking.svg`} alt="Parking icon" />
                                </div>
                                <p className="feature-card__text">2-levels of basement parking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location and Connectivity Section */}
            <section id="location" className="project-location">
                <div className="project-location__container">
                    <div className="project-location__header">
                        <div className="project-location__header-left">
                            <span className="project-location__label animate-text">Location and Connectivity</span>
                            <h2 className="project-location__title animate-text">A Rare Balance of Access, Convenience and Calm</h2>
                        </div>
                        <div className="project-location__header-right">
                            <p className="project-location__description animate-text">Set in Sector 12, Greater Noida - West, the address combines convenience with quietude, close to key business corridors, airports, and lifestyle avenues.</p>
                        </div>
                    </div>
                    <div className="project-location__map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37c5b5b5b5b5b5b5!2sSector%2012%2C%20Greater%20Noida%20West%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ashtech Presidential Towers Location - Sector 12, Greater Noida West">
                        </iframe>
                    </div>
                    <div className="project-location__connectivity">
                        <div className="project-location__slider">
                            <div className="project-location__slider-track">
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-expressway.svg`} alt="Expressway" />
                                    </div>
                                    <p className="project-location__item-text">20 minutes from NH 24 Expressway</p>
                                </div>
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-schools.svg`} alt="Schools" />
                                    </div>
                                    <p className="project-location__item-text">Close to leading schools and hospitals</p>
                                </div>
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-noida.svg`} alt="Noida" />
                                    </div>
                                    <p className="project-location__item-text">20 minutes from Sector 18, Greater Noida</p>
                                </div>
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-corporate.svg`} alt="Corporate" />
                                    </div>
                                    <p className="project-location__item-text">Well-connected to IT, corporate & retail hubs</p>
                                </div>
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-airport.svg`} alt="Airport" />
                                    </div>
                                    <p className="project-location__item-text">25 minutes from Noida International Airport</p>
                                </div>
                                <div className="project-location__item">
                                    <div className="project-location__item-icon">
                                        <img src={`${assetsUrl}images/project/location-airport.svg`} alt="Airport" />
                                    </div>
                                    <p className="project-location__item-text">25 minutes from Hindon Airport</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIFICATIONS SECTION */}
            <section className="specifications" id="specifications">
                <div className="specifications__header">
                    <p className="specifications__label">Specifications</p>
                    <h2 className="specifications__title">Design That Reflects the<br />Art of Perfection</h2>
                </div>
                
                <div className="specifications__cards">
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={`${assetsUrl}images/project/spec-residences.jpg`} alt="Luxurious residence interior" />
                            </div>
                            <div className="spec-card__content">
                                <h3 className="spec-card__title">Residences</h3>
                                <ul className="spec-card__list">
                                    <li>Italian marble flooring in the living, dining, and kitchen</li>
                                    <li>Hot and cold VRV air-conditioning</li>
                                    <li>Modular kitchens with premium fittings</li>
                                    <li>PU-finish wardrobes</li>
                                    <li>Ambient lighting design</li>
                                    <li>Smart home automation</li>
                                    <li>Private air-conditioned lift lobbies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={`${assetsUrl}images/project/spec-structure.jpg`} alt="Building structure and safety features" />
                            </div>
                            <div className="spec-card__content">
                                <h3 className="spec-card__title">Structure & Safety</h3>
                                <ul className="spec-card__list">
                                    <li>Aluminium crown facade system</li>
                                    <li>Ground-level free of vehicular movement</li>
                                    <li>Seven-tier security with monitored access</li>
                                    <li>TQ Cert quality assurance at every phase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image">
                                <img src={`${assetsUrl}images/project/spec-sustainability.jpg`} alt="Sustainable green spaces" />
                            </div>
                            <div className="spec-card__content">
                                <h3 className="spec-card__title">Sustainability</h3>
                                <ul className="spec-card__list">
                                    <li>Passive cooling strategies</li>
                                    <li>Cross-ventilation in every residence</li>
                                    <li>Natural light planning for lower energy load</li>
                                    <li>Materials chosen for endurance & environmental harmony</li>
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
                        <span className="project-about__label animate-text">About Ashtech Group</span>
                        <h2 className="project-about__title animate-text">A Legacy Etched in Precision and Purpose</h2>
                    </div>
                    <div className="project-about__right">
                        <p className="project-about__description animate-text">For over thirty years, the Ashtech Group has embodied engineering excellence and enduring quality, standing as a diversified force within India's construction and infrastructure landscape. Each milestone reflects a pursuit of perfection and a belief that true strength lies in detail. Every element of Ashtech Presidential Towers bears the imprint of that ethos audited by TQ Cert, executed by master craftsmen, and envisioned to remain timeless through generations.</p>
                        <button className="btn btn--primary">
                            <span>Know More</span>
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

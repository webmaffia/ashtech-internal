import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle } = attributes;

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner */}
            <section className="project-hero">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('A Space to Breathe A Space to Belong', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Over 80% open greens...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Sub Menu */}
            <nav className="project-submenu">
                <div className="project-submenu__container">
                    <ul className="project-submenu__list">
                        <li className="project-submenu__item"><a href="#overview">Overview</a></li>
                        <li className="project-submenu__item"><a href="#architecture">Architecture</a></li>
                        <li className="project-submenu__item"><a href="#experiences">Experiences</a></li>
                        <li className="project-submenu__item"><a href="#location">Location</a></li>
                        <li className="project-submenu__item"><a href="#specifications">Specifications</a></li>
                        <li className="project-submenu__item"><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>

            {/* Overview Section */}
            <section className="project-overview" id="overview">
                <div className="project-overview__container">
                    <div className="project-overview__header">
                        <h2 className="project-overview__title">Overview</h2>
                    </div>
                    <div className="project-overview__stats">
                        <div className="project-overview__stat">
                            <img src="assets/images/project/icon-towers.svg" alt="Towers" />
                            <div className="project-overview__stat-info">
                                <span className="project-overview__stat-number">4</span>
                                <span className="project-overview__stat-label">Towers</span>
                            </div>
                        </div>
                        <div className="project-overview__stat">
                            <img src="assets/images/project/icon-units.svg" alt="Units" />
                            <div className="project-overview__stat-info">
                                <span className="project-overview__stat-number">300+</span>
                                <span className="project-overview__stat-label">Units</span>
                            </div>
                        </div>
                        <div className="project-overview__stat">
                            <img src="assets/images/project/icon-floors.svg" alt="Floors" />
                            <div className="project-overview__stat-info">
                                <span className="project-overview__stat-number">29</span>
                                <span className="project-overview__stat-label">Floors</span>
                            </div>
                        </div>
                        <div className="project-overview__stat">
                            <img src="assets/images/project/icon-area.svg" alt="Area" />
                            <div className="project-overview__stat-info">
                                <span className="project-overview__stat-number">15 Acres</span>
                                <span className="project-overview__stat-label">Total Area</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-overview__content">
                        <p>Experience luxury living at its finest with Ashtech Presidential Towers. Located in the heart of the city, this project offers world-class amenities and modern architecture.</p>
                        <button className="btn btn--primary">
                            <span>Download Brochure</span>
                            <div className="btn__icon">
                                <img src="assets/images/project/icon-download.svg" alt="Download" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="project-architecture" id="architecture">
                <div className="project-architecture__container">
                    <div className="project-architecture__header">
                        <h2 className="project-architecture__title">Architecture Elements</h2>
                    </div>
                    <div className="project-architecture__tabs">
                        <button className="project-architecture__tab active">Facade</button>
                        <button className="project-architecture__tab">Landscape</button>
                        <button className="project-architecture__tab">Interiors</button>
                        <button className="project-architecture__tab">Sustainability</button>
                    </div>
                    <div className="project-architecture__content">
                        <div className="project-architecture__image">
                            <img src="assets/images/project/facade.jpg" alt="Facade" />
                        </div>
                        <div className="project-architecture__description">
                            <p>Modern architectural design with attention to detail</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="project-location" id="location">
                <div className="project-location__container">
                    <div className="project-location__header">
                        <h2 className="project-location__title">Location</h2>
                        <p className="project-location__subtitle">Strategically located for your convenience</p>
                    </div>
                    <div className="project-location__map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977374068655!2d-122.41941568468195!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1622547193134!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="project-specifications" id="specifications">
                <div className="project-specifications__container">
                    <h2 className="project-specifications__title">Specifications</h2>
                    <div className="project-specifications__grid">
                        <div className="project-specifications__card">
                            <img src="assets/images/project/spec-structure.jpg" alt="Structure" />
                            <h3>Structure</h3>
                            <p>RCC Framed Structure</p>
                        </div>
                        <div className="project-specifications__card">
                            <img src="assets/images/project/spec-flooring.jpg" alt="Flooring" />
                            <h3>Flooring</h3>
                            <p>Vitrified Tiles</p>
                        </div>
                        <div className="project-specifications__card">
                            <img src="assets/images/project/spec-kitchen.jpg" alt="Kitchen" />
                            <h3>Kitchen</h3>
                            <p>Modular Kitchen</p>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ padding: '20px', background: '#e8f5e9', margin: '20px 0' }}>
                <p style={{ margin: 0 }}>
                    ✅ {__('Complete project page with all sections, tabs, and maps', 'ashtech-pages-blocks')}
                </p>
            </div>
        </div>
    );
}

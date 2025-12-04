import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle } = attributes;

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Resources & News', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Stay updated...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Resources Tabs */}
            <section className="resources-tabs">
                <div className="resources-tabs__container">
                    <div className="resources-tabs__header">
                        <button className="resources-tabs__tab active">All News</button>
                        <button className="resources-tabs__tab">Press Releases</button>
                        <button className="resources-tabs__tab">Events</button>
                        <button className="resources-tabs__tab">Blog</button>
                    </div>
                </div>
            </section>

            {/* Featured News */}
            <section className="resources-featured">
                <div className="resources-featured__container">
                    <div className="resources-featured__card">
                        <div className="resources-featured__image">
                            <img src="assets/images/resources/news-featured.jpg" alt="Featured News" />
                        </div>
                        <div className="resources-featured__content">
                            <span className="resources-featured__category">Press Release</span>
                            <h3 className="resources-featured__title">Ashtech Launches New Residential Project</h3>
                            <p className="resources-featured__excerpt">Major announcement about upcoming luxury towers...</p>
                            <p className="resources-featured__date">December 2024</p>
                            <button className="btn btn--primary">
                                <span>Read More</span>
                                <div className="btn__icon">
                                    <img src="assets/images/resources/icon-arrow.svg" alt="Arrow" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="resources-grid">
                <div className="resources-grid__container">
                    <div className="resources-grid__items">
                        <div className="resources-grid__card">
                            <img src="assets/images/resources/news-1.jpg" alt="News 1" />
                            <div className="resources-grid__content">
                                <span className="resources-grid__category">News</span>
                                <h4 className="resources-grid__title">Presidential Towers Achieves 80% Sales</h4>
                                <p className="resources-grid__date">November 2024</p>
                                <button className="btn btn--secondary">Read More</button>
                            </div>
                        </div>
                        <div className="resources-grid__card">
                            <img src="assets/images/resources/news-2.jpg" alt="News 2" />
                            <div className="resources-grid__content">
                                <span className="resources-grid__category">Event</span>
                                <h4 className="resources-grid__title">Annual Property Exhibition 2024</h4>
                                <p className="resources-grid__date">October 2024</p>
                                <button className="btn btn--secondary">Read More</button>
                            </div>
                        </div>
                        <div className="resources-grid__card">
                            <img src="assets/images/resources/news-3.jpg" alt="News 3" />
                            <div className="resources-grid__content">
                                <span className="resources-grid__category">Blog</span>
                                <h4 className="resources-grid__title">5 Benefits of Investing in Real Estate</h4>
                                <p className="resources-grid__date">September 2024</p>
                                <button className="btn btn--secondary">Read More</button>
                            </div>
                        </div>
                        <div className="resources-grid__card">
                            <img src="assets/images/resources/news-4.jpg" alt="News 4" />
                            <div className="resources-grid__content">
                                <span className="resources-grid__category">News</span>
                                <h4 className="resources-grid__title">Ashtech Wins Excellence Award</h4>
                                <p className="resources-grid__date">August 2024</p>
                                <button className="btn btn--secondary">Read More</button>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn--primary resources-grid__load-more">
                        <span>Load More</span>
                        <div className="btn__icon">
                            <img src="assets/images/resources/icon-load.svg" alt="Load" />
                        </div>
                    </button>
                </div>
            </section>

            <div style={{ padding: '20px', background: '#e8f5e9', margin: '20px 0' }}>
                <p style={{ margin: 0 }}>
                    ✅ {__('Complete resources page with news grid and tabs', 'ashtech-pages-blocks')}
                </p>
            </div>
        </div>
    );
}

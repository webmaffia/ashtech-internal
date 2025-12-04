import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, overviewTitle, overviewContent, visionTitle, visionContent, missionTitle, missionContent } = attributes;

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
                        placeholder={__('About Ashtech', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Overview Section */}
            <section className="about-overview">
                <div className="about-overview__container">
                    <RichText
                        tagName="h2"
                        className="about-overview__title"
                        value={overviewTitle}
                        onChange={(value) => setAttributes({ overviewTitle: value })}
                        placeholder={__('Our Story', 'ashtech-pages-blocks')}
                    />
                    <RichText
                        tagName="p"
                        className="about-overview__content"
                        value={overviewContent}
                        onChange={(value) => setAttributes({ overviewContent: value })}
                        placeholder={__('Company overview...', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="about-values__container">
                    <h2 className="about-values__title">Our Legacy & Core Values</h2>
                    <div className="about-values__graphic">
                        <img src="assets/images/about/values-graphic.svg" alt="Core Values" />
                    </div>
                    <div className="about-values__grid">
                        <div className="about-values__item">
                            <img src="assets/images/about/value-integrity.svg" alt="Integrity" />
                            <h3>Integrity</h3>
                        </div>
                        <div className="about-values__item">
                            <img src="assets/images/about/value-excellence.svg" alt="Excellence" />
                            <h3>Excellence</h3>
                        </div>
                        <div className="about-values__item">
                            <img src="assets/images/about/value-innovation.svg" alt="Innovation" />
                            <h3>Innovation</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="about-vision">
                <div className="about-vision__container">
                    <div className="about-vision__card">
                        <RichText
                            tagName="h3"
                            className="about-vision__title"
                            value={visionTitle}
                            onChange={(value) => setAttributes({ visionTitle: value })}
                            placeholder={__('Our Vision', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="about-vision__content"
                            value={visionContent}
                            onChange={(value) => setAttributes({ visionContent: value })}
                            placeholder={__('Vision statement...', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="about-vision__card">
                        <RichText
                            tagName="h3"
                            className="about-vision__title"
                            value={missionTitle}
                            onChange={(value) => setAttributes({ missionTitle: value })}
                            placeholder={__('Our Mission', 'ashtech-pages-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="about-vision__content"
                            value={missionContent}
                            onChange={(value) => setAttributes({ missionContent: value })}
                            placeholder={__('Mission statement...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about-timeline">
                <div className="about-timeline__container">
                    <h2 className="about-timeline__title">Our Journey</h2>
                    <div className="about-timeline__items">
                        <div className="about-timeline__item">
                            <div className="about-timeline__year">1992</div>
                            <div className="about-timeline__content">
                                <h3>Foundation</h3>
                                <p>Company established</p>
                            </div>
                        </div>
                        <div className="about-timeline__item">
                            <div className="about-timeline__year">2000</div>
                            <div className="about-timeline__content">
                                <h3>Expansion</h3>
                                <p>First major project</p>
                            </div>
                        </div>
                        <div className="about-timeline__item">
                            <div className="about-timeline__year">2010</div>
                            <div className="about-timeline__content">
                                <h3>Growth</h3>
                                <p>Multiple successful projects</p>
                            </div>
                        </div>
                        <div className="about-timeline__item">
                            <div className="about-timeline__year">2024</div>
                            <div className="about-timeline__content">
                                <h3>Present</h3>
                                <p>Leading real estate developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="about-team">
                <div className="about-team__container">
                    <h2 className="about-team__title">Leadership Team</h2>
                    <div className="about-team__grid">
                        <div className="about-team__member">
                            <img src="assets/images/about/team-1.jpg" alt="Team Member" />
                            <h3>Director Name</h3>
                            <p>Managing Director</p>
                        </div>
                        <div className="about-team__member">
                            <img src="assets/images/about/team-2.jpg" alt="Team Member" />
                            <h3>Executive Name</h3>
                            <p>Executive Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message */}
            <section className="about-message">
                <div className="about-message__container">
                    <div className="about-message__image">
                        <img src="assets/images/about/director.jpg" alt="Director" />
                    </div>
                    <div className="about-message__content">
                        <h2 className="about-message__title">Director's Message</h2>
                        <p>Building trust and delivering excellence for over 30 years...</p>
                    </div>
                </div>
            </section>

            <div style={{ padding: '20px', background: '#e8f5e9', margin: '20px 0' }}>
                <p style={{ margin: 0 }}>
                    ✅ {__('Complete about page with timeline, values, and team', 'ashtech-pages-blocks')}
                </p>
            </div>
        </div>
    );
}

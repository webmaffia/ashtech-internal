import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewContent } = attributes;

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
                        placeholder={__('Build Your Career With Us', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Join our team...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Career Overview */}
            <section className="career-overview">
                <div className="career-overview__container">
                    <RichText
                        tagName="h2"
                        className="career-overview__title"
                        value={overviewTitle}
                        onChange={(value) => setAttributes({ overviewTitle: value })}
                        placeholder={__('Career Overview', 'ashtech-pages-blocks')}
                    />
                    <RichText
                        tagName="p"
                        className="career-overview__content"
                        value={overviewContent}
                        onChange={(value) => setAttributes({ overviewContent: value })}
                        placeholder={__('Career description...', 'ashtech-pages-blocks')}
                    />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="career-why">
                <div className="career-why__container">
                    <h2 className="career-why__title">Why Choose Ashtech?</h2>
                    <div className="career-why__grid">
                        <div className="career-why__card">
                            <img src="assets/images/career/growth.jpg" alt="Growth" />
                            <h3>Career Growth</h3>
                            <p>Opportunities to grow and advance</p>
                        </div>
                        <div className="career-why__card">
                            <img src="assets/images/career/culture.jpg" alt="Culture" />
                            <h3>Work Culture</h3>
                            <p>Positive and collaborative environment</p>
                        </div>
                        <div className="career-why__card">
                            <img src="assets/images/career/benefits.jpg" alt="Benefits" />
                            <h3>Benefits</h3>
                            <p>Competitive compensation package</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="career-openings">
                <div className="career-openings__container">
                    <h2 className="career-openings__title">Current Openings</h2>
                    <div className="career-openings__list">
                        <div className="career-openings__card">
                            <h3>Project Manager</h3>
                            <p className="career-openings__location">Ghaziabad</p>
                            <p className="career-openings__type">Full-time</p>
                            <button className="btn btn--primary">
                                <span>Apply Now</span>
                                <div className="btn__icon">
                                    <img src="assets/images/career/icon-arrow.svg" alt="Arrow" />
                                </div>
                            </button>
                        </div>
                        <div className="career-openings__card">
                            <h3>Sales Executive</h3>
                            <p className="career-openings__location">Ghaziabad</p>
                            <p className="career-openings__type">Full-time</p>
                            <button className="btn btn--primary">
                                <span>Apply Now</span>
                                <div className="btn__icon">
                                    <img src="assets/images/career/icon-arrow.svg" alt="Arrow" />
                                </div>
                            </button>
                        </div>
                        <div className="career-openings__card">
                            <h3>Marketing Manager</h3>
                            <p className="career-openings__location">Ghaziabad</p>
                            <p className="career-openings__type">Full-time</p>
                            <button className="btn btn--primary">
                                <span>Apply Now</span>
                                <div className="btn__icon">
                                    <img src="assets/images/career/icon-arrow.svg" alt="Arrow" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="career-form">
                <div className="career-form__container">
                    <h2 className="career-form__title">Apply Now</h2>
                    <form className="career-form__form">
                        <input type="text" placeholder="Full Name" className="career-form__input" />
                        <input type="email" placeholder="Email" className="career-form__input" />
                        <input type="tel" placeholder="Phone" className="career-form__input" />
                        <input type="text" placeholder="Position" className="career-form__input" />
                        <textarea placeholder="Cover Letter" className="career-form__textarea" rows="5"></textarea>
                        <input type="file" className="career-form__file" />
                        <button type="submit" className="btn btn--primary">
                            <span>Submit Application</span>
                            <div className="btn__icon">
                                <img src="assets/images/career/icon-submit.svg" alt="Submit" />
                            </div>
                        </button>
                    </form>
                </div>
            </section>

            <div style={{ padding: '20px', background: '#e8f5e9', margin: '20px 0' }}>
                <p style={{ margin: 0 }}>
                    ✅ {__('Complete career page with jobs and application form', 'ashtech-pages-blocks')}
                </p>
            </div>
        </div>
    );
}

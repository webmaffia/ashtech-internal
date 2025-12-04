import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

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

            {/* NRI Overview */}
            <section className="nri-overview">
                <div className="nri-overview__container">
                    <h2 className="nri-overview__title">Overview</h2>
                    <p className="nri-overview__content">Specialized services for Non-Resident Indians</p>
                    <button className="btn btn--primary">
                        <span>Book a Virtual Tour</span>
                        <div className="btn__icon">
                            <img src={`${assetsUrl}images/nri/icon-video.svg`} alt="Video" />
                        </div>
                    </button>
                </div>
            </section>

            {/* Why Invest */}
            <section className="nri-invest">
                <div className="nri-invest__container">
                    <h2 className="nri-invest__title">Why Invest in India?</h2>
                    <div className="nri-invest__grid">
                        <div className="nri-invest__feature">
                            <img src={`${assetsUrl}images/nri/icon-growth.svg`} alt="Growth" />
                            <h3>High Growth Potential</h3>
                            <p>Real estate market with strong returns</p>
                        </div>
                        <div className="nri-invest__feature">
                            <img src={`${assetsUrl}images/nri/icon-repatriation.svg`} alt="Repatriation" />
                            <h3>Easy Repatriation</h3>
                            <p>Simple fund transfer process</p>
                        </div>
                        <div className="nri-invest__feature">
                            <img src={`${assetsUrl}images/nri/icon-tax.svg`} alt="Tax" />
                            <h3>Tax Benefits</h3>
                            <p>Various tax exemptions available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NRI Support */}
            <section className="nri-support">
                <div className="nri-support__container">
                    <h2 className="nri-support__title">NRI Support Services</h2>
                    <div className="nri-support__list">
                        <div className="nri-support__item">
                            <img src={`${assetsUrl}images/nri/icon-documentation.svg`} alt="Documentation" />
                            <span>Documentation Assistance</span>
                        </div>
                        <div className="nri-support__item">
                            <img src={`${assetsUrl}images/nri/icon-legal.svg`} alt="Legal" />
                            <span>Legal Support</span>
                        </div>
                        <div className="nri-support__item">
                            <img src={`${assetsUrl}images/nri/icon-payment.svg`} alt="Payment" />
                            <span>Payment Plans</span>
                        </div>
                        <div className="nri-support__item">
                            <img src={`${assetsUrl}images/nri/icon-support.svg`} alt="Support" />
                            <span>24/7 Customer Support</span>
                        </div>
                    </div>
                    <button className="btn btn--primary">
                        <span>Schedule a Call</span>
                        <div className="btn__icon">
                            <img src={`${assetsUrl}images/nri/icon-phone.svg`} alt="Phone" />
                        </div>
                    </button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="nri-testimonials">
                <div className="nri-testimonials__container">
                    <h2 className="nri-testimonials__title">What Our NRI Customers Say</h2>
                    <div className="nri-testimonials__grid">
                        <div className="nri-testimonials__card">
                            <p className="nri-testimonials__quote">Excellent service for NRI investors</p>
                            <p className="nri-testimonials__author">- NRI Customer</p>
                        </div>
                    </div>
                    <button className="btn btn--primary">
                        <span>Connect with Us</span>
                        <div className="btn__icon">
                            <img src={`${assetsUrl}images/nri/icon-connect.svg`} alt="Connect" />
                        </div>
                    </button>
                </div>
            </section>

            <div style={{ padding: '20px', background: '#e8f5e9', margin: '20px 0' }}>
                <p style={{ margin: 0 }}>
                    ✅ {__('Complete NRI page with services and testimonials', 'ashtech-pages-blocks')}
                </p>
            </div>
        </div>
    );
}

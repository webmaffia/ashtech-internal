import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, subtitle, feature1Text, feature2Text, feature3Text, feature4Text, buttonText, buttonLink } = attributes;

    return (
        <section className="landing-nri">
            <div className="landing-nri__background"></div>
            <div className="landing-nri__overlay"></div>
            <div className="landing-nri__container">
                <div className="landing-nri__header">
                    <RichText.Content
                        tagName="p"
                        className="landing-nri__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-nri__title animate-text"
                        value={title}
                    />
                    <RichText.Content
                        tagName="p"
                        className="landing-nri__subtitle animate-text"
                        value={subtitle}
                    />
                </div>
                <div className="landing-nri__features">
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" />
                        </div>
                        <RichText.Content
                            tagName="p"
                            className="landing-nri__feature-text"
                            value={feature1Text}
                        />
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-support.svg" alt="Dedicated Support" />
                        </div>
                        <RichText.Content
                            tagName="p"
                            className="landing-nri__feature-text"
                            value={feature2Text}
                        />
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-residences.svg" alt="Complete Support" />
                        </div>
                        <RichText.Content
                            tagName="p"
                            className="landing-nri__feature-text"
                            value={feature3Text}
                        />
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-documentation.svg" alt="Property Management" />
                        </div>
                        <RichText.Content
                            tagName="p"
                            className="landing-nri__feature-text"
                            value={feature4Text}
                        />
                    </div>
                </div>
                <div className="landing-nri__button">
                    <a href={buttonLink} className="btn btn--primary">
                        <RichText.Content
                            tagName="span"
                            value={buttonText}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

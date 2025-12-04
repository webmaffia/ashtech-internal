import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, subtitle, feature1Text, feature2Text, feature3Text, feature4Text, buttonText, buttonLink } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-nri">
                <div className="landing-nri__background"></div>
                <div className="landing-nri__overlay"></div>
                <div className="landing-nri__container">
                    <div className="landing-nri__header">
                        <RichText
                            tagName="p"
                            className="landing-nri__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="landing-nri__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                        />
                        <RichText
                            tagName="p"
                            className="landing-nri__subtitle animate-text"
                            value={subtitle}
                            onChange={(value) => setAttributes({ subtitle: value })}
                            placeholder="Enter subtitle..."
                        />
                    </div>
                    <div className="landing-nri__features">
                        <div className="landing-nri__feature animate-text">
                            <div className="landing-nri__feature-icon">
                                <img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" />
                            </div>
                            <RichText
                                tagName="p"
                                className="landing-nri__feature-text"
                                value={feature1Text}
                                onChange={(value) => setAttributes({ feature1Text: value })}
                                placeholder="Feature 1..."
                            />
                        </div>
                        <div className="landing-nri__feature animate-text">
                            <div className="landing-nri__feature-icon">
                                <img src="assets/images/landing/icon-support.svg" alt="Dedicated Support" />
                            </div>
                            <RichText
                                tagName="p"
                                className="landing-nri__feature-text"
                                value={feature2Text}
                                onChange={(value) => setAttributes({ feature2Text: value })}
                                placeholder="Feature 2..."
                            />
                        </div>
                        <div className="landing-nri__feature animate-text">
                            <div className="landing-nri__feature-icon">
                                <img src="assets/images/landing/icon-residences.svg" alt="Complete Support" />
                            </div>
                            <RichText
                                tagName="p"
                                className="landing-nri__feature-text"
                                value={feature3Text}
                                onChange={(value) => setAttributes({ feature3Text: value })}
                                placeholder="Feature 3..."
                            />
                        </div>
                        <div className="landing-nri__feature animate-text">
                            <div className="landing-nri__feature-icon">
                                <img src="assets/images/landing/icon-documentation.svg" alt="Property Management" />
                            </div>
                            <RichText
                                tagName="p"
                                className="landing-nri__feature-text"
                                value={feature4Text}
                                onChange={(value) => setAttributes({ feature4Text: value })}
                                placeholder="Feature 4..."
                            />
                        </div>
                    </div>
                    <div className="landing-nri__button">
                        <a href={buttonLink} className="btn btn--primary">
                            <RichText
                                tagName="span"
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                placeholder="Button text..."
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

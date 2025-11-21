import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const imageUrl = attributes.imageUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/landing/nri.png';
    
    return (
        <section className="landing-nri">
            <div className="landing-nri__image">
                <img src={imageUrl} alt="NRI Desk" />
            </div>
            <div className="landing-nri__content">
                <div className="landing-nri__info">
                    <div className="landing-nri__header">
                        <RichText.Content
                            tagName="div"
                            className="landing-nri__label animate-text"
                            value={attributes.label}
                        />
                        <RichText.Content
                            tagName="h2"
                            className="landing-nri__title animate-text"
                            value={attributes.title}
                        />
                    </div>
                    <div className="landing-nri__description-container">
                        <RichText.Content
                            tagName="p"
                            className="landing-nri__description animate-text"
                            value={attributes.description}
                        />
                        <button className="btn btn--primary">
                            <RichText.Content
                                tagName="span"
                                value={attributes.buttonText}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="landing-nri__features">
                    {attributes.features.map((feature, index) => (
                        <div key={index} className="landing-nri__feature">
                            <div className="landing-nri__feature-icon">
                                <img src={`/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/landing/${feature.icon}`} alt={feature.text} />
                            </div>
                            <p className="landing-nri__feature-text animate-text">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="landing-nri__accent"></div>
        </section>
    );
}


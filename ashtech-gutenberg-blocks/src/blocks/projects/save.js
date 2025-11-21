import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const buildingImageUrl = attributes.buildingImageUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/landing/building.png';
    
    return (
        <section className="landing-projects">
            <div className="landing-projects__background"></div>
            <img src={buildingImageUrl} alt="Building" className="building" />
            <div className="landing-projects__content">
                <div className="landing-projects__header">
                    <RichText.Content
                        tagName="div"
                        className="landing-projects__label animate-text"
                        value={attributes.label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-projects__title animate-text"
                        value={attributes.title}
                    />
                </div>
                <RichText.Content
                    tagName="p"
                    className="landing-projects__description animate-text"
                    value={attributes.description}
                />
                <div className="landing-projects__buttons">
                    <button className="btn btn--primary">
                        <RichText.Content
                            tagName="span"
                            value={attributes.button1Text}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="btn btn--secondary">
                        <RichText.Content
                            tagName="span"
                            value={attributes.button2Text}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}


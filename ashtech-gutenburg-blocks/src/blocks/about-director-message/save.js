import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, quote1, quote2, quote3, signatureName, signatureTitle, directorImage } = attributes;

    return (
        <section className="about-director-message">
            <div className="about-director-message__background"></div>
            <div className="about-director-message__container">
                <div className="about-director-message__content">
                    <RichText.Content
                        tagName="h2"
                        className="about-director-message__title animate-text"
                        value={title}
                    />
                    <div className="about-director-message__text animate-text">
                        <RichText.Content tagName="p" value={quote1} />
                        <RichText.Content tagName="p" value={quote2} />
                        <RichText.Content tagName="p" value={quote3} />
                    </div>
                    <div className="about-director-message__signature animate-text">
                        <div className="about-director-message__signature-line"></div>
                        <RichText.Content
                            tagName="p"
                            className="about-director-message__signature-name"
                            value={signatureName}
                        />
                        <RichText.Content
                            tagName="p"
                            className="about-director-message__signature-title"
                            value={signatureTitle}
                        />
                    </div>
                </div>
                <div className="about-director-message__image">
                    <img src={directorImage} alt="Director" />
                </div>
            </div>
        </section>
    );
}

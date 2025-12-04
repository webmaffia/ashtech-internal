import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title, quote1, quote2, quote3, signatureName, signatureTitle, directorImage } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-director-message">
                <div className="about-director-message__background"></div>
                <div className="about-director-message__container">
                    <div className="about-director-message__content">
                        <RichText
                            tagName="h2"
                            className="about-director-message__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                        />
                        <div className="about-director-message__text animate-text">
                            <RichText
                                tagName="p"
                                value={quote1}
                                onChange={(value) => setAttributes({ quote1: value })}
                                placeholder="First quote..."
                            />
                            <RichText
                                tagName="p"
                                value={quote2}
                                onChange={(value) => setAttributes({ quote2: value })}
                                placeholder="Second quote..."
                            />
                            <RichText
                                tagName="p"
                                value={quote3}
                                onChange={(value) => setAttributes({ quote3: value })}
                                placeholder="Third quote..."
                            />
                        </div>
                        <div className="about-director-message__signature animate-text">
                            <div className="about-director-message__signature-line"></div>
                            <RichText
                                tagName="p"
                                className="about-director-message__signature-name"
                                value={signatureName}
                                onChange={(value) => setAttributes({ signatureName: value })}
                                placeholder="Name..."
                            />
                            <RichText
                                tagName="p"
                                className="about-director-message__signature-title"
                                value={signatureTitle}
                                onChange={(value) => setAttributes({ signatureTitle: value })}
                                placeholder="Title..."
                            />
                        </div>
                    </div>
                    <div className="about-director-message__image">
                        <img src={directorImage} alt="Director" />
                    </div>
                </div>
            </section>
        </div>
    );
}

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, buttonText } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-overview">
                <div className="project-about__decoration"></div>
                <div className="nri-overview__container">
                    <div className="nri-overview__left">
                        <div className="nri-overview__header">
                            <RichText tagName="span" className="nri-overview__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                            <RichText tagName="h2" className="nri-overview__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                        </div>
                    </div>
                    <div className="nri-overview__right">
                        <RichText tagName="p" className="nri-overview__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." allowedFormats={['core/bold', 'core/italic']} />
                        <div className="nri-overview__button">
                            <button className="btn btn--primary">
                                <RichText tagName="span" value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} placeholder="Button..." />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

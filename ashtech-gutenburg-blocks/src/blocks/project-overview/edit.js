import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { stat1Number, stat1Label, stat2Number, stat2Label, stat3Number, stat3Label, stat4Number, stat4Label, label, title, description, buttonText } = attributes;

    return (
        <div {...blockProps}>
            <section className="project-overview" id="overview">
                <div className="project-overview__background"></div>
                <div className="project-overview__container">
                    <div className="project-overview__left">
                        <div className="project-overview__stats">
                            <div className="project-overview__stat animate-text">
                                <RichText tagName="h3" className="project-overview__stat-number" value={stat1Number} onChange={(value) => setAttributes({ stat1Number: value })} placeholder="Stat..." />
                                <RichText tagName="p" className="project-overview__stat-label" value={stat1Label} onChange={(value) => setAttributes({ stat1Label: value })} placeholder="Label..." />
                            </div>
                            <div className="project-overview__stat animate-text">
                                <RichText tagName="h3" className="project-overview__stat-number" value={stat2Number} onChange={(value) => setAttributes({ stat2Number: value })} placeholder="Stat..." />
                                <RichText tagName="p" className="project-overview__stat-label" value={stat2Label} onChange={(value) => setAttributes({ stat2Label: value })} placeholder="Label..." />
                            </div>
                            <div className="project-overview__stat animate-text">
                                <RichText tagName="h3" className="project-overview__stat-number" value={stat3Number} onChange={(value) => setAttributes({ stat3Number: value })} placeholder="Stat..." />
                                <RichText tagName="p" className="project-overview__stat-label" value={stat3Label} onChange={(value) => setAttributes({ stat3Label: value })} placeholder="Label..." />
                            </div>
                            <div className="project-overview__stat animate-text">
                                <RichText tagName="h3" className="project-overview__stat-number" value={stat4Number} onChange={(value) => setAttributes({ stat4Number: value })} placeholder="Stat..." />
                                <RichText tagName="p" className="project-overview__stat-label" value={stat4Label} onChange={(value) => setAttributes({ stat4Label: value })} placeholder="Label..." />
                            </div>
                        </div>
                    </div>
                    <div className="project-overview__right">
                        <RichText tagName="p" className="project-overview__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="project-overview__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                        <RichText tagName="p" className="project-overview__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        <button className="btn btn--primary downloadCta">
                            <RichText tagName="span" value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} placeholder="Button..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

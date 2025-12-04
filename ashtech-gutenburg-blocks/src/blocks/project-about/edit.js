import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, buttonText } = attributes;

    return (
        <div {...blockProps}>
            <section id="about" className="project-about">
                <div className="project-about__decoration"></div>
                <div className="project-about__container">
                    <div className="project-about__left">
                        <RichText tagName="span" className="project-about__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="project-about__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    <div className="project-about__right">
                        <RichText tagName="p" className="project-about__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        <button className="btn btn--primary">
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

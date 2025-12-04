import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, text1, text2, buttonText } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-overview">
                <div className="landing-overview__container">
                    <div className="landing-overview__left">
                        <RichText
                            tagName="p"
                            className="landing-overview__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="landing-overview__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                        />
                    </div>
                    <div className="landing-overview__right">
                        <RichText
                            tagName="p"
                            className="landing-overview__text animate-text"
                            value={text1}
                            onChange={(value) => setAttributes({ text1: value })}
                            placeholder="Enter first paragraph..."
                        />
                        <RichText
                            tagName="p"
                            className="landing-overview__text animate-text"
                            value={text2}
                            onChange={(value) => setAttributes({ text2: value })}
                            placeholder="Enter second paragraph..."
                        />
                        <button className="btn btn--primary downloadCta">
                            <RichText
                                tagName="span"
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                placeholder="Button text..."
                            />
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

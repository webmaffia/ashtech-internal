import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-overview',
    });

    return (
        <section {...blockProps}>
            <div className="landing-overview__interaction">
                <div className="landing-overview__decoration"></div>
                <div className="landing-overview__content">
                    <div className="landing-overview__header">
                        <div className="landing-overview__label">
                            <RichText
                                tagName="span"
                                className="animate-text"
                                value={attributes.label}
                                onChange={(value) => setAttributes({ label: value })}
                                placeholder={__('Label...', 'ashtech-blocks')}
                            />
                        </div>
                        <RichText
                            tagName="h2"
                            className="landing-overview__title animate-text"
                            value={attributes.title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Enter title...', 'ashtech-blocks')}
                        />
                    </div>
                    <RichText
                        tagName="p"
                        className="landing-overview__description animate-text"
                        value={attributes.description}
                        onChange={(value) => setAttributes({ description: value })}
                        placeholder={__('Enter description...', 'ashtech-blocks')}
                    />
                    <div className="landing-overview__button">
                        <button className="btn btn--primary">
                            <RichText
                                tagName="span"
                                value={attributes.buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                placeholder={__('Button text...', 'ashtech-blocks')}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="landing-overview__gradient"></div>
            </div>
        </section>
    );
}


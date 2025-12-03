import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-nri',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    const updateFeature = (index, field, value) => {
        const newFeatures = [...attributes.features];
        newFeatures[index][field] = value;
        setAttributes({ features: newFeatures });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Features Settings', 'ashtech-blocks')}>
                    {attributes.features.map((feature, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                            <h4>{__('Feature', 'ashtech-blocks')} {index + 1}</h4>
                            <TextControl
                                label={__('Icon Filename', 'ashtech-blocks')}
                                value={feature.icon}
                                onChange={(val) => updateFeature(index, 'icon', val)}
                            />
                            <TextControl
                                label={__('Text', 'ashtech-blocks')}
                                value={feature.text}
                                onChange={(val) => updateFeature(index, 'text', val)}
                            />
                        </div>
                    ))}
                </PanelBody>
            </InspectorControls>

            <section {...blockProps}>
                <div className="landing-nri__image">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    imageUrl: media.url,
                                    imageId: media.id,
                                });
                            }}
                            allowedTypes={['image']}
                            value={attributes.imageId}
                            render={({ open }) => (
                                <div style={{ position: 'relative' }}>
                                    {attributes.imageUrl ? (
                                        <>
                                            <img src={attributes.imageUrl} alt="NRI Desk" />
                                            <Button
                                                onClick={open}
                                                variant="secondary"
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '10px',
                                                    zIndex: 10
                                                }}
                                            >
                                                {__('Change Image', 'ashtech-blocks')}
                                            </Button>
                                        </>
                                    ) : (
                                        <Button onClick={open} variant="primary">
                                            {__('Upload NRI Image', 'ashtech-blocks')}
                                        </Button>
                                    )}
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                    {!attributes.imageUrl && (
                        <img src={`${pluginUrl}assets/images/landing/nri.png`} alt="NRI Desk (Default)" style={{ opacity: 0.5 }} />
                    )}
                </div>
                <div className="landing-nri__content">
                    <div className="landing-nri__info">
                        <div className="landing-nri__header">
                            <RichText
                                tagName="div"
                                className="landing-nri__label animate-text"
                                value={attributes.label}
                                onChange={(value) => setAttributes({ label: value })}
                                placeholder={__('Label...', 'ashtech-blocks')}
                            />
                            <RichText
                                tagName="h2"
                                className="landing-nri__title animate-text"
                                value={attributes.title}
                                onChange={(value) => setAttributes({ title: value })}
                                placeholder={__('Title...', 'ashtech-blocks')}
                            />
                        </div>
                        <div className="landing-nri__description-container">
                            <RichText
                                tagName="p"
                                className="landing-nri__description animate-text"
                                value={attributes.description}
                                onChange={(value) => setAttributes({ description: value })}
                                placeholder={__('Description...', 'ashtech-blocks')}
                            />
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
                    <div className="landing-nri__features">
                        {attributes.features.map((feature, index) => (
                            <div key={index} className="landing-nri__feature">
                                <div className="landing-nri__feature-icon">
                                    <img src={`${pluginUrl}assets/images/landing/${feature.icon}`} alt={feature.text} />
                                </div>
                                <p className="landing-nri__feature-text animate-text">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="landing-nri__accent"></div>
            </section>
        </>
    );
}


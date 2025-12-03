import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-values',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    const updateValue = (index, field, value) => {
        const newValues = [...attributes.values];
        newValues[index][field] = value;
        setAttributes({ values: newValues });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Values Settings', 'ashtech-blocks')}>
                    {attributes.values.map((value, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                            <h4>{__('Value', 'ashtech-blocks')} {index + 1}</h4>
                            <TextControl
                                label={__('Title', 'ashtech-blocks')}
                                value={value.title}
                                onChange={(val) => updateValue(index, 'title', val)}
                            />
                            <TextareaControl
                                label={__('Description', 'ashtech-blocks')}
                                value={value.description}
                                onChange={(val) => updateValue(index, 'description', val)}
                            />
                        </div>
                    ))}
                </PanelBody>
            </InspectorControls>

            <section {...blockProps}>
                <div className="landing-values__container">
                    <div className="landing-values__header">
                        <RichText
                            tagName="div"
                            className="landing-values__label animate-text"
                            value={attributes.label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder={__('Label...', 'ashtech-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-values__title animate-text-rtl"
                            value={attributes.title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Title...', 'ashtech-blocks')}
                        />
                    </div>
                    <div className="landing-values__graphic">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        graphicImageUrl: media.url,
                                        graphicImageId: media.id,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={attributes.graphicImageId}
                                render={({ open }) => (
                                    <div style={{ position: 'relative', textAlign: 'center' }}>
                                        {attributes.graphicImageUrl ? (
                                            <>
                                                <img src={attributes.graphicImageUrl} alt="Core Values" />
                                                <Button
                                                    onClick={open}
                                                    variant="secondary"
                                                    style={{
                                                        position: 'absolute',
                                                        top: '10px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        zIndex: 10
                                                    }}
                                                >
                                                    {__('Change', 'ashtech-blocks')}
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <img src={`${pluginUrl}assets/images/landing/values-graphic.svg`} alt="Core Values (Default)" style={{ opacity: 0.5 }} />
                                                <Button
                                                    onClick={open}
                                                    variant="primary"
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        zIndex: 10
                                                    }}
                                                >
                                                    {__('Upload Graphic', 'ashtech-blocks')}
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                )}
                            />
                        </MediaUploadCheck>
                    </div>
                    <div className="landing-values__items">
                        {attributes.values.slice(0, 3).map((value, index) => (
                            <div key={index} className={`landing-values__item landing-values__item--left landing-values__item--${index + 1}`} data-value={index}>
                                <h3 className="landing-values__item-title">{value.title}</h3>
                                <p className="landing-values__item-description">{value.description}</p>
                            </div>
                        ))}
                        {attributes.values.slice(3, 6).map((value, index) => (
                            <div key={index + 3} className={`landing-values__item landing-values__item--right landing-values__item--${index + 4}`} data-value={index + 3}>
                                <h3 className="landing-values__item-title">{value.title}</h3>
                                <p className="landing-values__item-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


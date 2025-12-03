import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-projects',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    return (
        <section {...blockProps}>
            <div className="landing-projects__background"></div>
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={(media) => {
                        setAttributes({
                            buildingImageUrl: media.url,
                            buildingImageId: media.id,
                        });
                    }}
                    allowedTypes={['image']}
                    value={attributes.buildingImageId}
                    render={({ open }) => (
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            {attributes.buildingImageUrl ? (
                                <>
                                    <img src={attributes.buildingImageUrl} alt="Building" className="building" />
                                    <Button
                                        onClick={open}
                                        variant="secondary"
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            zIndex: 10
                                        }}
                                    >
                                        {__('Change', 'ashtech-blocks')}
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <img src={`${pluginUrl}assets/images/landing/building.png`} alt="Building (Default)" className="building" style={{ opacity: 0.5 }} />
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
                                        {__('Upload Building Image', 'ashtech-blocks')}
                                    </Button>
                                </>
                            )}
                        </div>
                    )}
                />
            </MediaUploadCheck>
            <div className="landing-projects__content">
                <div className="landing-projects__header">
                    <RichText
                        tagName="div"
                        className="landing-projects__label animate-text"
                        value={attributes.label}
                        onChange={(value) => setAttributes({ label: value })}
                        placeholder={__('Label...', 'ashtech-blocks')}
                    />
                    <RichText
                        tagName="h2"
                        className="landing-projects__title animate-text"
                        value={attributes.title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Title...', 'ashtech-blocks')}
                    />
                </div>
                <RichText
                    tagName="p"
                    className="landing-projects__description animate-text"
                    value={attributes.description}
                    onChange={(value) => setAttributes({ description: value })}
                    placeholder={__('Description...', 'ashtech-blocks')}
                />
                <div className="landing-projects__buttons">
                    <button className="btn btn--primary">
                        <RichText
                            tagName="span"
                            value={attributes.button1Text}
                            onChange={(value) => setAttributes({ button1Text: value })}
                            placeholder={__('Button 1 text...', 'ashtech-blocks')}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="btn btn--secondary">
                        <RichText
                            tagName="span"
                            value={attributes.button2Text}
                            onChange={(value) => setAttributes({ button2Text: value })}
                            placeholder={__('Button 2 text...', 'ashtech-blocks')}
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


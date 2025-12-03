import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'header',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    const onSelectLogo = (media) => {
        setAttributes({
            logoUrl: media.url,
            logoId: media.id,
        });
    };

    const onSelectMenuIcon = (media) => {
        setAttributes({
            menuIconUrl: media.url,
            menuIconId: media.id,
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Header Settings', 'ashtech-blocks')}>
                    <h3>{__('Logo', 'ashtech-blocks')}</h3>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectLogo}
                            allowedTypes={['image', 'image/svg+xml']}
                            value={attributes.logoId}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {attributes.logoUrl ? __('Change Logo', 'ashtech-blocks') : __('Upload Logo', 'ashtech-blocks')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    {attributes.logoUrl && (
                        <Button
                            onClick={() => setAttributes({ logoUrl: '', logoId: null })}
                            isDestructive
                            style={{ marginTop: '10px' }}
                        >
                            {__('Remove Logo', 'ashtech-blocks')}
                        </Button>
                    )}

                    <hr style={{ margin: '20px 0' }} />

                    <h3>{__('Menu Icon', 'ashtech-blocks')}</h3>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectMenuIcon}
                            allowedTypes={['image', 'image/svg+xml']}
                            value={attributes.menuIconId}
                            render={({ open }) => (
                                <Button onClick={open} isSecondary>
                                    {attributes.menuIconUrl ? __('Change Icon', 'ashtech-blocks') : __('Upload Icon', 'ashtech-blocks')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>

            <header {...blockProps}>
                <div className="header__logo">
                    {attributes.logoUrl ? (
                        <img 
                            src={attributes.logoUrl} 
                            alt="Logo" 
                        />
                    ) : (
                        <img 
                            src={`${pluginUrl}assets/images/landing/logo.svg`} 
                            alt="Logo (Default)" 
                            style={{ opacity: 0.5 }} 
                        />
                    )}
                </div>
                <div className="header__menu">
                    <RichText
                        tagName="span"
                        className="header__menu-text"
                        value={attributes.menuText}
                        onChange={(value) => setAttributes({ menuText: value })}
                        placeholder={__('Menu text...', 'ashtech-blocks')}
                    />
                    <img 
                        src={attributes.menuIconUrl} 
                        alt="Menu Icon" 
                        className="hero-2__menu-icon" 
                    />
                </div>
            </header>
        </>
    );
}


import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-testimonials',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    const updateTestimonial = (index, field, value) => {
        const newTestimonials = [...attributes.testimonials];
        newTestimonials[index][field] = value;
        setAttributes({ testimonials: newTestimonials });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Testimonials Settings', 'ashtech-blocks')}>
                    {attributes.testimonials.map((testimonial, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                            <h4>{__('Testimonial', 'ashtech-blocks')} {index + 1}</h4>
                            <TextareaControl
                                label={__('Quote', 'ashtech-blocks')}
                                value={testimonial.quote}
                                onChange={(val) => updateTestimonial(index, 'quote', val)}
                            />
                            <TextControl
                                label={__('Name', 'ashtech-blocks')}
                                value={testimonial.name}
                                onChange={(val) => updateTestimonial(index, 'name', val)}
                            />
                            <TextControl
                                label={__('Role', 'ashtech-blocks')}
                                value={testimonial.role}
                                onChange={(val) => updateTestimonial(index, 'role', val)}
                            />
                        </div>
                    ))}
                </PanelBody>
            </InspectorControls>

            <section {...blockProps}>
                <div className="landing-testimonials__container">
                    <div className="landing-testimonials__header">
                        <RichText
                            tagName="div"
                            className="landing-testimonials__label animate-text"
                            value={attributes.label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder={__('Label...', 'ashtech-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-testimonials__title animate-text"
                            value={attributes.title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Title...', 'ashtech-blocks')}
                        />
                    </div>
                    <div className="landing-testimonials__slider-wrapper">
                        <div className="landing-testimonials__content animate-text-rtl">
                            <div className="landing-testimonials__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                backgroundImageUrl: media.url,
                                                backgroundImageId: media.id,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={attributes.backgroundImageId}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                {attributes.backgroundImageUrl ? (
                                                    <>
                                                        <img src={attributes.backgroundImageUrl} alt="Testimonials Background" />
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
                                                        <img src={`${pluginUrl}assets/images/landing/testimonial-bg.jpg`} alt="Testimonials Background (Default)" style={{ opacity: 0.5 }} />
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
                                                            {__('Upload Background', 'ashtech-blocks')}
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="landing-testimonials__card">
                                <div className="landing-testimonials__card-content">
                                    <div className="landing-testimonials__stars">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="landing-testimonials__star" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path d="M13 2.5L15.7 9.5L23 10.5L18 15.5L19 23L13 19.5L7 23L8 15.5L3 10.5L10.3 9.5L13 2.5Z" fill="#720C10"/>
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="landing-testimonials__text-content">
                                        <p className="landing-testimonials__quote">"{attributes.testimonials[0].quote}"</p>
                                        <div className="landing-testimonials__author">
                                            <div className="landing-testimonials__author-name">
                                                <span>{attributes.testimonials[0].name}</span>
                                            </div>
                                            <span className="landing-testimonials__author-role">{attributes.testimonials[0].role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ marginTop: '20px', color: '#666', textAlign: 'center' }}>
                            {__('Slider will work on frontend', 'ashtech-blocks')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}


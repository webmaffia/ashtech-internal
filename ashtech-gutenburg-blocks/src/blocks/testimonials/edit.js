import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-testimonials',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';
    
    // State to track which testimonial is being previewed
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

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
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', background: selectedTestimonial === index ? '#f0f8ff' : '#fff' }}>
                            <h4>{__('Testimonial', 'ashtech-blocks')} {index + 1}</h4>
                            <TextareaControl
                                label={__('Quote', 'ashtech-blocks')}
                                value={testimonial.quote}
                                onChange={(val) => updateTestimonial(index, 'quote', val)}
                                rows={4}
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
                            <Button
                                variant="secondary"
                                onClick={() => setSelectedTestimonial(index)}
                                style={{ marginTop: '10px' }}
                            >
                                {selectedTestimonial === index ? '✓ Previewing' : 'Preview This'}
                            </Button>
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
                    
                    {/* Testimonial Selector */}
                    <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(0,123,255,0.1)', borderRadius: '4px', marginBottom: '20px' }}>
                        <p style={{ margin: '0 0 10px 0', color: '#007cba', fontWeight: 'bold' }}>
                            {__('Preview Testimonial:', 'ashtech-blocks')}
                        </p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            {attributes.testimonials.map((_, index) => (
                                <Button
                                    key={index}
                                    variant={selectedTestimonial === index ? 'primary' : 'secondary'}
                                    onClick={() => setSelectedTestimonial(index)}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                        </div>
                        <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#666' }}>
                            {__('Click buttons above to preview different testimonials', 'ashtech-blocks')}
                            <br />
                            {__('Edit all testimonials in the right sidebar →', 'ashtech-blocks')}
                        </p>
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
                                        <p className="landing-testimonials__quote">"{attributes.testimonials[selectedTestimonial].quote}"</p>
                                        <div className="landing-testimonials__author">
                                            <div className="landing-testimonials__author-name">
                                                <span>{attributes.testimonials[selectedTestimonial].name}</span>
                                            </div>
                                            <span className="landing-testimonials__author-role">{attributes.testimonials[selectedTestimonial].role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ marginTop: '20px', color: '#666', textAlign: 'center', fontSize: '14px', background: 'rgba(0,123,255,0.05)', padding: '10px', borderRadius: '4px' }}>
                            {__('All 3 testimonials will auto-play on the frontend. Use Inspector Controls (→) to edit all testimonials.', 'ashtech-blocks')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}


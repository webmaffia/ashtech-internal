import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title, scrollText } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-banner" style={{ background: '#1a1a1a', padding: '60px 20px', position: 'relative' }}>
                <div className="landing-banner__overlay"></div>
                <div className="landing-banner__content" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <RichText
                        tagName="h1"
                        className="landing-banner__title"
                        value={title}
                        onChange={(newTitle) => setAttributes({ title: newTitle })}
                        placeholder="Enter banner title..."
                        style={{ color: 'white', fontSize: '48px', marginBottom: '20px' }}
                    />
                    <RichText
                        tagName="p"
                        className="landing-banner__scroll"
                        value={scrollText}
                        onChange={(newScroll) => setAttributes({ scrollText: newScroll })}
                        placeholder="Enter scroll text..."
                        style={{ color: 'white', fontSize: '14px' }}
                    />
                    <p style={{ 
                        marginTop: '30px', 
                        padding: '15px', 
                        background: 'rgba(255,255,255,0.1)', 
                        borderRadius: '4px',
                        color: 'white',
                        fontSize: '12px'
                    }}>
                        ℹ️ Click text above to edit. SVG animation will show on frontend.
                    </p>
                </div>
            </section>
        </div>
    );
}

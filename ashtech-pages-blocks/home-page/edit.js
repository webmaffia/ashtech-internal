import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, mainContent } = attributes;

    return (
        <div {...useBlockProps()}>
            <div style={{ padding: '20px', border: '2px dashed #ccc' }}>
                <h3 style={{ background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' }}>
                    {__('🏠 Home Page Block (Landing Page)', 'ashtech-pages-blocks')}
                </h3>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Banner Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Nature and Architecture in Perfect Sync', 'ashtech-pages-blocks')}
                        style={{ fontSize: '2em', color: '#333' }}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Overview Description:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="p"
                        value={mainContent}
                        onChange={(value) => setAttributes({ mainContent: value })}
                        placeholder={__('Ashtech Presidential Towers description...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        ✅ <strong>{__('Complete landing page included:', 'ashtech-pages-blocks')}</strong>
                        {__(' Banner with SVG animation, Overview, Core Values, Projects, NRI Desk, Awards, and Testimonials sections.', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </div>
        </div>
    );
}


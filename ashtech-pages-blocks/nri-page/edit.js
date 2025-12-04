import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewDescription } = attributes;

    return (
        <div {...useBlockProps()}>
            <div style={{ padding: '20px', border: '2px dashed #ccc' }}>
                <h3 style={{ background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' }}>
                    {__('🌏 NRI Corner Page Block', 'ashtech-pages-blocks')}
                </h3>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Ashtech Presidential Towers', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Subtitle:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="p"
                        value={heroSubtitle}
                        onChange={(value) => setAttributes({ heroSubtitle: value })}
                        placeholder={__('Invest in India\'s Finest Address...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Overview Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h2"
                        value={overviewTitle}
                        onChange={(value) => setAttributes({ overviewTitle: value })}
                        placeholder={__('An Investment Opportunity Like None Other!', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Overview Description:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="p"
                        value={overviewDescription}
                        onChange={(value) => setAttributes({ overviewDescription: value })}
                        placeholder={__('Discover a home that brings you closer...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        ✅ <strong>{__('Complete NRI page included:', 'ashtech-pages-blocks')}</strong>
                        {__(' Hero, Overview, Investment Benefits, Why Choose section, NRI Support Services, Testimonials, and CTA sections.', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </div>
        </div>
    );
}


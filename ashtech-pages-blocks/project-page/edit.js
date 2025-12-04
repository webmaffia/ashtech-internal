import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewContent } = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        });
    };

    return (
        <div {...useBlockProps()}>
            <div style={{ padding: '20px', border: '2px dashed #ccc' }}>
                <h3 style={{ background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' }}>
                    {__('🏗️ Project Page Block', 'ashtech-pages-blocks')}
                </h3>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('A Space to Breathe, A Space to Belong', 'ashtech-pages-blocks')}
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
                        placeholder={__('Over 80% open greens...', 'ashtech-pages-blocks')}
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
                        placeholder={__('Crafted for Those Who Value the Calm Within', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Overview Content:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="div"
                        multiline="p"
                        value={overviewContent}
                        onChange={(value) => setAttributes({ overviewContent: value })}
                        placeholder={__('Enter overview description...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        ✅ <strong>{__('Complete project page included:', 'ashtech-pages-blocks')}</strong>
                        {__(' Hero, Sub-menu, Overview, Architecture (4 Elements), Experiences, Location with map, Specifications, and About sections.', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </div>
        </div>
    );
}


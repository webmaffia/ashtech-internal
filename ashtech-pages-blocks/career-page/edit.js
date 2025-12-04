import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewText } = attributes;

    return (
        <div {...useBlockProps()}>
            <div style={{ padding: '20px', border: '2px dashed #ccc' }}>
                <h3 style={{ background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' }}>
                    {__('💼 Career Page Block', 'ashtech-pages-blocks')}
                </h3>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Careers at The Ashtech Presidential Towers', 'ashtech-pages-blocks')}
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
                        placeholder={__('Come, Build the Future With Us!', 'ashtech-pages-blocks')}
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
                        placeholder={__('Join a Legacy of Excellence', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Overview Text:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="div"
                        multiline="p"
                        value={overviewText}
                        onChange={(value) => setAttributes({ overviewText: value })}
                        placeholder={__('Enter overview description...', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        ✅ <strong>{__('Complete career page included:', 'ashtech-pages-blocks')}</strong>
                        {__(' Hero, Overview, Why Choose Us, Life at Ashtech, Job Openings, Career Form, and Assurance sections.', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </div>
        </div>
    );
}


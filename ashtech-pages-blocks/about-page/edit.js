import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitleMain, heroSubtitleText, overviewTitle, overviewText1, overviewText2 } = attributes;

    return (
        <div {...useBlockProps()}>
            <div style={{ padding: '20px', border: '2px dashed #ccc' }}>
                <h3 style={{ background: '#667eea', color: 'white', padding: '15px', marginBottom: '20px' }}>
                    {__('ℹ️ About Us Page Block', 'ashtech-pages-blocks')}
                </h3>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Title:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="h1"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('From Building the Nation to Crafting Its Finest Homes', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Subtitle Main:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="p"
                        value={heroSubtitleMain}
                        onChange={(value) => setAttributes({ heroSubtitleMain: value })}
                        placeholder={__('Ashtech Presidential Towers by Ashtech Group', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ marginBottom: '30px', padding: '20px', background: '#f5f5f5' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>
                        {__('Hero Subtitle Text:', 'ashtech-pages-blocks')}
                    </label>
                    <RichText
                        tagName="p"
                        value={heroSubtitleText}
                        onChange={(value) => setAttributes({ heroSubtitleText: value })}
                        placeholder={__('A legacy of trust and precision...', 'ashtech-pages-blocks')}
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
                        placeholder={__('From Foundations of Strength to Towers of Excellence', 'ashtech-pages-blocks')}
                    />
                </div>

                <div style={{ padding: '15px', background: '#e8f5e9', border: '1px solid #4caf50' }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        ✅ <strong>{__('Complete about page included:', 'ashtech-pages-blocks')}</strong>
                        {__(' Hero, Overview, Legacy & Values, Vision & Mission, History Timeline, Leadership Team, Director\'s Message, and Projects sections.', 'ashtech-pages-blocks')}
                    </p>
                </div>
            </div>
        </div>
    );
}


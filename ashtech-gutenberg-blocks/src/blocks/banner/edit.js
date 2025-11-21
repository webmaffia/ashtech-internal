import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-banner',
    });

    return (
        <section {...blockProps}>
            <div className="landing-banner__overlay"></div>
            <div className="landing-banner__content">
                <RichText
                    tagName="h1"
                    className="landing-banner__title"
                    value={attributes.title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__('Enter banner title...', 'ashtech-blocks')}
                    allowedFormats={['core/bold', 'core/italic']}
                />
                <RichText
                    tagName="p"
                    className="landing-banner__scroll"
                    value={attributes.scrollText}
                    onChange={(value) => setAttributes({ scrollText: value })}
                    placeholder={__('(SCROLL)', 'ashtech-blocks')}
                />
            </div>
            <div className="landing-banner__svg-placeholder">
                <p style={{ textAlign: 'center', padding: '60px 20px', color: '#fff' }}>
                    {__('SVG Animation will appear on frontend', 'ashtech-blocks')}
                </p>
            </div>
        </section>
    );
}


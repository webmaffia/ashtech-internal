import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-awards',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    const updateAward = (index, value) => {
        const newAwards = [...attributes.awards];
        newAwards[index].text = value;
        setAttributes({ awards: newAwards });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Awards Settings', 'ashtech-blocks')}>
                    {attributes.awards.map((award, index) => (
                        <TextControl
                            key={index}
                            label={__('Award', 'ashtech-blocks') + ' ' + (index + 1)}
                            value={award.text}
                            onChange={(val) => updateAward(index, val)}
                        />
                    ))}
                </PanelBody>
            </InspectorControls>

            <section {...blockProps}>
                <div className="landing-awards__container">
                    <div className="landing-awards__header">
                        <RichText
                            tagName="div"
                            className="landing-awards__label animate-text"
                            value={attributes.label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder={__('Label...', 'ashtech-blocks')}
                        />
                        <RichText
                            tagName="h2"
                            className="landing-awards__title animate-text"
                            value={attributes.title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Title...', 'ashtech-blocks')}
                        />
                        <RichText
                            tagName="p"
                            className="landing-awards__description animate-text"
                            value={attributes.description}
                            onChange={(value) => setAttributes({ description: value })}
                            placeholder={__('Description...', 'ashtech-blocks')}
                        />
                    </div>
                    <div className="landing-awards__grid">
                        {attributes.awards.map((award, index) => (
                            <div key={index} className="landing-awards__item">
                                <div className="landing-awards__item-images">
                                    <img src={`${pluginUrl}assets/images/landing/award-laurel-left.svg`} alt="Award" className="landing-awards__laurel landing-awards__laurel--left" />
                                    <img src={`${pluginUrl}assets/images/landing/award-laurel-right.svg`} alt="Award" className="landing-awards__laurel landing-awards__laurel--right" />
                                </div>
                                <p className="landing-awards__item-text animate-text">{award.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


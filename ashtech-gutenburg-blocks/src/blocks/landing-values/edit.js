import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, value1Title, value1Desc, value2Title, value2Desc, value3Title, value3Desc, value4Title, value4Desc, value5Title, value5Desc, value6Title, value6Desc, graphicUrl } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-values">
                <div className="landing-values__container">
                    <div className="landing-values__text-content">
                        <RichText
                            tagName="p"
                            className="landing-values__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="landing-values__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                        />

                        <div className="landing-values__grid">
                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value1Title}
                                    onChange={(value) => setAttributes({ value1Title: value })}
                                    placeholder="Value 1 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value1Desc}
                                    onChange={(value) => setAttributes({ value1Desc: value })}
                                    placeholder="Value 1 description..."
                                />
                            </div>

                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value2Title}
                                    onChange={(value) => setAttributes({ value2Title: value })}
                                    placeholder="Value 2 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value2Desc}
                                    onChange={(value) => setAttributes({ value2Desc: value })}
                                    placeholder="Value 2 description..."
                                />
                            </div>

                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value3Title}
                                    onChange={(value) => setAttributes({ value3Title: value })}
                                    placeholder="Value 3 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value3Desc}
                                    onChange={(value) => setAttributes({ value3Desc: value })}
                                    placeholder="Value 3 description..."
                                />
                            </div>

                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value4Title}
                                    onChange={(value) => setAttributes({ value4Title: value })}
                                    placeholder="Value 4 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value4Desc}
                                    onChange={(value) => setAttributes({ value4Desc: value })}
                                    placeholder="Value 4 description..."
                                />
                            </div>

                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value5Title}
                                    onChange={(value) => setAttributes({ value5Title: value })}
                                    placeholder="Value 5 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value5Desc}
                                    onChange={(value) => setAttributes({ value5Desc: value })}
                                    placeholder="Value 5 description..."
                                />
                            </div>

                            <div className="landing-values__item animate-text">
                                <RichText
                                    tagName="h3"
                                    className="landing-values__item-title"
                                    value={value6Title}
                                    onChange={(value) => setAttributes({ value6Title: value })}
                                    placeholder="Value 6 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-values__item-desc"
                                    value={value6Desc}
                                    onChange={(value) => setAttributes({ value6Desc: value })}
                                    placeholder="Value 6 description..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="landing-values__graphic">
                        <img src={graphicUrl} alt="Building illustration" className="landing-values__image" />
                        <p style={{ fontSize: '12px', marginTop: '10px', textAlign: 'center', color: '#666' }}>
                            Graphic image path: {graphicUrl}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

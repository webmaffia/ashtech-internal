import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, text1, text2 } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-overview">
                <div className="project-about__decoration"></div>
                <div className="about-overview__container">
                    <div className="about-overview__left">
                        <RichText
                            tagName="p"
                            className="about-overview__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="about-overview__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                            allowedFormats={['core/bold', 'core/italic']}
                        />
                    </div>
                    <div className="about-overview__right">
                        <RichText
                            tagName="p"
                            className="about-overview__text animate-text"
                            value={text1}
                            onChange={(value) => setAttributes({ text1: value })}
                            placeholder="Enter first paragraph..."
                        />
                        <RichText
                            tagName="p"
                            className="about-overview__text animate-text"
                            value={text2}
                            onChange={(value) => setAttributes({ text2: value })}
                            placeholder="Enter second paragraph..."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

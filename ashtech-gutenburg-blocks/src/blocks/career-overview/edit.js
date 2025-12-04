import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, text1, text2 } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-overview">
                <div className="project-about__decoration"></div>
                <div className="career-overview__container">
                    <div className="career-overview__left">
                        <RichText tagName="p" className="career-overview__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="career-overview__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    <div className="career-overview__right">
                        <div className="career-overview__text animate-text">
                            <RichText tagName="p" value={text1} onChange={(value) => setAttributes({ text1: value })} placeholder="Paragraph 1..." />
                            <RichText tagName="p" value={text2} onChange={(value) => setAttributes({ text2: value })} placeholder="Paragraph 2..." />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

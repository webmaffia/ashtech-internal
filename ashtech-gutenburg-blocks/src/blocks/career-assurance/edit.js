import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, text } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-assurance">
                <div className="project-about__decoration"></div>
                <div className="career-assurance__container">
                    <div className="career-assurance__left">
                        <RichText tagName="p" className="career-assurance__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h3" className="career-assurance__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    <div className="career-assurance__right">
                        <RichText tagName="p" className="career-assurance__text animate-text" value={text} onChange={(value) => setAttributes({ text: value })} placeholder="Text..." />
                    </div>
                </div>
            </section>
        </div>
    );
}

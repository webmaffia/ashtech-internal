import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title } = attributes;

    return (
        <div {...blockProps}>
            <section className="project-hero">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder="Enter hero title..."
                    />
                </div>
            </section>
        </div>
    );
}

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-hero">
                <div className="about-hero__overlay"></div>
                <div className="about-hero__content">
                    <RichText
                        tagName="h1"
                        className="about-hero__title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder="Enter hero title..."
                    />
                </div>
            </section>
        </div>
    );
}

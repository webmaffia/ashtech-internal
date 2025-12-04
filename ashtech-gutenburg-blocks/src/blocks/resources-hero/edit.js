import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title } = attributes;

    return (
        <div {...blockProps}>
            <section className="resources-hero">
                <div className="resources-hero__overlay"></div>
                <div className="resources-hero__content">
                    <RichText tagName="h1" className="resources-hero__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Enter title..." />
                </div>
            </section>
        </div>
    );
}

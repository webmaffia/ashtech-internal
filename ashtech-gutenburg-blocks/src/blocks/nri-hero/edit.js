import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-hero">
                <div className="nri-hero__overlay"></div>
                <div className="nri-hero__content">
                    <RichText tagName="h1" className="nri-hero__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Enter hero title..." />
                </div>
            </section>
        </div>
    );
}

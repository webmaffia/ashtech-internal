import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="nri-hero">
            <div className="nri-hero__overlay"></div>
            <div className="nri-hero__content">
                <RichText.Content tagName="h1" className="nri-hero__title" value={title} />
            </div>
        </section>
    );
}

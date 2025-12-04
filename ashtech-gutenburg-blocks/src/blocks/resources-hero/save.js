import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="resources-hero">
            <div className="resources-hero__overlay"></div>
            <div className="resources-hero__content">
                <RichText.Content tagName="h1" className="resources-hero__title" value={title} />
            </div>
        </section>
    );
}

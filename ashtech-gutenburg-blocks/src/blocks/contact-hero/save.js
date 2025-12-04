import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="contact-hero">
            <div className="contact-hero__overlay"></div>
            <div className="contact-hero__content">
                <RichText.Content tagName="h1" className="contact-hero__title" value={title} />
            </div>
        </section>
    );
}

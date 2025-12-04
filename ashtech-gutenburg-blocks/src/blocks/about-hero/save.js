import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="about-hero">
            <div className="about-hero__overlay"></div>
            <div className="about-hero__content">
                <RichText.Content
                    tagName="h1"
                    className="about-hero__title"
                    value={title}
                />
            </div>
        </section>
    );
}

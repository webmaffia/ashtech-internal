import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="career-hero">
            <div className="career-hero__overlay"></div>
            <div className="career-hero__content">
                <RichText.Content tagName="h1" className="career-hero__title" value={title} />
            </div>
        </section>
    );
}

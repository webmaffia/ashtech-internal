import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="project-hero">
            <div className="project-hero__overlay"></div>
            <div className="project-hero__content">
                <RichText.Content
                    tagName="h1"
                    className="project-hero__title"
                    value={title}
                />
            </div>
        </section>
    );
}

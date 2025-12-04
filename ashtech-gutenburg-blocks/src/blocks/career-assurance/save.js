import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, text } = attributes;

    return (
        <section className="career-assurance">
            <div className="project-about__decoration"></div>
            <div className="career-assurance__container">
                <div className="career-assurance__left">
                    <RichText.Content tagName="p" className="career-assurance__label animate-text" value={label} />
                    <RichText.Content tagName="h3" className="career-assurance__title animate-text" value={title} />
                </div>
                <div className="career-assurance__right">
                    <RichText.Content tagName="p" className="career-assurance__text animate-text" value={text} />
                </div>
            </div>
        </section>
    );
}

import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, text1, text2 } = attributes;

    return (
        <section className="career-overview">
            <div className="project-about__decoration"></div>
            <div className="career-overview__container">
                <div className="career-overview__left">
                    <RichText.Content tagName="p" className="career-overview__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="career-overview__title animate-text" value={title} />
                </div>
                <div className="career-overview__right">
                    <div className="career-overview__text animate-text">
                        <RichText.Content tagName="p" value={text1} />
                        <RichText.Content tagName="p" value={text2} />
                    </div>
                </div>
            </div>
        </section>
    );
}

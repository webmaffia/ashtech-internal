import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, text1, text2 } = attributes;

    return (
        <section className="about-overview">
            <div className="project-about__decoration"></div>
            <div className="about-overview__container">
                <div className="about-overview__left">
                    <RichText.Content
                        tagName="p"
                        className="about-overview__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="about-overview__title animate-text"
                        value={title}
                    />
                </div>
                <div className="about-overview__right">
                    <RichText.Content
                        tagName="p"
                        className="about-overview__text animate-text"
                        value={text1}
                    />
                    <RichText.Content
                        tagName="p"
                        className="about-overview__text animate-text"
                        value={text2}
                    />
                </div>
            </div>
        </section>
    );
}

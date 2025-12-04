import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, value1Title, value1Desc, value2Title, value2Desc, value3Title, value3Desc, value4Title, value4Desc, value5Title, value5Desc, value6Title, value6Desc, graphicUrl } = attributes;

    return (
        <section className="landing-values">
            <div className="landing-values__container">
                <div className="landing-values__text-content">
                    <RichText.Content
                        tagName="p"
                        className="landing-values__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-values__title animate-text"
                        value={title}
                    />

                    <div className="landing-values__grid">
                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value1Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value1Desc}
                            />
                        </div>

                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value2Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value2Desc}
                            />
                        </div>

                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value3Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value3Desc}
                            />
                        </div>

                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value4Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value4Desc}
                            />
                        </div>

                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value5Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value5Desc}
                            />
                        </div>

                        <div className="landing-values__item animate-text">
                            <RichText.Content
                                tagName="h3"
                                className="landing-values__item-title"
                                value={value6Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-values__item-desc"
                                value={value6Desc}
                            />
                        </div>
                    </div>
                </div>

                <div className="landing-values__graphic">
                    <img src={graphicUrl} alt="Building illustration" className="landing-values__image" />
                </div>
            </div>
        </section>
    );
}

import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, value1Title, value1Desc, value2Title, value2Desc, value3Title, value3Desc, value4Title, value4Desc, value5Title, value5Desc, value6Title, value6Desc, graphicUrl } = attributes;

    return (
        <section className="about-values">
            <div className="about-values__container">
                <div className="about-values__left">
                    <div className="about-values__header">
                        <RichText.Content
                            tagName="p"
                            className="about-values__label animate-text"
                            value={label}
                        />
                        <RichText.Content
                            tagName="h2"
                            className="about-values__title animate-text"
                            value={title}
                        />
                    </div>
                    <div className="about-values__grid">
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-excellence.svg" alt="Excellence" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value1Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value1Desc}
                            />
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-innovation.svg" alt="Innovation" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value2Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value2Desc}
                            />
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-integrity.svg" alt="Integrity" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value3Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value3Desc}
                            />
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-trust.svg" alt="Trust" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value4Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value4Desc}
                            />
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-sustainability.svg" alt="Sustainability" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value5Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value5Desc}
                            />
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-quality.svg" alt="Quality" />
                            </div>
                            <RichText.Content
                                tagName="h3"
                                className="about-values__item-title"
                                value={value6Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="about-values__item-desc"
                                value={value6Desc}
                            />
                        </div>
                    </div>
                </div>
                <div className="about-values__right">
                    <img src={graphicUrl} alt="Building illustration" className="about-values__image" />
                </div>
            </div>
        </section>
    );
}

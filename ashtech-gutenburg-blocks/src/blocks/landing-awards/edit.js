import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, award1Title, award1Desc, award2Title, award2Desc, award3Title, award3Desc, award4Title, award4Desc } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-awards">
                <div className="landing-awards__background"></div>
                <div className="landing-awards__container">
                    <div className="landing-awards__header">
                        <RichText
                            tagName="p"
                            className="landing-awards__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="landing-awards__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                            allowedFormats={['core/bold', 'core/italic']}
                        />
                    </div>
                    <div className="landing-awards__grid">
                        <div className="landing-awards__item animate-text">
                            <div className="landing-awards__laurel landing-awards__laurel--left">
                                <img src="assets/images/landing/laurel-left.svg" alt="" />
                            </div>
                            <div className="landing-awards__content">
                                <div className="landing-awards__icon">
                                    <img src="assets/images/landing/award-1.svg" alt="ISO Certified" />
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="landing-awards__item-title"
                                    value={award1Title}
                                    onChange={(value) => setAttributes({ award1Title: value })}
                                    placeholder="Award 1 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-awards__item-desc"
                                    value={award1Desc}
                                    onChange={(value) => setAttributes({ award1Desc: value })}
                                    placeholder="Award 1 description..."
                                />
                            </div>
                            <div className="landing-awards__laurel landing-awards__laurel--right">
                                <img src="assets/images/landing/laurel-right.svg" alt="" />
                            </div>
                        </div>

                        <div className="landing-awards__item animate-text">
                            <div className="landing-awards__laurel landing-awards__laurel--left">
                                <img src="assets/images/landing/laurel-left.svg" alt="" />
                            </div>
                            <div className="landing-awards__content">
                                <div className="landing-awards__icon">
                                    <img src="assets/images/landing/award-2.svg" alt="TQ Cert Audited" />
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="landing-awards__item-title"
                                    value={award2Title}
                                    onChange={(value) => setAttributes({ award2Title: value })}
                                    placeholder="Award 2 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-awards__item-desc"
                                    value={award2Desc}
                                    onChange={(value) => setAttributes({ award2Desc: value })}
                                    placeholder="Award 2 description..."
                                />
                            </div>
                            <div className="landing-awards__laurel landing-awards__laurel--right">
                                <img src="assets/images/landing/laurel-right.svg" alt="" />
                            </div>
                        </div>

                        <div className="landing-awards__item animate-text">
                            <div className="landing-awards__laurel landing-awards__laurel--left">
                                <img src="assets/images/landing/laurel-left.svg" alt="" />
                            </div>
                            <div className="landing-awards__content">
                                <div className="landing-awards__icon">
                                    <img src="assets/images/landing/award-3.svg" alt="RERA Registered" />
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="landing-awards__item-title"
                                    value={award3Title}
                                    onChange={(value) => setAttributes({ award3Title: value })}
                                    placeholder="Award 3 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-awards__item-desc"
                                    value={award3Desc}
                                    onChange={(value) => setAttributes({ award3Desc: value })}
                                    placeholder="Award 3 description..."
                                />
                            </div>
                            <div className="landing-awards__laurel landing-awards__laurel--right">
                                <img src="assets/images/landing/laurel-right.svg" alt="" />
                            </div>
                        </div>

                        <div className="landing-awards__item animate-text">
                            <div className="landing-awards__laurel landing-awards__laurel--left">
                                <img src="assets/images/landing/laurel-left.svg" alt="" />
                            </div>
                            <div className="landing-awards__content">
                                <div className="landing-awards__icon">
                                    <img src="assets/images/landing/award-4.svg" alt="30+ Years Legacy" />
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="landing-awards__item-title"
                                    value={award4Title}
                                    onChange={(value) => setAttributes({ award4Title: value })}
                                    placeholder="Award 4 title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="landing-awards__item-desc"
                                    value={award4Desc}
                                    onChange={(value) => setAttributes({ award4Desc: value })}
                                    placeholder="Award 4 description..."
                                />
                            </div>
                            <div className="landing-awards__laurel landing-awards__laurel--right">
                                <img src="assets/images/landing/laurel-right.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

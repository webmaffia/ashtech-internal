import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, award1Title, award1Desc, award2Title, award2Desc, award3Title, award3Desc, award4Title, award4Desc } = attributes;

    return (
        <section className="landing-awards">
            <div className="landing-awards__background"></div>
            <div className="landing-awards__container">
                <div className="landing-awards__header">
                    <RichText.Content
                        tagName="p"
                        className="landing-awards__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-awards__title animate-text"
                        value={title}
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
                            <RichText.Content
                                tagName="h3"
                                className="landing-awards__item-title"
                                value={award1Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-awards__item-desc"
                                value={award1Desc}
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
                            <RichText.Content
                                tagName="h3"
                                className="landing-awards__item-title"
                                value={award2Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-awards__item-desc"
                                value={award2Desc}
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
                            <RichText.Content
                                tagName="h3"
                                className="landing-awards__item-title"
                                value={award3Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-awards__item-desc"
                                value={award3Desc}
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
                            <RichText.Content
                                tagName="h3"
                                className="landing-awards__item-title"
                                value={award4Title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="landing-awards__item-desc"
                                value={award4Desc}
                            />
                        </div>
                        <div className="landing-awards__laurel landing-awards__laurel--right">
                            <img src="assets/images/landing/laurel-right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

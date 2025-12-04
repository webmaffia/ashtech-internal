import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, event1Year, event1Title, event1Desc, event2Year, event2Title, event2Desc, event3Year, event3Title, event3Desc, event4Year, event4Title, event4Desc, event5Year, event5Title, event5Desc, event6Year, event6Title, event6Desc, event7Year, event7Title, event7Desc, event8Year, event8Title, event8Desc } = attributes;

    return (
        <section className="about-history">
            <div className="about-history__background"></div>
            <div className="about-history__container">
                <div className="about-history__header">
                    <RichText.Content tagName="p" className="about-history__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="about-history__title animate-text" value={title} />
                </div>

                <div className="about-history__timeline">
                    <div className="about-history__line"></div>

                    <div className="about-history__item about-history__item--left">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event1Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event1Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event1Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--right">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event2Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event2Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event2Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--left">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event3Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event3Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event3Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--right">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event4Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event4Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event4Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--left">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event5Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event5Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event5Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--right">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event6Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event6Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event6Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--left">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event7Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event7Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event7Desc} />
                        </div>
                    </div>

                    <div className="about-history__item about-history__item--right">
                        <div className="about-history__marker"><div className="about-history__marker-dot"></div></div>
                        <div className="about-history__content animate-text">
                            <RichText.Content tagName="span" className="about-history__year" value={event8Year} />
                            <RichText.Content tagName="h3" className="about-history__event-title" value={event8Title} />
                            <RichText.Content tagName="p" className="about-history__event-desc" value={event8Desc} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

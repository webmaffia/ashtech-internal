import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, event1Year, event1Title, event1Desc, event2Year, event2Title, event2Desc, event3Year, event3Title, event3Desc, event4Year, event4Title, event4Desc, event5Year, event5Title, event5Desc, event6Year, event6Title, event6Desc, event7Year, event7Title, event7Desc, event8Year, event8Title, event8Desc } = attributes;

    return (
        <div {...blockProps}>
            <section className="about-history">
                <div className="about-history__background"></div>
                <div className="about-history__container">
                    <div className="about-history__header">
                        <RichText
                            tagName="p"
                            className="about-history__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Label..."
                        />
                        <RichText
                            tagName="h2"
                            className="about-history__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Title..."
                        />
                    </div>

                    <div className="about-history__timeline">
                        <div className="about-history__line"></div>

                        <div className="about-history__item about-history__item--left">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event1Year}
                                    onChange={(value) => setAttributes({ event1Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event1Title}
                                    onChange={(value) => setAttributes({ event1Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event1Desc}
                                    onChange={(value) => setAttributes({ event1Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--right">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event2Year}
                                    onChange={(value) => setAttributes({ event2Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event2Title}
                                    onChange={(value) => setAttributes({ event2Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event2Desc}
                                    onChange={(value) => setAttributes({ event2Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--left">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event3Year}
                                    onChange={(value) => setAttributes({ event3Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event3Title}
                                    onChange={(value) => setAttributes({ event3Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event3Desc}
                                    onChange={(value) => setAttributes({ event3Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--right">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event4Year}
                                    onChange={(value) => setAttributes({ event4Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event4Title}
                                    onChange={(value) => setAttributes({ event4Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event4Desc}
                                    onChange={(value) => setAttributes({ event4Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--left">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event5Year}
                                    onChange={(value) => setAttributes({ event5Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event5Title}
                                    onChange={(value) => setAttributes({ event5Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event5Desc}
                                    onChange={(value) => setAttributes({ event5Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--right">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event6Year}
                                    onChange={(value) => setAttributes({ event6Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event6Title}
                                    onChange={(value) => setAttributes({ event6Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event6Desc}
                                    onChange={(value) => setAttributes({ event6Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--left">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event7Year}
                                    onChange={(value) => setAttributes({ event7Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event7Title}
                                    onChange={(value) => setAttributes({ event7Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event7Desc}
                                    onChange={(value) => setAttributes({ event7Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>

                        <div className="about-history__item about-history__item--right">
                            <div className="about-history__marker">
                                <div className="about-history__marker-dot"></div>
                            </div>
                            <div className="about-history__content animate-text">
                                <RichText
                                    tagName="span"
                                    className="about-history__year"
                                    value={event8Year}
                                    onChange={(value) => setAttributes({ event8Year: value })}
                                    placeholder="Year..."
                                />
                                <RichText
                                    tagName="h3"
                                    className="about-history__event-title"
                                    value={event8Title}
                                    onChange={(value) => setAttributes({ event8Title: value })}
                                    placeholder="Event title..."
                                />
                                <RichText
                                    tagName="p"
                                    className="about-history__event-desc"
                                    value={event8Desc}
                                    onChange={(value) => setAttributes({ event8Desc: value })}
                                    placeholder="Event description..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

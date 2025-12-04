import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, test1Text, test1Name, test1Location, test2Text, test2Name, test2Location, test3Text, test3Name, test3Location } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-testimonials">
                <div className="landing-testimonials__container">
                    <div className="landing-testimonials__header">
                        <RichText
                            tagName="p"
                            className="landing-testimonials__label animate-text"
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            placeholder="Enter label..."
                        />
                        <RichText
                            tagName="h2"
                            className="landing-testimonials__title animate-text"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder="Enter title..."
                        />
                    </div>
                    <div className="landing-testimonials__slider">
                        <div className="landing-testimonials__slide">
                            <div className="landing-testimonials__card">
                                <div className="landing-testimonials__quote">
                                    <img src="assets/images/landing/quote.svg" alt="Quote" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="landing-testimonials__text"
                                    value={test1Text}
                                    onChange={(value) => setAttributes({ test1Text: value })}
                                    placeholder="Testimonial 1 text..."
                                />
                                <div className="landing-testimonials__author">
                                    <div className="landing-testimonials__author-avatar">
                                        <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="landing-testimonials__author-info">
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-name"
                                            value={test1Name}
                                            onChange={(value) => setAttributes({ test1Name: value })}
                                            placeholder="Name..."
                                        />
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-location"
                                            value={test1Location}
                                            onChange={(value) => setAttributes({ test1Location: value })}
                                            placeholder="Location..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="landing-testimonials__slide">
                            <div className="landing-testimonials__card">
                                <div className="landing-testimonials__quote">
                                    <img src="assets/images/landing/quote.svg" alt="Quote" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="landing-testimonials__text"
                                    value={test2Text}
                                    onChange={(value) => setAttributes({ test2Text: value })}
                                    placeholder="Testimonial 2 text..."
                                />
                                <div className="landing-testimonials__author">
                                    <div className="landing-testimonials__author-avatar">
                                        <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="landing-testimonials__author-info">
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-name"
                                            value={test2Name}
                                            onChange={(value) => setAttributes({ test2Name: value })}
                                            placeholder="Name..."
                                        />
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-location"
                                            value={test2Location}
                                            onChange={(value) => setAttributes({ test2Location: value })}
                                            placeholder="Location..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="landing-testimonials__slide">
                            <div className="landing-testimonials__card">
                                <div className="landing-testimonials__quote">
                                    <img src="assets/images/landing/quote.svg" alt="Quote" />
                                </div>
                                <RichText
                                    tagName="p"
                                    className="landing-testimonials__text"
                                    value={test3Text}
                                    onChange={(value) => setAttributes({ test3Text: value })}
                                    placeholder="Testimonial 3 text..."
                                />
                                <div className="landing-testimonials__author">
                                    <div className="landing-testimonials__author-avatar">
                                        <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                    </div>
                                    <div className="landing-testimonials__author-info">
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-name"
                                            value={test3Name}
                                            onChange={(value) => setAttributes({ test3Name: value })}
                                            placeholder="Name..."
                                        />
                                        <RichText
                                            tagName="p"
                                            className="landing-testimonials__author-location"
                                            value={test3Location}
                                            onChange={(value) => setAttributes({ test3Location: value })}
                                            placeholder="Location..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-testimonials__navigation">
                        <button className="landing-testimonials__arrow landing-testimonials__arrow--prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="landing-testimonials__dots"></div>
                        <button className="landing-testimonials__arrow landing-testimonials__arrow--next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

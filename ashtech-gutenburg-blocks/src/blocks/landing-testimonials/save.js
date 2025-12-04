import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, test1Text, test1Name, test1Location, test2Text, test2Name, test2Location, test3Text, test3Name, test3Location } = attributes;

    return (
        <section className="landing-testimonials">
            <div className="landing-testimonials__container">
                <div className="landing-testimonials__header">
                    <RichText.Content
                        tagName="p"
                        className="landing-testimonials__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-testimonials__title animate-text"
                        value={title}
                    />
                </div>
                <div className="landing-testimonials__slider">
                    <div className="landing-testimonials__slide">
                        <div className="landing-testimonials__card">
                            <div className="landing-testimonials__quote">
                                <img src="assets/images/landing/quote.svg" alt="Quote" />
                            </div>
                            <RichText.Content
                                tagName="p"
                                className="landing-testimonials__text"
                                value={test1Text}
                            />
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-name"
                                        value={test1Name}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-location"
                                        value={test1Location}
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
                            <RichText.Content
                                tagName="p"
                                className="landing-testimonials__text"
                                value={test2Text}
                            />
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-name"
                                        value={test2Name}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-location"
                                        value={test2Location}
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
                            <RichText.Content
                                tagName="p"
                                className="landing-testimonials__text"
                                value={test3Text}
                            />
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-name"
                                        value={test3Name}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className="landing-testimonials__author-location"
                                        value={test3Location}
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
    );
}

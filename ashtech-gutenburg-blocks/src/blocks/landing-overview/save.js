import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, text1, text2, buttonText } = attributes;

    return (
        <section className="landing-overview">
            <div className="landing-overview__container">
                <div className="landing-overview__left">
                    <RichText.Content
                        tagName="p"
                        className="landing-overview__label animate-text"
                        value={label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-overview__title animate-text"
                        value={title}
                    />
                </div>
                <div className="landing-overview__right">
                    <RichText.Content
                        tagName="p"
                        className="landing-overview__text animate-text"
                        value={text1}
                    />
                    <RichText.Content
                        tagName="p"
                        className="landing-overview__text animate-text"
                        value={text2}
                    />
                    <button className="btn btn--primary downloadCta">
                        <RichText.Content
                            tagName="span"
                            value={buttonText}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

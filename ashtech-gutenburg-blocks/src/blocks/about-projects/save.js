import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, text, buttonText, buttonLink } = attributes;

    return (
        <section className="about-projects">
            <div className="project-about__decoration"></div>
            <div className="about-projects__container">
                <div className="about-projects__left">
                    <RichText.Content
                        tagName="h2"
                        className="about-projects__title animate-text"
                        value={title}
                    />
                </div>
                <div className="about-projects__right">
                    <RichText.Content
                        tagName="p"
                        className="about-projects__text animate-text"
                        value={text}
                    />
                    <a href={buttonLink} className="btn btn--primary">
                        <RichText.Content
                            tagName="span"
                            value={buttonText}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

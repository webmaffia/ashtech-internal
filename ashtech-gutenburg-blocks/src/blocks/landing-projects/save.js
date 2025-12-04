import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { backgroundImage, button1Text, button1Link, button2Text } = attributes;

    return (
        <section className="landing-projects">
            <div className="landing-projects__background">
                <img src={backgroundImage} alt="Ashtech Presidential Towers" className="landing-projects__image" />
            </div>
            <div className="landing-projects__overlay"></div>
            <div className="landing-projects__content">
                <div className="landing-projects__buttons">
                    <a href={button1Link} className="btn btn--secondary">
                        <RichText.Content
                            tagName="span"
                            value={button1Text}
                        />
                        <div className="btn__icon">
                            <img src="assets/images/arrow-right.svg" alt="Arrow" />
                        </div>
                    </a>
                    <button className="btn btn--secondary downloadCta">
                        <RichText.Content
                            tagName="span"
                            value={button2Text}
                        />
                        <div className="btn__icon">
                            <img src="assets/images/arrow-right.svg" alt="Arrow" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

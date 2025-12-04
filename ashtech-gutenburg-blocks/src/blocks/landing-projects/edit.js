import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { backgroundImage, button1Text, button1Link, button2Text } = attributes;

    return (
        <div {...blockProps}>
            <section className="landing-projects">
                <div className="landing-projects__background">
                    <img src={backgroundImage} alt="Ashtech Presidential Towers" className="landing-projects__image" />
                </div>
                <div className="landing-projects__overlay"></div>
                <div className="landing-projects__content">
                    <div className="landing-projects__buttons">
                        <a href={button1Link} className="btn btn--secondary">
                            <RichText
                                tagName="span"
                                value={button1Text}
                                onChange={(value) => setAttributes({ button1Text: value })}
                                placeholder="Button 1 text..."
                            />
                            <div className="btn__icon">
                                <img src="assets/images/arrow-right.svg" alt="Arrow" />
                            </div>
                        </a>
                        <button className="btn btn--secondary downloadCta">
                            <RichText
                                tagName="span"
                                value={button2Text}
                                onChange={(value) => setAttributes({ button2Text: value })}
                                placeholder="Button 2 text..."
                            />
                            <div className="btn__icon">
                                <img src="assets/images/arrow-right.svg" alt="Arrow" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <section className="landing-awards">
            <div className="landing-awards__container">
                <div className="landing-awards__header">
                    <RichText.Content
                        tagName="div"
                        className="landing-awards__label animate-text"
                        value={attributes.label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-awards__title animate-text"
                        value={attributes.title}
                    />
                    <RichText.Content
                        tagName="p"
                        className="landing-awards__description animate-text"
                        value={attributes.description}
                    />
                </div>
                <div className="landing-awards__grid">
                    {attributes.awards.map((award, index) => (
                        <div key={index} className="landing-awards__item">
                            <div className="landing-awards__item-images">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/award-laurel-left.svg" alt="Award" className="landing-awards__laurel landing-awards__laurel--left" />
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/award-laurel-right.svg" alt="Award" className="landing-awards__laurel landing-awards__laurel--right" />
                            </div>
                            <p className="landing-awards__item-text animate-text">{award.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


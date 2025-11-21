import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const graphicImageUrl = attributes.graphicImageUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/landing/values-graphic.svg';
    
    return (
        <section className="landing-values">
            <div className="landing-values__container">
                <div className="landing-values__header">
                    <RichText.Content
                        tagName="div"
                        className="landing-values__label animate-text"
                        value={attributes.label}
                    />
                    <RichText.Content
                        tagName="h2"
                        className="landing-values__title animate-text-rtl"
                        value={attributes.title}
                    />
                </div>
                <div className="landing-values__graphic">
                    <img src={graphicImageUrl} alt="Core Values" />
                </div>
                <div className="landing-values__items">
                    {attributes.values.slice(0, 3).map((value, index) => (
                        <div key={index} className={`landing-values__item landing-values__item--left landing-values__item--${index + 1}`} data-value={index}>
                            <h3 className="landing-values__item-title">{value.title}</h3>
                            <p className="landing-values__item-description">{value.description}</p>
                        </div>
                    ))}
                    {attributes.values.slice(3, 6).map((value, index) => (
                        <div key={index + 3} className={`landing-values__item landing-values__item--right landing-values__item--${index + 4}`} data-value={index + 3}>
                            <h3 className="landing-values__item-title">{value.title}</h3>
                            <p className="landing-values__item-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


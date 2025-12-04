import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, description, feature1, feature2, feature3, feature4, feature5, feature6, footerText } = attributes;

    return (
        <section className="nri-architecture">
            <div className="nri-architecture__background"></div>
            <div className="nri-architecture__overlay"></div>
            <div className="nri-architecture__container">
                <div className="nri-architecture__header">
                    <RichText.Content tagName="span" className="nri-architecture__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="nri-architecture__title animate-text" value={title} />
                    <RichText.Content tagName="p" className="nri-architecture__description animate-text" value={description} />
                </div>
                <div className="nri-architecture__features">
                    <div className="nri-architecture__feature-row">
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature1} />
                        </div>
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature2} />
                        </div>
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature3} />
                        </div>
                    </div>
                    <div className="nri-architecture__feature-row">
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature4} />
                        </div>
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature5} />
                        </div>
                        <div className="nri-architecture__feature-item animate-text">
                            <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                            <RichText.Content tagName="p" className="nri-architecture__feature-text" value={feature6} />
                        </div>
                    </div>
                </div>
                <RichText.Content tagName="p" className="nri-architecture__footer-text animate-text" value={footerText} />
            </div>
        </section>
    );
}

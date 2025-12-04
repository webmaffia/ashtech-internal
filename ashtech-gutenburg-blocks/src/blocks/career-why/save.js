import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, card1Title, card1Desc, card1Image, card2Title, card2Desc, card2Image, card3Title, card3Desc, card3Image } = attributes;

    return (
        <section className="career-why">
            <div className="career-why__container">
                <div className="career-why__header">
                    <RichText.Content tagName="p" className="career-why__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="career-why__title animate-text" value={title} />
                </div>
                
                <div className="career-why__cards">
                    <div className="career-why__card career-why__card--offset-1">
                        <div className="career-why__image"><img src={card1Image} alt="Culture of Trust" /></div>
                        <div className="career-why__content">
                            <RichText.Content tagName="h3" className="career-why__card-title animate-text" value={card1Title} />
                            <RichText.Content tagName="p" className="career-why__card-desc animate-text" value={card1Desc} />
                        </div>
                    </div>
                    
                    <div className="career-why__card career-why__card--offset-2">
                        <div className="career-why__image"><img src={card2Image} alt="Grow With Confidence" /></div>
                        <div className="career-why__content">
                            <RichText.Content tagName="h3" className="career-why__card-title animate-text" value={card2Title} />
                            <RichText.Content tagName="p" className="career-why__card-desc animate-text" value={card2Desc} />
                        </div>
                    </div>
                    
                    <div className="career-why__card career-why__card--offset-3">
                        <div className="career-why__image"><img src={card3Image} alt="Real Projects" /></div>
                        <div className="career-why__content">
                            <RichText.Content tagName="h3" className="career-why__card-title animate-text" value={card3Title} />
                            <RichText.Content tagName="p" className="career-why__card-desc animate-text" value={card3Desc} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

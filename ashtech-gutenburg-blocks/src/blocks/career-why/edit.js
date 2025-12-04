import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, card1Title, card1Desc, card1Image, card2Title, card2Desc, card2Image, card3Title, card3Desc, card3Image } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-why">
                <div className="career-why__container">
                    <div className="career-why__header">
                        <RichText tagName="p" className="career-why__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="career-why__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    
                    <div className="career-why__cards">
                        <div className="career-why__card career-why__card--offset-1">
                            <div className="career-why__image"><img src={card1Image} alt="Card 1" /></div>
                            <div className="career-why__content">
                                <RichText tagName="h3" className="career-why__card-title animate-text" value={card1Title} onChange={(value) => setAttributes({ card1Title: value })} placeholder="Card 1 title..." />
                                <RichText tagName="p" className="career-why__card-desc animate-text" value={card1Desc} onChange={(value) => setAttributes({ card1Desc: value })} placeholder="Card 1 description..." />
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-2">
                            <div className="career-why__image"><img src={card2Image} alt="Card 2" /></div>
                            <div className="career-why__content">
                                <RichText tagName="h3" className="career-why__card-title animate-text" value={card2Title} onChange={(value) => setAttributes({ card2Title: value })} placeholder="Card 2 title..." />
                                <RichText tagName="p" className="career-why__card-desc animate-text" value={card2Desc} onChange={(value) => setAttributes({ card2Desc: value })} placeholder="Card 2 description..." />
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-3">
                            <div className="career-why__image"><img src={card3Image} alt="Card 3" /></div>
                            <div className="career-why__content">
                                <RichText tagName="h3" className="career-why__card-title animate-text" value={card3Title} onChange={(value) => setAttributes({ card3Title: value })} placeholder="Card 3 title..." />
                                <RichText tagName="p" className="career-why__card-desc animate-text" value={card3Desc} onChange={(value) => setAttributes({ card3Desc: value })} placeholder="Card 3 description..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

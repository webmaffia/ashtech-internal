import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, item1Title, item1Desc, item2Title, item2Desc, item3Title, item3Desc, item4Title, item4Desc, item5Title, item5Desc } = attributes;

    return (
        <section className="nri-why-choose">
            <div className="nri-why-choose__container">
                <div className="nri-why-choose__header">
                    <RichText.Content tagName="p" className="nri-why-choose__label animate-text" value={label} />
                    <RichText.Content tagName="h2" className="nri-why-choose__title animate-text" value={title} />
                </div>
                
                <div className="nri-why-choose__list">
                    <div className="nri-why-choose__item animate-text">
                        <div className="nri-why-choose__number">01</div>
                        <div className="nri-why-choose__content">
                            <RichText.Content tagName="h3" className="nri-why-choose__item-title" value={item1Title} />
                            <RichText.Content tagName="p" className="nri-why-choose__item-desc" value={item1Desc} />
                        </div>
                    </div>
                    
                    <div className="nri-why-choose__item animate-text">
                        <div className="nri-why-choose__number">02</div>
                        <div className="nri-why-choose__content">
                            <RichText.Content tagName="h3" className="nri-why-choose__item-title" value={item2Title} />
                            <RichText.Content tagName="p" className="nri-why-choose__item-desc" value={item2Desc} />
                        </div>
                    </div>
                    
                    <div className="nri-why-choose__item animate-text">
                        <div className="nri-why-choose__number">03</div>
                        <div className="nri-why-choose__content">
                            <RichText.Content tagName="h3" className="nri-why-choose__item-title" value={item3Title} />
                            <RichText.Content tagName="p" className="nri-why-choose__item-desc" value={item3Desc} />
                        </div>
                    </div>
                    
                    <div className="nri-why-choose__item animate-text">
                        <div className="nri-why-choose__number">04</div>
                        <div className="nri-why-choose__content">
                            <RichText.Content tagName="h3" className="nri-why-choose__item-title" value={item4Title} />
                            <RichText.Content tagName="p" className="nri-why-choose__item-desc" value={item4Desc} />
                        </div>
                    </div>
                    
                    <div className="nri-why-choose__item animate-text">
                        <div className="nri-why-choose__number">05</div>
                        <div className="nri-why-choose__content">
                            <RichText.Content tagName="h3" className="nri-why-choose__item-title" value={item5Title} />
                            <RichText.Content tagName="p" className="nri-why-choose__item-desc" value={item5Desc} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

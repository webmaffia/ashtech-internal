import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, item1Title, item1Desc, item2Title, item2Desc, item3Title, item3Desc, item4Title, item4Desc, item5Title, item5Desc } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-why-choose">
                <div className="nri-why-choose__container">
                    <div className="nri-why-choose__header">
                        <RichText tagName="p" className="nri-why-choose__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="nri-why-choose__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                    </div>
                    
                    <div className="nri-why-choose__list">
                        <div className="nri-why-choose__item animate-text">
                            <div className="nri-why-choose__number">01</div>
                            <div className="nri-why-choose__content">
                                <RichText tagName="h3" className="nri-why-choose__item-title" value={item1Title} onChange={(value) => setAttributes({ item1Title: value })} placeholder="Title..." />
                                <RichText tagName="p" className="nri-why-choose__item-desc" value={item1Desc} onChange={(value) => setAttributes({ item1Desc: value })} placeholder="Description..." />
                            </div>
                        </div>
                        
                        <div className="nri-why-choose__item animate-text">
                            <div className="nri-why-choose__number">02</div>
                            <div className="nri-why-choose__content">
                                <RichText tagName="h3" className="nri-why-choose__item-title" value={item2Title} onChange={(value) => setAttributes({ item2Title: value })} placeholder="Title..." />
                                <RichText tagName="p" className="nri-why-choose__item-desc" value={item2Desc} onChange={(value) => setAttributes({ item2Desc: value })} placeholder="Description..." />
                            </div>
                        </div>
                        
                        <div className="nri-why-choose__item animate-text">
                            <div className="nri-why-choose__number">03</div>
                            <div className="nri-why-choose__content">
                                <RichText tagName="h3" className="nri-why-choose__item-title" value={item3Title} onChange={(value) => setAttributes({ item3Title: value })} placeholder="Title..." />
                                <RichText tagName="p" className="nri-why-choose__item-desc" value={item3Desc} onChange={(value) => setAttributes({ item3Desc: value })} placeholder="Description..." />
                            </div>
                        </div>
                        
                        <div className="nri-why-choose__item animate-text">
                            <div className="nri-why-choose__number">04</div>
                            <div className="nri-why-choose__content">
                                <RichText tagName="h3" className="nri-why-choose__item-title" value={item4Title} onChange={(value) => setAttributes({ item4Title: value })} placeholder="Title..." />
                                <RichText tagName="p" className="nri-why-choose__item-desc" value={item4Desc} onChange={(value) => setAttributes({ item4Desc: value })} placeholder="Description..." />
                            </div>
                        </div>
                        
                        <div className="nri-why-choose__item animate-text">
                            <div className="nri-why-choose__number">05</div>
                            <div className="nri-why-choose__content">
                                <RichText tagName="h3" className="nri-why-choose__item-title" value={item5Title} onChange={(value) => setAttributes({ item5Title: value })} placeholder="Title..." />
                                <RichText tagName="p" className="nri-why-choose__item-desc" value={item5Desc} onChange={(value) => setAttributes({ item5Desc: value })} placeholder="Description..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

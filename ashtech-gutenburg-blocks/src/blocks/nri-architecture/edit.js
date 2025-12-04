import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, feature1, feature2, feature3, feature4, feature5, feature6, footerText } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-architecture">
                <div className="nri-architecture__background"></div>
                <div className="nri-architecture__overlay"></div>
                <div className="nri-architecture__container">
                    <div className="nri-architecture__header">
                        <RichText tagName="span" className="nri-architecture__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="nri-architecture__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                        <RichText tagName="p" className="nri-architecture__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." allowedFormats={['core/bold', 'core/italic']} />
                    </div>
                    <div className="nri-architecture__features">
                        <div className="nri-architecture__feature-row">
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature1} onChange={(value) => setAttributes({ feature1: value })} placeholder="Feature 1..." />
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature2} onChange={(value) => setAttributes({ feature2: value })} placeholder="Feature 2..." />
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature3} onChange={(value) => setAttributes({ feature3: value })} placeholder="Feature 3..." />
                            </div>
                        </div>
                        <div className="nri-architecture__feature-row">
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature4} onChange={(value) => setAttributes({ feature4: value })} placeholder="Feature 4..." />
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature5} onChange={(value) => setAttributes({ feature5: value })} placeholder="Feature 5..." />
                            </div>
                            <div className="nri-architecture__feature-item animate-text">
                                <div className="nri-architecture__feature-icon"><img src="assets/images/nri/tick.svg" alt="" /></div>
                                <RichText tagName="p" className="nri-architecture__feature-text" value={feature6} onChange={(value) => setAttributes({ feature6: value })} placeholder="Feature 6..." />
                            </div>
                        </div>
                    </div>
                    <RichText tagName="p" className="nri-architecture__footer-text animate-text" value={footerText} onChange={(value) => setAttributes({ footerText: value })} placeholder="Footer text..." />
                </div>
            </section>
        </div>
    );
}

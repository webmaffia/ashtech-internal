import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, test1Text, test1Name, test2Text, test2Name, test3Text, test3Name, footerText } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-testimonials">
                <div className="nri-testimonials__decoration"></div>
                <div className="nri-testimonials__container">
                    <div className="nri-testimonials__header">
                        <RichText tagName="span" className="nri-testimonials__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="nri-testimonials__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                    </div>
                    <div className="nri-testimonials__cards">
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                                <RichText tagName="p" className="nri-testimonials__card-text" value={test1Text} onChange={(value) => setAttributes({ test1Text: value })} placeholder="Testimonial 1..." />
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                    <div className="nri-testimonials__card-info">
                                        <RichText tagName="p" className="nri-testimonials__card-name" value={test1Name} onChange={(value) => setAttributes({ test1Name: value })} placeholder="Name..." allowedFormats={['core/bold', 'core/italic']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                                <RichText tagName="p" className="nri-testimonials__card-text" value={test2Text} onChange={(value) => setAttributes({ test2Text: value })} placeholder="Testimonial 2..." />
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                    <div className="nri-testimonials__card-info">
                                        <RichText tagName="p" className="nri-testimonials__card-name" value={test2Name} onChange={(value) => setAttributes({ test2Name: value })} placeholder="Name..." allowedFormats={['core/bold', 'core/italic']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tm-item">
                            <div className="nri-testimonials__card animate-text">
                                <div className="nri-testimonials__card-quote"><img src="assets/images/nri/nri-quote.svg" alt="Quote" /></div>
                                <RichText tagName="p" className="nri-testimonials__card-text" value={test3Text} onChange={(value) => setAttributes({ test3Text: value })} placeholder="Testimonial 3..." />
                                <div className="nri-testimonials__card-author">
                                    <div className="nri-testimonials__card-avatar"><img src="assets/images/nri/nri-avatar.png" alt="Avatar" /></div>
                                    <div className="nri-testimonials__card-info">
                                        <RichText tagName="p" className="nri-testimonials__card-name" value={test3Name} onChange={(value) => setAttributes({ test3Name: value })} placeholder="Name..." allowedFormats={['core/bold', 'core/italic']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RichText tagName="p" className="nri-testimonials__footer-text animate-text" value={footerText} onChange={(value) => setAttributes({ footerText: value })} placeholder="Footer..." />
                    <div className="nri-testimonials__dots"></div>
                </div>
            </section>
        </div>
    );
}

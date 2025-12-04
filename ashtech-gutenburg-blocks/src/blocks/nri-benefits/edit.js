import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, description, benefit1, benefit2, benefit3, benefit4, benefit5, benefit6, benefit7, footerText, buttonText, benefitsImage } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-benefits">
                <div className="nri-benefits__container">
                    <div className="nri-benefits__image">
                        <img src={benefitsImage} alt="Investment Benefits" />
                    </div>
                    <div className="nri-benefits__content">
                        <div className="nri-benefits__header">
                            <div className="nri-benefits__header-inner">
                                <RichText tagName="span" className="nri-benefits__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                                <RichText tagName="h2" className="nri-benefits__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                            </div>
                            <RichText tagName="p" className="nri-benefits__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        </div>
                        <div className="nri-benefits__grid">
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--first">
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-1.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit1} onChange={(value) => setAttributes({ benefit1: value })} placeholder="Benefit 1..." />
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-2.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit2} onChange={(value) => setAttributes({ benefit2: value })} placeholder="Benefit 2..." />
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-3.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit3} onChange={(value) => setAttributes({ benefit3: value })} placeholder="Benefit 3..." />
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-4.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit4} onChange={(value) => setAttributes({ benefit4: value })} placeholder="Benefit 4..." />
                                </div>
                            </div>
                            <div className="nri-benefits__grid-row nri-benefits__grid-row--second">
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-5.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit5} onChange={(value) => setAttributes({ benefit5: value })} placeholder="Benefit 5..." />
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-6.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit6} onChange={(value) => setAttributes({ benefit6: value })} placeholder="Benefit 6..." />
                                </div>
                                <div className="nri-benefits__grid-item animate-text">
                                    <div className="nri-benefits__grid-icon"><img src="assets/images/nri/nri-benefit-7.svg" alt="Icon" /></div>
                                    <RichText tagName="p" className="nri-benefits__grid-text" value={benefit7} onChange={(value) => setAttributes({ benefit7: value })} placeholder="Benefit 7..." allowedFormats={['core/bold', 'core/italic']} />
                                </div>
                            </div>
                        </div>
                        <div className="nri-benefits__footer">
                            <RichText tagName="p" className="nri-benefits__footer-text animate-text" value={footerText} onChange={(value) => setAttributes({ footerText: value })} placeholder="Footer text..." />
                            <button className="btn btn--primary downloadCta">
                                <RichText tagName="span" value={buttonText} onChange={(value) => setAttributes({ buttonText: value })} placeholder="Button..." />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

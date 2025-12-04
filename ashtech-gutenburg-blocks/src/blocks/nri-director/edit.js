import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, titleLine1, titleLine2, description, footerText, service1, service2, service3, service4, service5, directorImage } = attributes;

    return (
        <div {...blockProps}>
            <section className="nri-director">
                <div className="nri-director__background"></div>
                <div className="nri-director__container">
                    <div className="nri-director__content">
                        <div className="nri-director__header">
                            <div className="nri-director__header-inner">
                                <RichText tagName="span" className="nri-director__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                                <div className="nri-director__title animate-text">
                                    <RichText tagName="p" className="nri-director__title-line" value={titleLine1} onChange={(value) => setAttributes({ titleLine1: value })} placeholder="Title line 1..." />
                                    <RichText tagName="p" className="nri-director__title-line" value={titleLine2} onChange={(value) => setAttributes({ titleLine2: value })} placeholder="Title line 2..." />
                                </div>
                            </div>
                            <RichText tagName="p" className="nri-director__description animate-text" value={description} onChange={(value) => setAttributes({ description: value })} placeholder="Description..." />
                        </div>
                        <RichText tagName="p" className="nri-director__footer-text animate-text" value={footerText} onChange={(value) => setAttributes({ footerText: value })} placeholder="Footer..." allowedFormats={['core/bold', 'core/italic']} />
                        <div className="nri-director__services">
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon"><img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" /></div>
                                <RichText tagName="p" className="nri-director__service-text" value={service1} onChange={(value) => setAttributes({ service1: value })} placeholder="Service 1..." />
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon"><img src="assets/images/landing/icon-support.svg" alt="Support" /></div>
                                <RichText tagName="p" className="nri-director__service-text" value={service2} onChange={(value) => setAttributes({ service2: value })} placeholder="Service 2..." />
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon"><img src="assets/images/landing/icon-residences.svg" alt="Residences" /></div>
                                <RichText tagName="p" className="nri-director__service-text" value={service3} onChange={(value) => setAttributes({ service3: value })} placeholder="Service 3..." />
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon"><img src="assets/images/landing/icon-documentation.svg" alt="Documentation" /></div>
                                <RichText tagName="p" className="nri-director__service-text" value={service4} onChange={(value) => setAttributes({ service4: value })} placeholder="Service 4..." />
                            </div>
                            <div className="nri-director__service-item animate-text">
                                <div className="nri-director__service-icon"><img src="assets/images/landing/icon-documentation.svg" alt="Updates" /></div>
                                <RichText tagName="p" className="nri-director__service-text" value={service5} onChange={(value) => setAttributes({ service5: value })} placeholder="Service 5..." />
                            </div>
                        </div>
                    </div>
                    <div className="nri-director__image">
                        <img src={directorImage} alt="Director" />
                    </div>
                </div>
            </section>
        </div>
    );
}

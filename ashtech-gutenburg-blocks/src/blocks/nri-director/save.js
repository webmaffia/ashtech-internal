import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, titleLine1, titleLine2, description, footerText, service1, service2, service3, service4, service5, directorImage } = attributes;

    return (
        <section className="nri-director">
            <div className="nri-director__background"></div>
            <div className="nri-director__container">
                <div className="nri-director__content">
                    <div className="nri-director__header">
                        <div className="nri-director__header-inner">
                            <RichText.Content tagName="span" className="nri-director__label animate-text" value={label} />
                            <div className="nri-director__title animate-text">
                                <RichText.Content tagName="p" className="nri-director__title-line" value={titleLine1} />
                                <RichText.Content tagName="p" className="nri-director__title-line" value={titleLine2} />
                            </div>
                        </div>
                        <RichText.Content tagName="p" className="nri-director__description animate-text" value={description} />
                    </div>
                    <RichText.Content tagName="p" className="nri-director__footer-text animate-text" value={footerText} />
                    <div className="nri-director__services">
                        <div className="nri-director__service-item animate-text">
                            <div className="nri-director__service-icon"><img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" /></div>
                            <RichText.Content tagName="p" className="nri-director__service-text" value={service1} />
                        </div>
                        <div className="nri-director__service-item animate-text">
                            <div className="nri-director__service-icon"><img src="assets/images/landing/icon-support.svg" alt="Support" /></div>
                            <RichText.Content tagName="p" className="nri-director__service-text" value={service2} />
                        </div>
                        <div className="nri-director__service-item animate-text">
                            <div className="nri-director__service-icon"><img src="assets/images/landing/icon-residences.svg" alt="Residences" /></div>
                            <RichText.Content tagName="p" className="nri-director__service-text" value={service3} />
                        </div>
                        <div className="nri-director__service-item animate-text">
                            <div className="nri-director__service-icon"><img src="assets/images/landing/icon-documentation.svg" alt="Documentation" /></div>
                            <RichText.Content tagName="p" className="nri-director__service-text" value={service4} />
                        </div>
                        <div className="nri-director__service-item animate-text">
                            <div className="nri-director__service-icon"><img src="assets/images/landing/icon-documentation.svg" alt="Updates" /></div>
                            <RichText.Content tagName="p" className="nri-director__service-text" value={service5} />
                        </div>
                    </div>
                </div>
                <div className="nri-director__image">
                    <img src={directorImage} alt="Director" />
                </div>
            </div>
        </section>
    );
}

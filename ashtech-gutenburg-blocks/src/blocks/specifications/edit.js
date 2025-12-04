import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, spec1Title, spec1Image, spec2Title, spec2Image, spec3Title, spec3Image } = attributes;

    return (
        <div {...blockProps}>
            <section className="specifications" id="specifications">
                <div className="specifications__header">
                    <RichText tagName="p" className="specifications__label" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                    <RichText tagName="h2" className="specifications__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." allowedFormats={['core/bold', 'core/italic']} />
                </div>
                
                <div className="specifications__cards">
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image"><img src={spec1Image} alt="Spec 1" /></div>
                            <div className="spec-card__content">
                                <RichText tagName="h3" className="spec-card__title" value={spec1Title} onChange={(value) => setAttributes({ spec1Title: value })} placeholder="Spec 1 title..." />
                                <ul className="spec-card__list">
                                    <li>Italian marble flooring in the living, dining, and kitchen</li>
                                    <li>Hot and cold VRV air-conditioning</li>
                                    <li>Modular kitchens with premium fittings</li>
                                    <li>PU-finish wardrobes</li>
                                    <li>Ambient lighting design</li>
                                    <li>Smart home automation</li>
                                    <li>Private air-conditioned lift lobbies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image"><img src={spec2Image} alt="Spec 2" /></div>
                            <div className="spec-card__content">
                                <RichText tagName="h3" className="spec-card__title" value={spec2Title} onChange={(value) => setAttributes({ spec2Title: value })} placeholder="Spec 2 title..." />
                                <ul className="spec-card__list">
                                    <li>Aluminium crown facade system</li>
                                    <li>Ground-level free of vehicular movement</li>
                                    <li>Seven-tier security with monitored access</li>
                                    <li>TQ Cert quality assurance at every phase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="specifications__card-wrapper">
                        <div className="spec-card">
                            <div className="spec-card__image"><img src={spec3Image} alt="Spec 3" /></div>
                            <div className="spec-card__content">
                                <RichText tagName="h3" className="spec-card__title" value={spec3Title} onChange={(value) => setAttributes({ spec3Title: value })} placeholder="Spec 3 title..." />
                                <ul className="spec-card__list">
                                    <li>Passive cooling strategies</li>
                                    <li>Cross-ventilation in every residence</li>
                                    <li>Natural light planning for lower energy load</li>
                                    <li>Materials chosen for endurance & environmental harmony</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

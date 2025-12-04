import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { label, title, spec1Title, spec1Image, spec2Title, spec2Image, spec3Title, spec3Image } = attributes;

    return (
        <section className="specifications" id="specifications">
            <div className="specifications__header">
                <RichText.Content tagName="p" className="specifications__label" value={label} />
                <RichText.Content tagName="h2" className="specifications__title" value={title} />
            </div>
            
            <div className="specifications__cards">
                <div className="specifications__card-wrapper">
                    <div className="spec-card">
                        <div className="spec-card__image"><img src={spec1Image} alt="Luxurious residence interior" /></div>
                        <div className="spec-card__content">
                            <RichText.Content tagName="h3" className="spec-card__title" value={spec1Title} />
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
                        <div className="spec-card__image"><img src={spec2Image} alt="Building structure and safety features" /></div>
                        <div className="spec-card__content">
                            <RichText.Content tagName="h3" className="spec-card__title" value={spec2Title} />
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
                        <div className="spec-card__image"><img src={spec3Image} alt="Sustainable green spaces" /></div>
                        <div className="spec-card__content">
                            <RichText.Content tagName="h3" className="spec-card__title" value={spec3Title} />
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
    );
}

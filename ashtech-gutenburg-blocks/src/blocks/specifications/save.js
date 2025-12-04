export default function save() {
    return (
        <section className="specifications" id="specifications">
            <div className="specifications__header">
                <p className="specifications__label">Specifications</p>
                <h2 className="specifications__title">Design That Reflects the<br />Art of Perfection</h2>
            </div>
            
            <div className="specifications__cards">
                <div className="specifications__card-wrapper">
                    <div className="spec-card">
                        <div className="spec-card__image">
                            <img src="assets/images/project/spec-residences.jpg" alt="Luxurious residence interior" />
                        </div>
                        <div className="spec-card__content">
                            <h3 className="spec-card__title">Residences</h3>
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
                        <div className="spec-card__image">
                            <img src="assets/images/project/spec-structure.jpg" alt="Building structure and safety features" />
                        </div>
                        <div className="spec-card__content">
                            <h3 className="spec-card__title">Structure & Safety</h3>
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
                        <div className="spec-card__image">
                            <img src="assets/images/project/spec-sustainability.jpg" alt="Sustainable green spaces" />
                        </div>
                        <div className="spec-card__content">
                            <h3 className="spec-card__title">Sustainability</h3>
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

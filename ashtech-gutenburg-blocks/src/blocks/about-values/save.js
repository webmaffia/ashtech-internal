export default function save() {
    return (
        <section className="about-values">
            <div className="about-values__container">
                <div className="about-values__left">
                    <div className="about-values__header">
                        <p className="about-values__label animate-text">Values</p>
                        <h2 className="about-values__title animate-text">The Foundation of Our Legacy</h2>
                    </div>
                    <div className="about-values__grid">
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-excellence.svg" alt="Excellence" />
                            </div>
                            <h3 className="about-values__item-title">Excellence</h3>
                            <p className="about-values__item-desc">Uncompromising standards in every project, every time.</p>
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-innovation.svg" alt="Innovation" />
                            </div>
                            <h3 className="about-values__item-title">Innovation</h3>
                            <p className="about-values__item-desc">Pioneering sustainable construction technologies.</p>
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-integrity.svg" alt="Integrity" />
                            </div>
                            <h3 className="about-values__item-title">Integrity</h3>
                            <p className="about-values__item-desc">Transparent processes, ethical practices, always.</p>
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-trust.svg" alt="Trust" />
                            </div>
                            <h3 className="about-values__item-title">Trust</h3>
                            <p className="about-values__item-desc">Building relationships that last generations.</p>
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-sustainability.svg" alt="Sustainability" />
                            </div>
                            <h3 className="about-values__item-title">Sustainability</h3>
                            <p className="about-values__item-desc">Environmental responsibility in every decision.</p>
                        </div>
                        <div className="about-values__item animate-text">
                            <div className="about-values__icon">
                                <img src="assets/images/about/icon-quality.svg" alt="Quality" />
                            </div>
                            <h3 className="about-values__item-title">Quality</h3>
                            <p className="about-values__item-desc">TQ Cert audited, engineered for permanence.</p>
                        </div>
                    </div>
                </div>
                <div className="about-values__right">
                    <img src="assets/images/about/values-graphic.svg" alt="Building illustration" className="about-values__image" />
                </div>
            </div>
        </section>
    );
}

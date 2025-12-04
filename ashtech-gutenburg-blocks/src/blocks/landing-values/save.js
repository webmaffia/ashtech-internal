export default function save() {
    return (
        <section className="landing-values">
            <div className="landing-values__container">
                <div className="landing-values__text-content">
                    <p className="landing-values__label animate-text">What Defines This Address</p>
                    <h2 className="landing-values__title animate-text">Precision in Every Promise</h2>

                    <div className="landing-values__grid">
                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">80% Open Greens</h3>
                            <p className="landing-values__item-desc">Because space is the ultimate luxury</p>
                        </div>

                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">70,000 Sq.Ft. Club</h3>
                            <p className="landing-values__item-desc">World-class amenities, private access</p>
                        </div>

                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">Zero Ground-Level Traffic</h3>
                            <p className="landing-values__item-desc">Elevated arrival experience, assured safety</p>
                        </div>

                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">TQ Cert Quality</h3>
                            <p className="landing-values__item-desc">Audit-backed construction at every phase</p>
                        </div>

                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">Ashtech Legacy</h3>
                            <p className="landing-values__item-desc">30+ years of engineering excellence</p>
                        </div>

                        <div className="landing-values__item animate-text">
                            <h3 className="landing-values__item-title">Greater Noida West</h3>
                            <p className="landing-values__item-desc">Connected, yet quietly removed</p>
                        </div>
                    </div>
                </div>

                <div className="landing-values__graphic">
                    <img src="assets/images/landing/values-graphic.svg" alt="Building illustration" className="landing-values__image" />
                </div>
            </div>
        </section>
    );
}

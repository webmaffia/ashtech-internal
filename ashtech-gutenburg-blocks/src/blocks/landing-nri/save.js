export default function save() {
    return (
        <section className="landing-nri">
            <div className="landing-nri__background"></div>
            <div className="landing-nri__overlay"></div>
            <div className="landing-nri__container">
                <div className="landing-nri__header">
                    <p className="landing-nri__label animate-text">For NRIs & Global Investors</p>
                    <h2 className="landing-nri__title animate-text">Invest in India's Growth Story</h2>
                    <p className="landing-nri__subtitle animate-text">An address where legacy meets location. Secure your stake in India's fastest-growing urban corridor.</p>
                </div>
                <div className="landing-nri__features">
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-virtual-tour.svg" alt="Virtual Tours" />
                        </div>
                        <p className="landing-nri__feature-text">Virtual tours from anywhere in the world</p>
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-support.svg" alt="Dedicated Support" />
                        </div>
                        <p className="landing-nri__feature-text">Dedicated NRI relationship managers</p>
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-residences.svg" alt="Complete Support" />
                        </div>
                        <p className="landing-nri__feature-text">Complete digital documentation & support</p>
                    </div>
                    <div className="landing-nri__feature animate-text">
                        <div className="landing-nri__feature-icon">
                            <img src="assets/images/landing/icon-documentation.svg" alt="Property Management" />
                        </div>
                        <p className="landing-nri__feature-text">Property management & leasing assistance</p>
                    </div>
                </div>
                <div className="landing-nri__button">
                    <a href="nri.html" className="btn btn--primary">
                        <span>Learn More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

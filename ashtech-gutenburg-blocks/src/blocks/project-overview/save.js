export default function save() {
    return (
        <section className="project-overview" id="overview">
            <div className="project-overview__background"></div>
            <div className="project-overview__container">
                <div className="project-overview__left">
                    <div className="project-overview__stats">
                        <div className="project-overview__stat animate-text">
                            <h3 className="project-overview__stat-number">5.6</h3>
                            <p className="project-overview__stat-label">Acres</p>
                        </div>
                        <div className="project-overview__stat animate-text">
                            <h3 className="project-overview__stat-number">456</h3>
                            <p className="project-overview__stat-label">Residences</p>
                        </div>
                        <div className="project-overview__stat animate-text">
                            <h3 className="project-overview__stat-number">80%</h3>
                            <p className="project-overview__stat-label">Open Greens</p>
                        </div>
                        <div className="project-overview__stat animate-text">
                            <h3 className="project-overview__stat-number">70K</h3>
                            <p className="project-overview__stat-label">Sq.Ft. Club</p>
                        </div>
                    </div>
                </div>
                <div className="project-overview__right">
                    <p className="project-overview__label animate-text">Project Overview</p>
                    <h2 className="project-overview__title animate-text">Presidential Living.<br />Engineered to Perfection.</h2>
                    <p className="project-overview__description animate-text">
                        Ashtech Presidential Towers is a landmark residential project set across 5.6 acres in Greater Noida - West, offering 456 meticulously designed residences. With 80% open greens, a 70,000 sq.ft. clubhouse, and construction quality audited by TQ Cert, this is not just luxury—it's legacy.
                    </p>
                    <button className="btn btn--primary downloadCta">
                        <span>Download Brochure</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

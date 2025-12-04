export default function save() {
    return (
        <section className="landing-overview">
            <div className="landing-overview__container">
                <div className="landing-overview__left">
                    <p className="landing-overview__label animate-text">Ashtech Presidential Towers</p>
                    <h2 className="landing-overview__title animate-text">456 Residences. One Iconic Address.</h2>
                </div>
                <div className="landing-overview__right">
                    <p className="landing-overview__text animate-text">
                        A 5.6-acre landmark in Greater Noida - West where architecture meets aspiration. Envisioned for those who value space, silence, and uncompromising quality, Ashtech Presidential Towers offers 456 residences framed by 80% open greens.
                    </p>
                    <p className="landing-overview__text animate-text">
                        This is not just vertical living—it's living elevated by legacy, refined by detail, and rooted in engineering excellence that has powered India's infrastructure for decades.
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

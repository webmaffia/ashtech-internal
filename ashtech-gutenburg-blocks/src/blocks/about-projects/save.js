export default function save() {
    return (
        <section className="about-projects">
            <div className="project-about__decoration"></div>
            <div className="about-projects__container">
                <div className="about-projects__left">
                    <h2 className="about-projects__title animate-text">Explore Ashtech<br />Presidential Towers</h2>
                </div>
                <div className="about-projects__right">
                    <p className="about-projects__text animate-text">
                        Discover 456 residences set across 5.6 acres with 80% open greens, a 70,000 sq.ft. clubhouse, and construction quality audited by TQ Cert. This is what legacy looks like.
                    </p>
                    <a href="project.html" className="btn btn--primary">
                        <span>View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                            <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

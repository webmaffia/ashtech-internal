export default function save() {
    return (
        <section className="landing-projects">
            <div className="landing-projects__background">
                <img src="assets/images/landing/building-render.jpg" alt="Ashtech Presidential Towers" className="landing-projects__image" />
            </div>
            <div className="landing-projects__overlay"></div>
            <div className="landing-projects__content">
                <div className="landing-projects__buttons">
                    <a href="project.html" className="btn btn--secondary">
                        <span>View Project</span>
                        <div className="btn__icon">
                            <img src="assets/images/arrow-right.svg" alt="Arrow" />
                        </div>
                    </a>
                    <button className="btn btn--secondary downloadCta">
                        <span>Schedule a Site Visit</span>
                        <div className="btn__icon">
                            <img src="assets/images/arrow-right.svg" alt="Arrow" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function save() {
    return (
        <section className="landing-testimonials">
            <div className="landing-testimonials__container">
                <div className="landing-testimonials__header">
                    <p className="landing-testimonials__label animate-text">What Residents Say</p>
                    <h2 className="landing-testimonials__title animate-text">Stories of Trust & Confidence</h2>
                </div>
                <div className="landing-testimonials__slider">
                    <div className="landing-testimonials__slide">
                        <div className="landing-testimonials__card">
                            <div className="landing-testimonials__quote">
                                <img src="assets/images/landing/quote.svg" alt="Quote" />
                            </div>
                            <p className="landing-testimonials__text">
                                "We were drawn to the open greens and the club facilities. Ashtech's attention to detail and commitment to quality gave us the confidence to invest here."
                            </p>
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <p className="landing-testimonials__author-name">Priya & Rajesh M.</p>
                                    <p className="landing-testimonials__author-location">Greater Noida</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-testimonials__slide">
                        <div className="landing-testimonials__card">
                            <div className="landing-testimonials__quote">
                                <img src="assets/images/landing/quote.svg" alt="Quote" />
                            </div>
                            <p className="landing-testimonials__text">
                                "As an NRI, I needed a developer I could trust. Ashtech's legacy in infrastructure and their transparent processes made this decision easy."
                            </p>
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <p className="landing-testimonials__author-name">Anil K.</p>
                                    <p className="landing-testimonials__author-location">Dubai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-testimonials__slide">
                        <div className="landing-testimonials__card">
                            <div className="landing-testimonials__quote">
                                <img src="assets/images/landing/quote.svg" alt="Quote" />
                            </div>
                            <p className="landing-testimonials__text">
                                "The zero ground-level traffic and private lift lobbies sealed the deal for us. It's a level of planning you rarely see in NCR projects."
                            </p>
                            <div className="landing-testimonials__author">
                                <div className="landing-testimonials__author-avatar">
                                    <img src="assets/images/landing/avatar.png" alt="Avatar" />
                                </div>
                                <div className="landing-testimonials__author-info">
                                    <p className="landing-testimonials__author-name">Simran & Vikram S.</p>
                                    <p className="landing-testimonials__author-location">Noida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-testimonials__navigation">
                    <button className="landing-testimonials__arrow landing-testimonials__arrow--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="landing-testimonials__dots"></div>
                    <button className="landing-testimonials__arrow landing-testimonials__arrow--next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

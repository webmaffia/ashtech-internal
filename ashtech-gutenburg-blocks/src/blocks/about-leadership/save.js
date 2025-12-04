export default function save() {
    return (
        <section className="about-leadership">
            <div className="about-leadership__container">
                <div className="about-leadership__header">
                    <p className="about-leadership__label animate-text">Leadership</p>
                    <h2 className="about-leadership__title animate-text">Visionaries Behind the Legacy</h2>
                </div>

                {/* Director */}
                <div className="about-leadership__director">
                    <div className="about-leadership__director-image">
                        <img src="assets/images/about/director.jpg" alt="Director" />
                    </div>
                    <div className="about-leadership__director-info">
                        <h3 className="about-leadership__director-name animate-text">Sumit Agarwal</h3>
                        <p className="about-leadership__director-title animate-text">Director, Ashtech Group</p>
                        <div className="about-leadership__director-bio animate-text">
                            <p>With over two decades of experience in engineering and infrastructure development, Sumit Agarwal leads Ashtech Group's vision of creating world-class residential and commercial landmarks.</p>
                            <p>Under his leadership, Ashtech Group has expanded from construction materials to become a diversified force in India's infrastructure landscape, maintaining an unwavering commitment to quality, sustainability, and innovation.</p>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="about-leadership__team">
                    <h3 className="about-leadership__team-title animate-text">Leadership Team</h3>
                    <div className="about-leadership__grid">
                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-1.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Rajesh Kumar</h4>
                            <p className="about-leadership__card-role">Chief Operating Officer</p>
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-2.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Priya Sharma</h4>
                            <p className="about-leadership__card-role">Head of Projects</p>
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-3.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Amit Verma</h4>
                            <p className="about-leadership__card-role">Chief Financial Officer</p>
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-4.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Neha Patel</h4>
                            <p className="about-leadership__card-role">Head of Marketing</p>
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-5.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Vikram Singh</h4>
                            <p className="about-leadership__card-role">Chief Architect</p>
                        </div>

                        <div className="about-leadership__card animate-text">
                            <div className="about-leadership__card-image">
                                <img src="assets/images/about/team-6.jpg" alt="Team Member" />
                            </div>
                            <h4 className="about-leadership__card-name">Sanjay Gupta</h4>
                            <p className="about-leadership__card-role">Head of Quality Assurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

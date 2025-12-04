export default function save() {
    return (
        <section className="about-vision-mission">
            <div className="about-vision-mission__container">
                <div className="about-vision-mission__section about-vision-mission__vision">
                    <div className="about-vision-mission__image">
                        <img src="assets/images/about/vision.jpg" alt="Vision" />
                    </div>
                    <div className="about-vision-mission__content">
                        <h2 className="about-vision-mission__title animate-text">Our Vision</h2>
                        <p className="about-vision-mission__text animate-text">
                            To redefine urban living in India by creating spaces that seamlessly blend architecture, nature, and technology. We envision a future where our developments stand as timeless landmarks of engineering excellence and human-centric design.
                        </p>
                    </div>
                </div>

                <div className="about-vision-mission__section about-vision-mission__mission">
                    <div className="about-vision-mission__image about-vision-mission__image--right">
                        <img src="assets/images/about/mission.jpg" alt="Mission" />
                    </div>
                    <div className="about-vision-mission__content about-vision-mission__content--right">
                        <h2 className="about-vision-mission__title animate-text">Our Mission</h2>
                        <p className="about-vision-mission__text animate-text">
                            To build residential and commercial projects that exceed industry standards through third-party audits, sustainable construction practices, and uncompromising attention to detail. Every project we undertake is a commitment to quality, transparency, and long-term value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

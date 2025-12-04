export default function save() {
    return (
        <section className="about-director-message">
            <div className="about-director-message__background"></div>
            <div className="about-director-message__container">
                <div className="about-director-message__content">
                    <h2 className="about-director-message__title animate-text">A Message from Our Director</h2>
                    <div className="about-director-message__text animate-text">
                        <p>"When we decided to enter real estate, we knew we had to bring the same principles that built our reputation in infrastructure: uncompromising quality, transparency, and a long-term vision."</p>
                        <p>"Ashtech Presidential Towers is not just a building project. It's a statement that real estate development can be rooted in engineering rigor, audited construction, and genuine value creation."</p>
                        <p>"Every residence here will carry the Ashtech seal of excellence—a promise that has endured for over three decades."</p>
                    </div>
                    <div className="about-director-message__signature animate-text">
                        <div className="about-director-message__signature-line"></div>
                        <p className="about-director-message__signature-name">Sumit Agarwal</p>
                        <p className="about-director-message__signature-title">Director, Ashtech Group</p>
                    </div>
                </div>
                <div className="about-director-message__image">
                    <img src="assets/images/about/director-message.jpg" alt="Director" />
                </div>
            </div>
        </section>
    );
}

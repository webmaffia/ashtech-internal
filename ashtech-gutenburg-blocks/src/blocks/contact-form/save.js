export default function save() {
    return (
        <section className="contact-form">
            <div className="contact-form__container">
                <div className="contact-form__header">
                    <h2 className="contact-form__title">Let's get in touch</h2>
                    <p className="contact-form__subtitle">Please share your details, and our team will be in touch with you at the earliest.</p>
                </div>
                
                <form className="contact-form__form" id="contactForm">
                    <div className="contact-form__fields">
                        <div className="contact-form__field">
                            <input type="text" id="name" name="name" className="contact-form__input" placeholder="Your Name" required />
                        </div>
                        
                        <div className="contact-form__field">
                            <input type="email" id="email" name="email" className="contact-form__input" placeholder="Email" required />
                        </div>
                        
                        <div className="contact-form__field-group">
                            <div className="contact-form__field contact-form__field--country">
                                <input type="text" id="countryCode" name="countryCode" className="contact-form__input" value="+91 (India)" readOnly />
                            </div>
                            <div className="contact-form__field contact-form__field--phone">
                                <input type="tel" id="phone" name="phone" className="contact-form__input" placeholder="Your Phone Number" required />
                            </div>
                        </div>
                        
                        <div className="contact-form__field">
                            <input type="text" id="city" name="city" className="contact-form__input" placeholder="Enter Your City" required />
                        </div>
                        
                        <div className="contact-form__field">
                            <input type="text" id="project" name="project" className="contact-form__input" placeholder="Enter Project Name" required />
                        </div>
                        
                        <div className="contact-form__field">
                            <textarea id="queries" name="queries" className="contact-form__textarea" placeholder="Any Queries For Us" rows="4"></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn--primary contact-form__submit">
                        <span>Submit</span>
                        <div className="btn__icon">
                            <img src="assets/images/contact/icon-arrow-submit.svg" alt="Arrow" />
                        </div>
                    </button>
                </form>
            </div>
        </section>
    );
}

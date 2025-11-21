import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <footer className="landing-footer">
            <div className="landing-footer__background"></div>
            <div className="landing-footer__content">
                <div className="landing-footer__main">
                    <div className="landing-footer__about">
                        <div className="landing-footer__logo">
                            <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/footer-logo.svg" alt="Ashtech Logo" />
                        </div>
                        <RichText.Content
                            tagName="p"
                            className="landing-footer__description animate-text"
                            value={attributes.description}
                        />
                        <div className="landing-footer__social">
                            <a href="#" className="landing-footer__social-link" aria-label="Facebook">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/social-facebook.svg" alt="Facebook" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="Twitter">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/social-twitter.svg" alt="Twitter" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="Instagram">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/social-instagram.svg" alt="Instagram" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="LinkedIn">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/social-linkedin.svg" alt="LinkedIn" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="YouTube">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/social-youtube.svg" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                    <div className="landing-footer__links">
                        <h3 className="landing-footer__links-title animate-text">Quick Links</h3>
                        <ul className="landing-footer__links-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Ashtech Presidential</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Media & Insights</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="landing-footer__contact">
                        <h3 className="landing-footer__contact-title animate-text">Contact Us</h3>
                        <div className="landing-footer__contact-list">
                            <div className="landing-footer__contact-item">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/icon-location.svg" alt="Location" className="landing-footer__contact-icon" />
                                <RichText.Content
                                    tagName="p"
                                    className="animate-text"
                                    value={attributes.address}
                                />
                            </div>
                            <div className="landing-footer__contact-item">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/icon-phone.svg" alt="Phone" className="landing-footer__contact-icon" />
                                <p>
                                    <a href={`tel:${attributes.phone.replace(/\s/g, '')}`} className="animate-text w-400">
                                        <RichText.Content value={attributes.phone} />
                                    </a>
                                </p>
                            </div>
                            <div className="landing-footer__contact-item">
                                <img src="/wp-content/plugins/ashtech-gutenberg-blocks/assets/images/icon-email.svg" alt="Email" className="landing-footer__contact-icon" />
                                <p>
                                    <a href={`mailto:${attributes.email}`} className="animate-text w-400">
                                        <RichText.Content value={attributes.email} />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-footer__bottom">
                    <RichText.Content
                        tagName="p"
                        className="landing-footer__copyright"
                        value={attributes.copyright}
                    />
                    <RichText.Content
                        tagName="p"
                        className="landing-footer__legal"
                        value={attributes.legal}
                    />
                </div>
            </div>
        </footer>
    );
}


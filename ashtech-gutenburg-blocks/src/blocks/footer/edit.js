import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps({
        className: 'landing-footer',
    });
    
    // Get plugin URL for images
    const pluginUrl = window.ashtechBlocksUrl || '/wp-content/plugins/ashtech-gutenberg-blocks/';

    return (
        <footer {...blockProps}>
            <div className="landing-footer__background"></div>
            <div className="landing-footer__content">
                <div className="landing-footer__main">
                    <div className="landing-footer__about">
                        <div className="landing-footer__logo">
                            <img src={`${pluginUrl}assets/images/landing/footer-logo.svg`} alt="Ashtech Logo" />
                        </div>
                        <RichText
                            tagName="p"
                            className="landing-footer__description animate-text"
                            value={attributes.description}
                            onChange={(value) => setAttributes({ description: value })}
                            placeholder={__('Description...', 'ashtech-blocks')}
                        />
                        <div className="landing-footer__social">
                            <a href="#" className="landing-footer__social-link" aria-label="Facebook">
                                <img src={`${pluginUrl}assets/images/landing/social-facebook.svg`} alt="Facebook" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="Twitter">
                                <img src={`${pluginUrl}assets/images/landing/social-twitter.svg`} alt="Twitter" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="Instagram">
                                <img src={`${pluginUrl}assets/images/landing/social-instagram.svg`} alt="Instagram" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="LinkedIn">
                                <img src={`${pluginUrl}assets/images/landing/social-linkedin.svg`} alt="LinkedIn" />
                            </a>
                            <a href="#" className="landing-footer__social-link" aria-label="YouTube">
                                <img src={`${pluginUrl}assets/images/landing/social-youtube.svg`} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                    <div className="landing-footer__links">
                        <h3 className="landing-footer__links-title animate-text">{__('Quick Links', 'ashtech-blocks')}</h3>
                        <ul className="landing-footer__links-list">
                            <li><a href="#">{__('Home', 'ashtech-blocks')}</a></li>
                            <li><a href="#">{__('Ashtech Presidential', 'ashtech-blocks')}</a></li>
                            <li><a href="#">{__('About Us', 'ashtech-blocks')}</a></li>
                            <li><a href="#">{__('Media & Insights', 'ashtech-blocks')}</a></li>
                            <li><a href="#">{__('Careers', 'ashtech-blocks')}</a></li>
                            <li><a href="#">{__('Contact Us', 'ashtech-blocks')}</a></li>
                        </ul>
                    </div>
                    <div className="landing-footer__contact">
                        <h3 className="landing-footer__contact-title animate-text">{__('Contact Us', 'ashtech-blocks')}</h3>
                        <div className="landing-footer__contact-list">
                            <div className="landing-footer__contact-item">
                                <img src={`${pluginUrl}assets/images/landing/icon-location.svg`} alt="Location" className="landing-footer__contact-icon" />
                                <RichText
                                    tagName="p"
                                    className="animate-text"
                                    value={attributes.address}
                                    onChange={(value) => setAttributes({ address: value })}
                                    placeholder={__('Address...', 'ashtech-blocks')}
                                />
                            </div>
                            <div className="landing-footer__contact-item">
                                <img src={`${pluginUrl}assets/images/landing/icon-phone.svg`} alt="Phone" className="landing-footer__contact-icon" />
                                <RichText
                                    tagName="p"
                                    value={attributes.phone}
                                    onChange={(value) => setAttributes({ phone: value })}
                                    placeholder={__('Phone...', 'ashtech-blocks')}
                                />
                            </div>
                            <div className="landing-footer__contact-item">
                                <img src={`${pluginUrl}assets/images/landing/icon-email.svg`} alt="Email" className="landing-footer__contact-icon" />
                                <RichText
                                    tagName="p"
                                    value={attributes.email}
                                    onChange={(value) => setAttributes({ email: value })}
                                    placeholder={__('Email...', 'ashtech-blocks')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-footer__bottom">
                    <RichText
                        tagName="p"
                        className="landing-footer__copyright"
                        value={attributes.copyright}
                        onChange={(value) => setAttributes({ copyright: value })}
                        placeholder={__('Copyright...', 'ashtech-blocks')}
                    />
                    <RichText
                        tagName="p"
                        className="landing-footer__legal"
                        value={attributes.legal}
                        onChange={(value) => setAttributes({ legal: value })}
                        placeholder={__('Legal...', 'ashtech-blocks')}
                    />
                </div>
            </div>
        </footer>
    );
}


import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { 
        heroTitle, 
        heroSubtitle, 
        enquiryTitle,
        salesPhone,
        salesEmail,
        customerPhone,
        customerEmail,
        corporateAddress,
        corporatePhone,
        corporateEmail,
        siteAddress,
        siteEmail
    } = attributes;

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero contactbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Enter hero title...', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-main"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Enter subtitle...', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-enquiry">
                <div className="contact-enquiry__background"></div>
                <div className="contact-enquiry__container">
                    <div className="contact-enquiry__header">
                        <RichText
                            tagName="h2"
                            className="contact-enquiry__title"
                            value={enquiryTitle}
                            onChange={(value) => setAttributes({ enquiryTitle: value })}
                            placeholder={__('Enquiry Directory', 'ashtech-pages-blocks')}
                        />
                        <p className="contact-enquiry__subtitle">Connect With Ashtech</p>
                    </div>
                    
                    <div className="contact-enquiry__content">
                        <div className="contact-enquiry__row">
                            <div className="contact-enquiry__card">
                                <h3 className="contact-enquiry__card-title">Sales Enquiry</h3>
                                <div className="contact-enquiry__details">
                                    <div className="contact-enquiry__detail-item">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-phone.svg" alt="Phone" />
                                        </div>
                                        <RichText
                                            tagName="a"
                                            className="contact-enquiry__text"
                                            value={salesPhone}
                                            onChange={(value) => setAttributes({ salesPhone: value })}
                                            placeholder={__('Phone...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-email.svg" alt="Email" />
                                        </div>
                                        <RichText
                                            tagName="a"
                                            className="contact-enquiry__text"
                                            value={salesEmail}
                                            onChange={(value) => setAttributes({ salesEmail: value })}
                                            placeholder={__('Email...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-enquiry__card">
                                <h3 className="contact-enquiry__card-title">Customer Enquiry</h3>
                                <div className="contact-enquiry__details">
                                    <div className="contact-enquiry__detail-item">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-phone.svg" alt="Phone" />
                                        </div>
                                        <RichText
                                            tagName="a"
                                            className="contact-enquiry__text"
                                            value={customerPhone}
                                            onChange={(value) => setAttributes({ customerPhone: value })}
                                            placeholder={__('Phone...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                    <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-email.svg" alt="Email" />
                                        </div>
                                        <RichText
                                            tagName="a"
                                            className="contact-enquiry__text"
                                            value={customerEmail}
                                            onChange=(value) => setAttributes({ customerEmail: value })}
                                            placeholder={__('Email...', 'ashtech-pages-blocks')}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-enquiry__card">
                                <h3 className="contact-enquiry__card-title">Investor Relations</h3>
                                <div className="contact-enquiry__details">
                                    <div className="contact-enquiry__detail-item">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-phone.svg" alt="Phone" />
                                        </div>
                                        <a href="tel:9278333333" className="contact-enquiry__text">9278 333 333</a>
                                    </div>
                                    <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-email.svg" alt="Email" />
                                        </div>
                                        <a href="mailto:care@ashtechgroup.in" className="contact-enquiry__text">care@ashtechgroup.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-enquiry__row contact-enquiry__row--center">
                            <div className="contact-enquiry__card">
                                <h3 className="contact-enquiry__card-title">Career Enquiry</h3>
                                <div className="contact-enquiry__details">
                                    <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                        <div className="contact-enquiry__icon">
                                            <img src="assets/images/contact/icon-email.svg" alt="Email" />
                                        </div>
                                        <a href="mailto:care@ashtechgroup.in" className="contact-enquiry__text">care@ashtechgroup.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Addresses Section */}
            <section className="contact-offices">
                <div className="contact-offices__container">
                    <div className="contact-offices__header">
                        <h2 className="contact-offices__title">Office Addresses</h2>
                    </div>
                    
                    <div className="contact-offices__content">
                        {/* Corporate Office */}
                        <div className="contact-offices__card">
                            <div className="contact-offices__image">
                                <img src="assets/images/contact/office-corporate.jpg" alt="Ashtech Corporate Office" />
                            </div>
                            <div className="contact-offices__info">
                                <h3 className="contact-offices__card-title">Ashtech Corporate Office</h3>
                                <div className="contact-offices__details">
                                    <div className="contact-offices__detail-item">
                                        <div className="contact-offices__icon">
                                            <img src="assets/images/contact/icon-location.svg" alt="Location" />
                                        </div>
                                        <div className="contact-offices__text-wrapper">
                                            <RichText
                                                tagName="p"
                                                className="contact-offices__text"
                                                value={corporateAddress}
                                                onChange={(value) => setAttributes({ corporateAddress: value })}
                                                placeholder={__('Address...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-offices__detail-item">
                                        <div className="contact-offices__icon">
                                            <img src="assets/images/contact/icon-phone-office.svg" alt="Phone" />
                                        </div>
                                        <div className="contact-offices__text-wrapper">
                                            <RichText
                                                tagName="a"
                                                className="contact-offices__text"
                                                value={corporatePhone}
                                                onChange={(value) => setAttributes({ corporatePhone: value })}
                                                placeholder={__('Phone...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-offices__detail-item">
                                        <div className="contact-offices__icon">
                                            <img src="assets/images/contact/icon-email-office.svg" alt="Email" />
                                        </div>
                                        <div className="contact-offices__text-wrapper">
                                            <RichText
                                                tagName="a"
                                                className="contact-offices__text"
                                                value={corporateEmail}
                                                onChange={(value) => setAttributes({ corporateEmail: value })}
                                                placeholder={__('Email...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn--primary contact-offices__button">
                                    <span>Get Directions</span>
                                    <div className="btn__icon">
                                        <img src="assets/images/contact/icon-arrow.svg" alt="Arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        {/* Site Office */}
                        <div className="contact-offices__card">
                            <div className="contact-offices__image contact-offices__image--site">
                                <img src="assets/images/contact/office-site.jpg" alt="Ashtech Site Office" />
                            </div>
                            <div className="contact-offices__info">
                                <h3 className="contact-offices__card-title">Ashtech Site Office</h3>
                                <div className="contact-offices__details">
                                    <div className="contact-offices__detail-item">
                                        <div className="contact-offices__icon">
                                            <img src="assets/images/contact/icon-location.svg" alt="Location" />
                                        </div>
                                        <div className="contact-offices__text-wrapper">
                                            <RichText
                                                tagName="p"
                                                className="contact-offices__text"
                                                value={siteAddress}
                                                onChange={(value) => setAttributes({ siteAddress: value })}
                                                placeholder={__('Address...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-offices__detail-item">
                                        <div className="contact-offices__icon">
                                            <img src="assets/images/contact/icon-email-office.svg" alt="Email" />
                                        </div>
                                        <div className="contact-offices__text-wrapper">
                                            <RichText
                                                tagName="a"
                                                className="contact-offices__text"
                                                value={siteEmail}
                                                onChange={(value) => setAttributes({ siteEmail: value })}
                                                placeholder={__('Email...', 'ashtech-pages-blocks')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn--primary contact-offices__button">
                                    <span>Get Directions</span>
                                    <div className="btn__icon">
                                        <img src="assets/images/contact/icon-arrow.svg" alt="Arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
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
        </div>
    );
}


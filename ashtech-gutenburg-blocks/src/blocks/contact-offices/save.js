import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title } = attributes;

    return (
        <section className="contact-offices">
            <div className="contact-offices__container">
                <div className="contact-offices__header">
                    <RichText.Content tagName="h2" className="contact-offices__title" value={title} />
                </div>
                
                <div className="contact-offices__content">
                    <div className="contact-offices__card">
                        <div className="contact-offices__image"><img src="assets/images/contact/office-corporate.jpg" alt="Ashtech Corporate Office" /></div>
                        <div className="contact-offices__info">
                            <h3 className="contact-offices__card-title">Ashtech Corporate Office</h3>
                            <div className="contact-offices__details">
                                <div className="contact-offices__detail-item">
                                    <div className="contact-offices__icon"><img src="assets/images/contact/icon-location.svg" alt="Location" /></div>
                                    <div className="contact-offices__text-wrapper">
                                        <p className="contact-offices__text">C-50, RDC, GHAZIABAD-DELHI NCR</p>
                                    </div>
                                </div>
                                <div className="contact-offices__detail-item">
                                    <div className="contact-offices__icon"><img src="assets/images/contact/icon-phone-office.svg" alt="Phone" /></div>
                                    <div className="contact-offices__text-wrapper">
                                        <a href="tel:01204538000" className="contact-offices__text">0120 45 38 000</a>
                                    </div>
                                </div>
                                <div className="contact-offices__detail-item">
                                    <div className="contact-offices__icon"><img src="assets/images/contact/icon-email-office.svg" alt="Email" /></div>
                                    <div className="contact-offices__text-wrapper">
                                        <a href="mailto:flyash@ashtechgroup.in" className="contact-offices__text">flyash@ashtechgroup.in</a>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn--primary contact-offices__button">
                                <span>Get Directions</span>
                                <div className="btn__icon"><img src="assets/images/contact/icon-arrow.svg" alt="Arrow" /></div>
                            </button>
                        </div>
                    </div>
                    
                    <div className="contact-offices__card">
                        <div className="contact-offices__image contact-offices__image--site"><img src="assets/images/contact/office-site.jpg" alt="Ashtech Site Office" /></div>
                        <div className="contact-offices__info">
                            <h3 className="contact-offices__card-title">Ashtech Site Office</h3>
                            <div className="contact-offices__details">
                                <div className="contact-offices__detail-item">
                                    <div className="contact-offices__icon"><img src="assets/images/contact/icon-location.svg" alt="Location" /></div>
                                    <div className="contact-offices__text-wrapper">
                                        <p className="contact-offices__text">GH-01/F, G, H & I, Sector 12, Greater Noida west, Uttar Pradesh, India, Pin: 201318</p>
                                    </div>
                                </div>
                                <div className="contact-offices__detail-item">
                                    <div className="contact-offices__icon"><img src="assets/images/contact/icon-email-office.svg" alt="Email" /></div>
                                    <div className="contact-offices__text-wrapper">
                                        <a href="mailto:care@ashtechgroup.in" className="contact-offices__text">care@ashtechgroup.in</a>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn--primary contact-offices__button">
                                <span>Get Directions</span>
                                <div className="btn__icon"><img src="assets/images/contact/icon-arrow.svg" alt="Arrow" /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

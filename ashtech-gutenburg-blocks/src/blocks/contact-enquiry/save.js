import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, subtitle } = attributes;

    return (
        <section className="contact-enquiry">
            <div className="contact-enquiry__background"></div>
            <div className="contact-enquiry__container">
                <div className="contact-enquiry__header">
                    <RichText.Content tagName="h2" className="contact-enquiry__title" value={title} />
                    <RichText.Content tagName="p" className="contact-enquiry__subtitle" value={subtitle} />
                </div>
                
                <div className="contact-enquiry__content">
                    <div className="contact-enquiry__row">
                        <div className="contact-enquiry__card">
                            <h3 className="contact-enquiry__card-title">Sales Enquiry</h3>
                            <div className="contact-enquiry__details">
                                <div className="contact-enquiry__detail-item">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-phone.svg" alt="Phone" /></div>
                                    <a href="tel:9278333333" className="contact-enquiry__text">9278 333 333</a>
                                </div>
                                <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-email.svg" alt="Email" /></div>
                                    <a href="mailto:care@ashtechgroup.in" className="contact-enquiry__text">care@ashtechgroup.in</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-enquiry__card">
                            <h3 className="contact-enquiry__card-title">Customer Enquiry</h3>
                            <div className="contact-enquiry__details">
                                <div className="contact-enquiry__detail-item">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-phone.svg" alt="Phone" /></div>
                                    <a href="tel:9278333333" className="contact-enquiry__text">9278 333 333</a>
                                </div>
                                <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-email.svg" alt="Email" /></div>
                                    <a href="mailto:care@ashtechgroup.in" className="contact-enquiry__text">care@ashtechgroup.in</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-enquiry__card">
                            <h3 className="contact-enquiry__card-title">Investor Relations</h3>
                            <div className="contact-enquiry__details">
                                <div className="contact-enquiry__detail-item">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-phone.svg" alt="Phone" /></div>
                                    <a href="tel:9278333333" className="contact-enquiry__text">9278 333 333</a>
                                </div>
                                <div className="contact-enquiry__detail-item contact-enquiry__detail-item--email">
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-email.svg" alt="Email" /></div>
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
                                    <div className="contact-enquiry__icon"><img src="assets/images/contact/icon-email.svg" alt="Email" /></div>
                                    <a href="mailto:care@ashtechgroup.in" className="contact-enquiry__text">care@ashtechgroup.in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

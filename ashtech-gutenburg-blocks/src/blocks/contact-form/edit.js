import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title, subtitle } = attributes;

    return (
        <div {...blockProps}>
            <section className="contact-form">
                <div className="contact-form__container">
                    <div className="contact-form__header">
                        <RichText tagName="h2" className="contact-form__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                        <RichText tagName="p" className="contact-form__subtitle" value={subtitle} onChange={(value) => setAttributes({ subtitle: value })} placeholder="Subtitle..." />
                    </div>
                    
                    <form className="contact-form__form">
                        <div className="contact-form__fields">
                            <input type="text" className="contact-form__input" placeholder="Your Name" />
                            <input type="email" className="contact-form__input" placeholder="Email" />
                            <div className="contact-form__field-group">
                                <input type="text" className="contact-form__input" value="+91 (India)" readOnly />
                                <input type="tel" className="contact-form__input" placeholder="Your Phone Number" />
                            </div>
                            <input type="text" className="contact-form__input" placeholder="Enter Your City" />
                            <input type="text" className="contact-form__input" placeholder="Enter Project Name" />
                            <textarea className="contact-form__textarea" placeholder="Any Queries For Us" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn--primary contact-form__submit">
                            <span>Submit</span>
                            <div className="btn__icon"><img src="assets/images/contact/icon-arrow-submit.svg" alt="Arrow" /></div>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

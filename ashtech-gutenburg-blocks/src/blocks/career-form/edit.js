import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-form">
                <div className="career-form__background"></div>
                <div className="career-form__container">
                    <div className="career-form__header">
                        <RichText tagName="h2" className="career-form__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Form title..." />
                    </div>
                    
                    <form className="career-form__form" id="careerForm">
                        <div className="career-form__fields">
                            <div className="career-form__field">
                                <input type="text" className="career-form__input" placeholder="Your Name" />
                            </div>
                            <div className="career-form__field">
                                <input type="email" className="career-form__input" placeholder="Email" />
                            </div>
                            <div className="career-form__field-group">
                                <div className="career-form__field career-form__field--country">
                                    <input type="text" className="career-form__input" value="+91 (India)" readOnly />
                                </div>
                                <div className="career-form__field career-form__field--phone">
                                    <input type="tel" className="career-form__input" placeholder="Your Phone Number" />
                                </div>
                            </div>
                            <div className="career-form__field">
                                <input type="text" className="career-form__input" placeholder="Position Interested In" />
                            </div>
                            <div className="career-form__field career-form__field--upload">
                                <label className="career-form__file-label">
                                    <img src="assets/images/career/icon-upload.svg" alt="Upload" />
                                    <span>Upload Resume</span>
                                </label>
                            </div>
                            <div className="career-form__field">
                                <textarea className="career-form__textarea" placeholder="Message" rows="4"></textarea>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn--primary career-form__submit">
                            <span>Submit Application</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

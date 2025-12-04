import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { label, title, howToApplyTitle, howToApplyText } = attributes;

    return (
        <div {...blockProps}>
            <section className="career-openings">
                <div className="career-openings__background"></div>
                <div className="career-openings__container">
                    <div className="career-openings__header">
                        <RichText tagName="p" className="career-openings__label animate-text" value={label} onChange={(value) => setAttributes({ label: value })} placeholder="Label..." />
                        <RichText tagName="h2" className="career-openings__title animate-text" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Title..." />
                    </div>
                    
                    <div className="career-openings__list">
                        {/* Static job cards - these would typically come from database/API */}
                        <div className="job-card">
                            <div className="job-card__info">
                                <h3 className="job-card__title">Site Engineer</h3>
                                <div className="job-card__tags">
                                    <span className="job-card__tag"><img src="assets/images/career/icon-category.svg" alt="" />Construction</span>
                                    <span className="job-card__tag"><img src="assets/images/career/icon-location.svg" alt="" />Pune</span>
                                    <span className="job-card__tag"><img src="assets/images/career/icon-clock.svg" alt="" />10 Oct 2025</span>
                                </div>
                            </div>
                            <button className="btn btn--secondary career-openings__apply">
                                <span>Apply Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <p style={{ padding: '15px', background: '#f0f0f0', margin: '20px 0', borderRadius: '4px', fontSize: '12px' }}>
                            ℹ️ Job cards shown as static. Consider dynamic job listing system for production.
                        </p>
                    </div>
                    
                    <div className="career-openings__how-to-apply">
                        <RichText tagName="h3" className="career-openings__apply-title animate-text" value={howToApplyTitle} onChange={(value) => setAttributes({ howToApplyTitle: value })} placeholder="How to apply title..." />
                        <RichText tagName="p" className="career-openings__apply-text animate-text" value={howToApplyText} onChange={(value) => setAttributes({ howToApplyText: value })} placeholder="How to apply text..." allowedFormats={['core/bold', 'core/italic']} />
                    </div>
                </div>
            </section>
        </div>
    );
}

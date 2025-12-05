import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewText, whyImage1, whyImage2, whyImage3, jobCards = [] } = attributes;
    const assetsUrl = window.ashtechBlocksData ? window.ashtechBlocksData.assetsUrl : 'assets/';

    // Helper functions for job cards
    const updateJobCard = (index, field, value) => {
        const newJobCards = [...jobCards];
        newJobCards[index] = { ...newJobCards[index], [field]: value };
        setAttributes({ jobCards: newJobCards });
    };

    const addJobCard = () => {
        setAttributes({
            jobCards: [
                ...jobCards,
                {
                    title: 'New Job Position',
                    category: 'Category',
                    location: 'Location',
                    date: 'Date'
                }
            ]
        });
    };

    const removeJobCard = (index) => {
        const newJobCards = jobCards.filter((_, i) => i !== index);
        setAttributes({ jobCards: newJobCards });
    };

    return (
        <div {...useBlockProps()}>
            {/* Hero Banner Section */}
            <section className="project-hero careerbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText
                        tagName="h1"
                        className="project-hero__title"
                        value={heroTitle}
                        onChange={(value) => setAttributes({ heroTitle: value })}
                        placeholder={__('Careers at The Ashtech<br> Presidential Towers', 'ashtech-pages-blocks')}
                    />
                    <div className="project-hero__subtitle">
                        <RichText
                            tagName="p"
                            className="project-hero__subtitle-text"
                            value={heroSubtitle}
                            onChange={(value) => setAttributes({ heroSubtitle: value })}
                            placeholder={__('Come, Build the Future With Us!', 'ashtech-pages-blocks')}
                        />
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="career-overview">
                <div className="project-about__decoration"></div>
                <div className="career-overview__container">
                    <div className="career-overview__left">
                        <p className="career-overview__label animate-text">Overview</p>
                        <RichText
                            tagName="h2"
                            className="career-overview__title animate-text"
                            value={overviewTitle}
                            onChange={(value) => setAttributes({ overviewTitle: value })}
                            placeholder={__('Join a Legacy of Excellence', 'ashtech-pages-blocks')}
                        />
                    </div>
                    <div className="career-overview__right">
                        <div className="career-overview__text animate-text">
                            <RichText
                                tagName="div"
                                value={overviewText}
                                onChange={(value) => setAttributes({ overviewText: value })}
                                placeholder={__('Ashtech Presidential Towers is a testament to the legacy of excellence...', 'ashtech-pages-blocks')}
                                multiline="p"
                                allowedFormats={['core/bold', 'core/italic', 'core/link']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="career-why">
                <div className="career-why__container">
                    <div className="career-why__header">
                        <p className="career-why__label animate-text">Why choose us</p>
                        <h2 className="career-why__title animate-text">Why Choose Ashtech Presidential Towers?</h2>
                    </div>
                    
                    <div className="career-why__cards">
                        <div className="career-why__card career-why__card--offset-1">
                            <div className="career-why__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ whyImage1: media.url })}
                                        allowedTypes={['image']}
                                        value={whyImage1}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                <img 
                                                    src={whyImage1 || `${assetsUrl}images/career/why-3.jpg`} 
                                                    alt="Culture of Trust"
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    onClick={open}
                                                />
                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                    {whyImage1 ? __('Change Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="career-why__content">
                                <h3 className="career-why__card-title animate-text">Real Projects. Real Impact.</h3>
                                <p className="career-why__card-desc animate-text">From powering rural India to building metro infrastructure, every project we have taken on shapes lives, communities, and cities. Backed by this legacy at Ashtech Group, we are now redefining skylines. Our work speaks for itself.</p>
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-2">
                            <div className="career-why__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ whyImage2: media.url })}
                                        allowedTypes={['image']}
                                        value={whyImage2}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                <img 
                                                    src={whyImage2 || `${assetsUrl}images/career/why-2.jpg`} 
                                                    alt="Grow With Confidence"
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    onClick={open}
                                                />
                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                    {whyImage2 ? __('Change Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="career-why__content">
                                <h3 className="career-why__card-title animate-text">Grow With Confidence.</h3>
                                <p className="career-why__card-desc animate-text">Growth thrives in an environment of trust and opportunity. Here, you'll find mentorship, accountability, and the freedom to lead. Because when you progress, we all do. Together, we succeed!</p>
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-3">
                            <div className="career-why__image">
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(media) => setAttributes({ whyImage3: media.url })}
                                        allowedTypes={['image']}
                                        value={whyImage3}
                                        render={({ open }) => (
                                            <div style={{ position: 'relative' }}>
                                                <img 
                                                    src={whyImage3 || `${assetsUrl}images/career/why-1.jpg`} 
                                                    alt="Real Projects"
                                                    style={{ width: '100%', cursor: 'pointer' }}
                                                    onClick={open}
                                                />
                                                <Button onClick={open} isPrimary style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                                    {whyImage3 ? __('Change Image', 'ashtech-pages-blocks') : __('Upload Image', 'ashtech-pages-blocks')}
                                                </Button>
                                            </div>
                                        )}
                                    />
                                </MediaUploadCheck>
                            </div>
                            <div className="career-why__content">
                                <h3 className="career-why__card-title animate-text">Culture of Trust.</h3>
                                <p className="career-why__card-desc animate-text">Our people-first philosophy drives everything we do. With ethics at the core and open-door leadership across all levels, we foster collaboration, integrity, and mutual respect in every interaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life at Ashtech Section */}
            <section className="career-life">
                <div className="career-life__container">
                    <div className="career-life__left">
                        <h3 className="career-life__title animate-text">Life at Ashtech</h3>
                        <div className="career-life__text-box">
                            <p>We believe that great ideas come from collaboration and mutual respect. We foster a culture where every voice is heard, every perspective is valued, and innovation thrives through teamwork.</p>
                            <p>If you're seeking real estate jobs in Noida that encourage creativity, respect, and a true sense of belonging, this is where your ideas can shape the future.</p>
                        </div>
                    </div>
                    
                    <div className="career-life__image">
                        <img src={`${assetsUrl}images/career/life-at-ashtech.jpg`} alt="Life at Ashtech" />
                    </div>
                    
                    <div className="career-life__right">
                        <h3 className="career-life__title animate-text">Opportunities</h3>
                        <div className="career-life__text-box">
                            <p>We're always on the lookout for driven professionals — from on-site engineers and architects to project managers, designers, and business development experts.</p>
                        </div>
                    </div>
                </div>
                
                <div className="career-life__footer-text">
                    <p className="animate-text">If you're passionate about shaping the future, explore <strong>Ashtech Presidential Towers<br />for career opportunities</strong> — we'd love to hear from you.</p>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="career-openings">
                <div className="career-openings__background"></div>
                <div className="career-openings__container">
                    <div className="career-openings__header">
                        <p className="career-openings__label animate-text">Current Openings</p>
                        <h2 className="career-openings__title animate-text">Job Offerings</h2>
                    </div>
                    
                    <div className="career-openings__list">
                        {jobCards.map((job, index) => (
                            <div key={index} className="job-card" style={{ position: 'relative', marginBottom: '20px' }}>
                                {/* Remove Button */}
                                <Button
                                    isDestructive
                                    isSmall
                                    onClick={() => removeJobCard(index)}
                                    style={{ 
                                        position: 'absolute', 
                                        top: '10px', 
                                        right: '10px', 
                                        zIndex: 10 
                                    }}
                                >
                                    {__('Remove', 'ashtech-pages-blocks')}
                                </Button>
                                
                                <div className="job-card__info">
                                    <RichText
                                        tagName="h3"
                                        className="job-card__title"
                                        value={job.title || ''}
                                        onChange={(value) => updateJobCard(index, 'title', value)}
                                        placeholder={__('Job Title', 'ashtech-pages-blocks')}
                                    />
                                    <div className="job-card__tags">
                                        <span className="job-card__tag">
                                            <img src={`${assetsUrl}images/career/icon-category.svg`} alt="" />
                                            <RichText
                                                tagName="span"
                                                value={job.category || ''}
                                                onChange={(value) => updateJobCard(index, 'category', value)}
                                                placeholder={__('Category', 'ashtech-pages-blocks')}
                                            />
                                        </span>
                                        <span className="job-card__tag">
                                            <img src={`${assetsUrl}images/career/icon-location.svg`} alt="" />
                                            <RichText
                                                tagName="span"
                                                value={job.location || ''}
                                                onChange={(value) => updateJobCard(index, 'location', value)}
                                                placeholder={__('Location', 'ashtech-pages-blocks')}
                                            />
                                        </span>
                                        <span className="job-card__tag">
                                            <img src={`${assetsUrl}images/career/icon-clock.svg`} alt="" />
                                            <RichText
                                                tagName="span"
                                                value={job.date || ''}
                                                onChange={(value) => updateJobCard(index, 'date', value)}
                                                placeholder={__('Date', 'ashtech-pages-blocks')}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn--secondary career-openings__apply apply-now-btn"
                                    type="button"
                                    data-job-title={job.title || ''}
                                >
                                    <span>Apply Now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                        
                        {/* Add New Job Card Button */}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button
                                isPrimary
                                onClick={addJobCard}
                            >
                                {__('+ Add New Job', 'ashtech-pages-blocks')}
                            </Button>
                        </div>
                    </div>
                    
                    <div className="career-openings__how-to-apply">
                        <h3 className="career-openings__apply-title animate-text">How to Apply</h3>
                        <p className="career-openings__apply-text animate-text">If you're ready to build a career that builds the nation, fill out the form below or share your profile at <strong>careers@ashtechrealty.in.</strong></p>
                    </div>
                </div>
            </section>

            {/* Career Form Section */}
            <section className="career-form" id="careerFormSection">
                <div className="career-form__background"></div>
                <div className="career-form__container">
                    <div className="career-form__header">
                        <h2 className="career-form__title animate-text">Career Detail Form</h2>
                    </div>
                    
                    <form className="career-form__form" id="careerForm">
                        <div className="career-form__fields">
                            <div className="career-form__field">
                                <input type="text" id="name" name="name" className="career-form__input" placeholder="Your Name" required />
                            </div>
                            
                            <div className="career-form__field">
                                <input type="email" id="email" name="email" className="career-form__input" placeholder="Email" required />
                            </div>
                            
                            <div className="career-form__field-group">
                                <div className="career-form__field career-form__field--country">
                                    <input type="text" id="countryCode" name="countryCode" className="career-form__input" value="+91 (India)" readOnly />
                                </div>
                                <div className="career-form__field career-form__field--phone">
                                    <input type="tel" id="phone" name="phone" className="career-form__input" placeholder="Your Phone Number" required />
                                </div>
                            </div>
                            
                            <div className="career-form__field">
                                <input type="text" id="position" name="position" className="career-form__input" placeholder="Position Interested In" required />
                            </div>
                            
                            <div className="career-form__field career-form__field--upload">
                                <input type="file" id="resume" name="resume" className="career-form__file-input" accept=".pdf,.doc,.docx" />
                                <label htmlFor="resume" className="career-form__file-label">
                                    <img src={`${assetsUrl}images/career/icon-upload.svg`} alt="Upload" />
                                    <span>Upload Resume</span>
                                </label>
                            </div>
                            
                            <div className="career-form__field">
                                <textarea id="coverLetter" name="coverLetter" className="career-form__textarea" placeholder="Cover Letter / Message" rows="4"></textarea>
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

            {/* Note of Assurance Section */}
            <section className="career-assurance">
                <div className="project-about__decoration"></div>
                <div className="career-assurance__container">
                    <div className="career-assurance__left">
                        <p className="career-assurance__label animate-text">Additional Info</p>
                        <h3 className="career-assurance__title animate-text">A Note of Assurance</h3>
                    </div>
                    <div className="career-assurance__right">
                        <p className="career-assurance__text animate-text">In the footsteps of Ashtech Group, Ashtech Presidential Towers follows a transparent and merit-based hiring process. We do not charge any fees for job applications or interviews. All official communication will be from our verified domains.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}


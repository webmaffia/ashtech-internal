import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { heroTitle, heroSubtitle, overviewTitle, overviewText } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {/* Hero Banner Section */}
            <section className="project-hero careerbg">
                <div className="project-hero__overlay"></div>
                <div className="project-hero__content">
                    <RichText.Content 
                        tagName="h1" 
                        className="project-hero__title" 
                        value={heroTitle} 
                    />
                    <div className="project-hero__subtitle">
                        <RichText.Content 
                            tagName="p" 
                            className="project-hero__subtitle-text" 
                            value={heroSubtitle} 
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
                        <RichText.Content 
                            tagName="h2" 
                            className="career-overview__title animate-text" 
                            value={overviewTitle} 
                        />
                    </div>
                    <div className="career-overview__right">
                        <div className="career-overview__text animate-text">
                            <RichText.Content 
                                tagName="div" 
                                value={overviewText} 
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
                                <img src="assets/images/career/why-3.jpg" alt="Culture of Trust" />
                            </div>
                            <div className="career-why__content">
                                <h3 className="career-why__card-title animate-text">Real Projects. Real Impact.</h3>
                                <p className="career-why__card-desc animate-text">From powering rural India to building metro infrastructure, every project we have taken on shapes lives, communities, and cities. Backed by this legacy at Ashtech Group, we are now redefining skylines. Our work speaks for itself.</p>
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-2">
                            <div className="career-why__image">
                                <img src="assets/images/career/why-2.jpg" alt="Grow With Confidence" />
                            </div>
                            <div className="career-why__content">
                                <h3 className="career-why__card-title animate-text">Grow With Confidence.</h3>
                                <p className="career-why__card-desc animate-text">Growth thrives in an environment of trust and opportunity. Here, you'll find mentorship, accountability, and the freedom to lead. Because when you progress, we all do. Together, we succeed!</p>
                            </div>
                        </div>
                        
                        <div className="career-why__card career-why__card--offset-3">
                            <div className="career-why__image">
                                <img src="assets/images/career/why-1.jpg" alt="Real Projects" />
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
                        <img src="assets/images/career/life-at-ashtech.jpg" alt="Life at Ashtech" />
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
                        {/* Job Card 1 */}
                        <div className="job-card">
                            <div className="job-card__info">
                                <h3 className="job-card__title">Site Engineer</h3>
                                <div className="job-card__tags">
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-category.svg" alt="" />
                                        Construction
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-location.svg" alt="" />
                                        Pune
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-clock.svg" alt="" />
                                        10 Oct 2025
                                    </span>
                                </div>
                            </div>
                            <button className="btn btn--secondary career-openings__apply">
                                <span>Apply Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        {/* Job Card 2 */}
                        <div className="job-card">
                            <div className="job-card__info">
                                <h3 className="job-card__title">Project Manager</h3>
                                <div className="job-card__tags">
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-category.svg" alt="" />
                                        Infrastructure
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-location.svg" alt="" />
                                        Mumbai
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-clock.svg" alt="" />
                                        08 Oct 2025
                                    </span>
                                </div>
                            </div>
                            <button className="btn btn--secondary career-openings__apply">
                                <span>Apply Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        {/* Job Card 3 */}
                        <div className="job-card">
                            <div className="job-card__info">
                                <h3 className="job-card__title">Marketing Executive</h3>
                                <div className="job-card__tags">
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-category.svg" alt="" />
                                        Sales & Marketing
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-location.svg" alt="" />
                                        Pune
                                    </span>
                                    <span className="job-card__tag">
                                        <img src="assets/images/career/icon-clock.svg" alt="" />
                                        05 Oct 2025
                                    </span>
                                </div>
                            </div>
                            <button className="btn btn--secondary career-openings__apply">
                                <span>Apply Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="career-openings__how-to-apply">
                        <h3 className="career-openings__apply-title animate-text">How to Apply</h3>
                        <p className="career-openings__apply-text animate-text">If you're ready to build a career that builds the nation, fill out the form below or share your profile at <strong>careers@ashtechrealty.in.</strong></p>
                    </div>
                </div>
            </section>

            {/* Career Form Section */}
            <section className="career-form">
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
                                <input type="file" id="resume" name="resume" className="career-form__file-input" accept=".pdf,.doc,.docx" required />
                                <label htmlFor="resume" className="career-form__file-label">
                                    <img src="assets/images/career/icon-upload.svg" alt="Upload" />
                                    <span>Upload Resume</span>
                                </label>
                            </div>
                            
                            <div className="career-form__field">
                                <textarea id="message" name="message" className="career-form__textarea" placeholder="Message" rows="4"></textarea>
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

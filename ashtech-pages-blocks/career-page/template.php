<?php
/**
 * Career Page Block Template - COMPLETE HTML from career.html
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Hero Banner Section -->
<section class="project-hero careerbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-text"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<!-- Overview Section -->
<section class="career-overview">
    <div class="project-about__decoration"></div>
    <div class="career-overview__container">
        <div class="career-overview__left">
            <p class="career-overview__label animate-text">Overview</p>
            <h2 class="career-overview__title animate-text">Join a Legacy of Excellence</h2>
        </div>
        <div class="career-overview__right">
            <div class="career-overview__text animate-text">
                <p>Ashtech Presidential Towers is a testament to the legacy of excellence, trust, and precision of Ashtech Group. From building landmark infrastructure to crafting premium properties, we believe in creating icons that define the future — for cities and for people.</p>
                <p>If you're driven by purpose, inspired by challenges, and ready to make an impact, your journey begins here.</p>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="career-why">
    <div class="career-why__container">
        <div class="career-why__header">
            <p class="career-why__label animate-text">Why choose us</p>
            <h2 class="career-why__title animate-text">Why Choose Ashtech Presidential Towers?</h2>
        </div>
        
        <div class="career-why__cards">
            <div class="career-why__card career-why__card--offset-1">
                <div class="career-why__image">
                    <img src="<?php echo esc_url($assets_url); ?>images/career/why-3.jpg" alt="Culture of Trust">
                </div>
                <div class="career-why__content">
                    <h3 class="career-why__card-title animate-text">Real Projects. Real Impact.</h3>
                    <p class="career-why__card-desc animate-text">From powering rural India to building metro infrastructure, every project we have taken on shapes lives, communities, and cities. Backed by this legacy at Ashtech Group, we are now redefining skylines. Our work speaks for itself.</p>
                </div>
            </div>
            
            <div class="career-why__card career-why__card--offset-2">
                <div class="career-why__image">
                    <img src="<?php echo esc_url($assets_url); ?>images/career/why-2.jpg" alt="Grow With Confidence">
                </div>
                <div class="career-why__content">
                    <h3 class="career-why__card-title animate-text">Grow With Confidence.</h3>
                    <p class="career-why__card-desc animate-text">Growth thrives in an environment of trust and opportunity. Here, you'll find mentorship, accountability, and the freedom to lead. Because when you progress, we all do. Together, we succeed!</p>
                </div>
            </div>
            
            <div class="career-why__card career-why__card--offset-3">
                <div class="career-why__image">
                    <img src="<?php echo esc_url($assets_url); ?>images/career/why-1.jpg" alt="Real Projects">
                </div>
                <div class="career-why__content">
                    <h3 class="career-why__card-title animate-text">Culture of Trust.</h3>
                    <p class="career-why__card-desc animate-text">Our people-first philosophy drives everything we do. With ethics at the core and open-door leadership across all levels, we foster collaboration, integrity, and mutual respect in every interaction.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Life at Ashtech Section -->
<section class="career-life">
    <div class="career-life__container">
        <div class="career-life__left">
            <h3 class="career-life__title animate-text">Life at Ashtech</h3>
            <div class="career-life__text-box">
                <p>We believe that great ideas come from collaboration and mutual respect. We foster a culture where every voice is heard, every perspective is valued, and innovation thrives through teamwork.</p>
                <p>If you're seeking real estate jobs in Noida that encourage creativity, respect, and a true sense of belonging, this is where your ideas can shape the future.</p>
            </div>
        </div>
        
        <div class="career-life__image">
            <img src="<?php echo esc_url($assets_url); ?>images/career/life-at-ashtech.jpg" alt="Life at Ashtech">
        </div>
        
        <div class="career-life__right">
            <h3 class="career-life__title animate-text">Opportunities</h3>
            <div class="career-life__text-box">
                <p>We're always on the lookout for driven professionals — from on-site engineers and architects to project managers, designers, and business development experts.</p>
            </div>
        </div>
    </div>
    
    <div class="career-life__footer-text">
        <p class="animate-text">If you're passionate about shaping the future, explore <strong>Ashtech Presidential Towers<br>for career opportunities</strong> — we'd love to hear from you.</p>
    </div>
</section>

<!-- Job Openings Section -->
<section class="career-openings">
    <div class="career-openings__background"></div>
    <div class="career-openings__container">
        <div class="career-openings__header">
            <p class="career-openings__label animate-text">Current Openings</p>
            <h2 class="career-openings__title animate-text">Job Offerings</h2>
        </div>
        
        <div class="career-openings__list">
            <!-- Job Card 1 -->
            <div class="job-card">
                <div class="job-card__info">
                    <h3 class="job-card__title">Site Engineer</h3>
                    <div class="job-card__tags">
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-category.svg" alt="">
                            Construction
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-location.svg" alt="">
                            Pune
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-clock.svg" alt="">
                            10 Oct 2025
                        </span>
                    </div>
                </div>
                <button class="btn btn--secondary career-openings__apply">
                    <span>Apply Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            
            <!-- Job Card 2 -->
            <div class="job-card">
                <div class="job-card__info">
                    <h3 class="job-card__title">Project Manager</h3>
                    <div class="job-card__tags">
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-category.svg" alt="">
                            Infrastructure
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-location.svg" alt="">
                            Mumbai
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-clock.svg" alt="">
                            08 Oct 2025
                        </span>
                    </div>
                </div>
                <button class="btn btn--secondary career-openings__apply">
                    <span>Apply Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            
            <!-- Job Card 3 -->
            <div class="job-card">
                <div class="job-card__info">
                    <h3 class="job-card__title">Marketing Executive</h3>
                    <div class="job-card__tags">
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-category.svg" alt="">
                            Sales & Marketing
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-location.svg" alt="">
                            Pune
                        </span>
                        <span class="job-card__tag">
                            <img src="<?php echo esc_url($assets_url); ?>images/career/icon-clock.svg" alt="">
                            05 Oct 2025
                        </span>
                    </div>
                </div>
                <button class="btn btn--secondary career-openings__apply">
                    <span>Apply Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <div class="career-openings__how-to-apply">
            <h3 class="career-openings__apply-title animate-text">How to Apply</h3>
            <p class="career-openings__apply-text animate-text">If you're ready to build a career that builds the nation, fill out the form below or share your profile at <strong>careers@ashtechrealty.in.</strong></p>
        </div>
    </div>
</section>

<!-- Career Form Section -->
<section class="career-form">
    <div class="career-form__background"></div>
    <div class="career-form__container">
        <div class="career-form__header">
            <h2 class="career-form__title animate-text">Career Detail Form</h2>
        </div>
        
        <form class="career-form__form" id="careerForm">
            <div class="career-form__fields">
                <div class="career-form__field">
                    <input type="text" id="name" name="name" class="career-form__input" placeholder="Your Name" required>
                </div>
                
                <div class="career-form__field">
                    <input type="email" id="email" name="email" class="career-form__input" placeholder="Email" required>
                </div>
                
                <div class="career-form__field-group">
                    <div class="career-form__field career-form__field--country">
                        <input type="text" id="countryCode" name="countryCode" class="career-form__input" value="+91 (India)" readonly>
                    </div>
                    <div class="career-form__field career-form__field--phone">
                        <input type="tel" id="phone" name="phone" class="career-form__input" placeholder="Your Phone Number" required>
                    </div>
                </div>
                
                <div class="career-form__field">
                    <input type="text" id="position" name="position" class="career-form__input" placeholder="Position Interested In" required>
                </div>
                
                <div class="career-form__field career-form__field--upload">
                    <input type="file" id="resume" name="resume" class="career-form__file-input" accept=".pdf,.doc,.docx" required>
                    <label for="resume" class="career-form__file-label">
                        <img src="<?php echo esc_url($assets_url); ?>images/career/icon-upload.svg" alt="Upload">
                        <span>Upload Resume</span>
                    </label>
                </div>
                
                <div class="career-form__field">
                    <textarea id="message" name="message" class="career-form__textarea" placeholder="Message" rows="4"></textarea>
                </div>
            </div>
            
            <button type="submit" class="btn btn--primary career-form__submit">
                <span>Submit Application</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </form>
    </div>
</section>

<!-- Note of Assurance Section -->
<section class="career-assurance">
    <div class="project-about__decoration"></div>
    <div class="career-assurance__container">
        <div class="career-assurance__left">
            <p class="career-assurance__label animate-text">Additional Info</p>
            <h3 class="career-assurance__title animate-text">A Note of Assurance</h3>
        </div>
        <div class="career-assurance__right">
            <p class="career-assurance__text animate-text">In the footsteps of Ashtech Group, Ashtech Presidential Towers follows a transparent and merit-based hiring process. We do not charge any fees for job applications or interviews. All official communication will be from our verified domains.</p>
        </div>
    </div>
</section>

<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/project.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/career.js"></script>

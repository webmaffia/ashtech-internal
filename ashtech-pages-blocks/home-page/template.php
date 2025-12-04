<?php
/**
 * Home Page Block Template - COMPLETE HTML from index.html
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Banner Section -->
<section class="landing-banner">
    <div class="landing-banner__overlay"></div>
    <div class="landing-banner__content">
        <h1 class="landing-banner__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <p class="landing-banner__scroll">(SCROLL)</p>
    </div>

    <!-- SVG Animation - Desktop -->
    <svg id="banner-svg-animation" class="landing-banner__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1920 800">
        <defs>
            <style>
                .st0, .st1, .st2 { fill: none; }
                .st1 { stroke-linejoin: round; }
                .st1, .st2 { stroke: #fff; stroke-linecap: round; }
                .st2 { stroke-miterlimit: 10; }
                .st3 { clip-path: url(#clippath); }
            </style>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="blur1"/>
                <feGaussianBlur stdDeviation="6" result="blur2"/>
                <feGaussianBlur stdDeviation="12" result="blur3"/>
                <feMerge><feMergeNode in="blur3"/><feMergeNode in="blur2"/><feMergeNode in="blur1"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="clippath"><rect class="st0" width="1920" height="800"/></clipPath>
        </defs>
        <g class="st3"><g>
            <path class="st2" d="M600.57,797.54V184.23s1-21.66-26.78-24.47c-27.78-2.81-71.91-8.22-71.91-8.22,0,0-6.02-.6-10.93,2.11"/>
            <path class="st2" d="M587.53,797.54v-432.87c0-1.91-.5-6.02-7.02-6.02h-72.51s-3.91,0-6.52,1.2"/>
            <path class="st2" d="M587.53,466.06c0-1.91-.5-6.02-7.02-6.02h-72.51s-3.91,0-6.52,1.2"/>
            <path class="st2" d="M622.04,797.54V188.44s0-24.87,26.78-22.87l72.81,1.6s8.22.5,14.34,6.12"/>
            <path class="st1" d="M635.07,797.54v-392.76c0-1.91.5-6.02,7.02-6.02h77.53s4.21-.3,5.92,2.51l5.52,8.22"/>
            <path class="st2" d="M635.07,506.18c0-1.91.5-6.02,7.02-6.02h77.53s3.51-.3,6.12,2.41l4.91,5.01"/>
            <path class="st2" d="M731.06,194.76s4.01-.4,7.02,2.81,11.53,12.64,11.53,12.64"/>
            <path class="st2" d="M944.12,794.68V198.87s2.01-23.17-26.78-24.47l-69.71-2.91c-2.91-.2-7.92.6-10.93,3.81"/>
            <path class="st2" d="M934.09,794.68v-328.72c0-1.91-.5-6.02-7.02-6.02h-72.51s-6.02-.3-8.63.9"/>
            <path class="st2" d="M934.09,567.36c0-1.91-.5-6.02-7.02-6.02h-80.54"/>
            <path class="st2" d="M970.59,794.68V199.48s-.6-24.47,26.98-25.27l68-3.11s9.33,0,13.54,4.11"/>
            <path class="st1" d="M981.63,794.68v-328.72c0-1.91.5-6.02,7.02-6.02h77.53s2.31,0,3.01,1"/>
            <path class="st2" d="M981.63,567.36c0-1.91.5-6.02,7.02-6.02h77.53s1.4,0,3.01.4"/>
            <path class="st2" d="M1312.43,794.48V185.22s-1-20.46,26.78-23.27c27.78-2.81,94.88-9.23,94.88-9.23,0,0,6.02-.6,10.93,2.11"/>
            <path class="st2" d="M1323.57,794.48v-428.73c0-1.91.5-6.02,7.02-6.02h97.59s3.91,0,6.52,1.2"/>
            <path class="st2" d="M1323.57,467.15c0-1.91.5-6.02,7.02-6.02h97.59s3.91,0,6.52,1.2"/>
            <path class="st2" d="M1296.08,794.48V189.53s0-24.87-26.78-22.87l-82.94,2.31s-8.22.5-14.34,6.12"/>
            <path class="st1" d="M1284.05,794.48v-388.61c0-1.91-.5-6.02-7.02-6.02h-88.56s-4.21-.3-5.92,2.51l-5.52,8.22"/>
            <path class="st2" d="M1284.05,507.27c0-1.91-.5-6.02-7.02-6.02h-88.56s-3.51-.3-6.12,2.41l-4.91,5.01"/>
            <path class="st2" d="M1188.37,204.28s-16.45-1.4-23.17,5.32c-6.72,6.72-9.23,10.23-9.23,10.23"/>
            <line class="st2" x1="1269" y1="794.48" x2="1350.75" y2="794.48"/>
            <line class="st2" x1="920.55" y1="794.48" x2="1009.31" y2="794.48"/>
            <line class="st2" x1="574.3" y1="798.34" x2="663.06" y2="798.34"/>
        </g></g>
    </svg>

    <!-- SVG Animation - Mobile -->
    <svg id="banner-svg-animation-mobile" class="landing-banner__svg mobile-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 414 665">
        <defs>
            <style>.st0, .st1, .st2 { fill: none; } .st1 { stroke-linejoin: round; } .st1, .st2 { stroke: #fff; stroke-linecap: round; } .st2 { stroke-miterlimit: 10; } .st3 { clip-path: url(#clippath-mobile); }</style>
            <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <clipPath id="clippath-mobile"><rect class="st0" width="414" height="665"/></clipPath>
        </defs>
        <g class="st3"><g>
            <path class="st2" d="M-91.6,664.39V154.26s.83-18.02-22.27-20.35c-23.11-2.34-59.81-6.84-59.81-6.84,0,0-5.01-.5-9.09,1.76"/>
            <path class="st2" d="M-102.45,664.39v-360.05c0-1.59-.42-5.01-5.84-5.01h-60.31s-3.25,0-5.42,1"/>
            <line class="st2" x1="-113.45" y1="665.05" x2="-39.63" y2="665.05"/>
        </g></g>
    </svg>
</section>

<!-- Overview Section -->
<section class="landing-overview">
    <div class="landing-overview__interaction">
        <div class="landing-overview__decoration"></div>
        <div class="landing-overview__content">
            <div class="landing-overview__header">
                <div class="landing-overview__label">
                    <span class="animate-text">Overview</span>
                </div>
                <h2 class="landing-overview__title animate-text">Curated for Magnificence</h2>
            </div>
            <p class="landing-overview__description animate-text"><?php echo wp_kses_post($mainContent); ?></p>
            <div class="landing-overview__button">
                <button class="btn btn--primary">
                    <span>Discover More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="landing-overview__gradient"></div>
    </div>
</section>

<!-- Values Section -->
<section class="landing-values">
    <div class="landing-values__container">
        <div class="landing-values__header">
            <div class="landing-values__label animate-text">Core Values</div>
            <h2 class="landing-values__title animate-text-rtl">30 Years of Excellence</h2>
        </div>
        <div class="landing-values__graphic">
            <img src="<?php echo esc_url($assets_url); ?>images/landing/values-graphic.svg" alt="Core Values">
        </div>
        <div class="landing-values__items">
            <div class="landing-values__item landing-values__item--left landing-values__item--1" data-value="0">
                <h3 class="landing-values__item-title">जुनून (Passion)</h3>
                <p class="landing-values__item-description">Commitment to perfection in every detail.</p>
            </div>
            <div class="landing-values__item landing-values__item--left landing-values__item--2" data-value="1">
                <h3 class="landing-values__item-title">संकल्प (Resolution)</h3>
                <p class="landing-values__item-description">Delivering with precision at every step.</p>
            </div>
            <div class="landing-values__item landing-values__item--left landing-values__item--3" data-value="2">
                <h3 class="landing-values__item-title">लगन (Commitment)</h3>
                <p class="landing-values__item-description">A relentless pursuit of elevated standards.</p>
            </div>
            <div class="landing-values__item landing-values__item--right landing-values__item--4" data-value="3">
                <h3 class="landing-values__item-title">विश्वास (Trust)</h3>
                <p class="landing-values__item-description">Dependability and integrity, embedded in execution.</p>
            </div>
            <div class="landing-values__item landing-values__item--right landing-values__item--5" data-value="4">
                <h3 class="landing-values__item-title">निष्ठा (Dedication)</h3>
                <p class="landing-values__item-description">Every element executed with painstaking care.</p>
            </div>
            <div class="landing-values__item landing-values__item--right landing-values__item--6" data-value="5">
                <h3 class="landing-values__item-title">दृढता (Strength)</h3>
                <p class="landing-values__item-description">Structures and finishes designed to last.</p>
            </div>
        </div>
    </div>
</section>

<!-- Ongoing Projects Section -->
<section class="landing-projects">
    <div class="landing-projects__background"></div>
    <img src="<?php echo esc_url($assets_url); ?>images/landing/building.png" alt="" class="building">
    <div class="landing-projects__content">
        <div class="landing-projects__header">
            <div class="landing-projects__label animate-text">Ongoing Project</div>
            <h2 class="landing-projects__title animate-text">An Expression of Refinement</h2>
        </div>
        <p class="landing-projects__description animate-text">Discover Ashtech Presidential Towers, a 5.6-acre architectural masterpiece in Greater Noida, where the purest elements of nature meet modern precision to create a living experience that is rare, radiant and profoundly refined.</p>
        <div class="landing-projects__buttons">
            <button class="btn btn--primary">
                <span>Explore More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="btn btn--secondary">
                <span>Book a Private Tour</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</section>

<!-- NRI Desk Section -->
<section class="landing-nri">
    <div class="landing-nri__image">
        <img src="<?php echo esc_url($assets_url); ?>images/landing/nri.png" alt="NRI Desk">
    </div>
    <div class="landing-nri__content">
        <div class="landing-nri__info">
            <div class="landing-nri__header">
                <div class="landing-nri__label animate-text">NRI Desk</div>
                <h2 class="landing-nri__title animate-text">Seamless Access to Signature Residences</h2>
            </div>
            <div class="landing-nri__description-container">
                <p class="landing-nri__description animate-text">Ashtech Presidential Towers ensures global clients can acquire Ashtech luxury apartments and properties in Greater Noida with confidence and peace of mind.</p>
                <button class="btn btn--primary">
                    <span>Connect with Our NRI Desk</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="landing-nri__features">
            <div class="landing-nri__feature">
                <div class="landing-nri__feature-icon">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-virtual-tour.svg" alt="Virtual Tours">
                </div>
                <p class="landing-nri__feature-text animate-text">Virtual Tours Across Time Zones</p>
            </div>
            <div class="landing-nri__feature">
                <div class="landing-nri__feature-icon">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-support.svg" alt="Support">
                </div>
                <p class="landing-nri__feature-text animate-text">Dedicated NRI Support</p>
            </div>
            <div class="landing-nri__feature">
                <div class="landing-nri__feature-icon">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-residences.svg" alt="Residences">
                </div>
                <p class="landing-nri__feature-text animate-text">Residences Designed for Generations</p>
            </div>
            <div class="landing-nri__feature">
                <div class="landing-nri__feature-icon">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-documentation.svg" alt="Documentation">
                </div>
                <p class="landing-nri__feature-text animate-text">Documentation Assistance</p>
            </div>
        </div>
    </div>
    <div class="landing-nri__accent"></div>
</section>

<!-- Awards Section -->
<section class="landing-awards">
    <div class="landing-awards__container">
        <div class="landing-awards__header">
            <div class="landing-awards__label animate-text">Awards & Recognition</div>
            <h2 class="landing-awards__title animate-text">Honoured for Distinction</h2>
            <p class="landing-awards__description animate-text">Ashtech's pursuit of excellence has earned recognition through landmark infrastructure projects. With visionary planning and granular execution, each endeavour contributes to a legacy defined by enduring impact and distinguished achievement.</p>
        </div>
        <div class="landing-awards__grid">
            <div class="landing-awards__item">
                <div class="landing-awards__item-images">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-left.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--left">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-right.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--right">
                </div>
                <p class="landing-awards__item-text animate-text">National Infrastructure Excellence Award 2023</p>
            </div>
            <div class="landing-awards__item">
                <div class="landing-awards__item-images">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-left.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--left">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-right.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--right">
                </div>
                <p class="landing-awards__item-text animate-text">Engineering Visionary Award 2022</p>
            </div>
            <div class="landing-awards__item">
                <div class="landing-awards__item-images">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-left.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--left">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-right.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--right">
                </div>
                <p class="landing-awards__item-text animate-text">Structural Innovation Leadership Award 2021</p>
            </div>
            <div class="landing-awards__item">
                <div class="landing-awards__item-images">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-left.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--left">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/award-laurel-right.svg" alt="Award" class="landing-awards__laurel landing-awards__laurel--right">
                </div>
                <p class="landing-awards__item-text animate-text">Sustainable Development in Infrastructure 2020</p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="landing-testimonials">
    <div class="landing-testimonials__container">
        <div class="landing-testimonials__header">
            <div class="landing-testimonials__label animate-text">Testimonials</div>
            <h2 class="landing-testimonials__title animate-text">Trusted by Those Who<br>Value Mastery</h2>
        </div>
        <div class="landing-testimonials__slider-wrapper">
            <div class="landing-testimonials__slider">
                <!-- Slide 1 -->
                <div class="landing-testimonials__slide">
                    <div class="landing-testimonials__content animate-text-rtl">
                        <div class="landing-testimonials__image">
                            <img src="<?php echo esc_url($assets_url); ?>images/landing/testimonial-bg.jpg" alt="Testimonials Background">
                        </div>
                        <div class="landing-testimonials__card">
                            <div class="landing-testimonials__card-content">
                                <div class="landing-testimonials__stars">
                                    <?php for ($i = 0; $i < 5; $i++) : ?>
                                    <svg class="landing-testimonials__star" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M13 2.5L15.7 9.5L23 10.5L18 15.5L19 23L13 19.5L7 23L8 15.5L3 10.5L10.3 9.5L13 2.5Z" fill="#720C10"/>
                                    </svg>
                                    <?php endfor; ?>
                                </div>
                                <div class="landing-testimonials__text-content">
                                    <p class="landing-testimonials__quote">"Working with Ashtech Group has been exceptional. Their attention to detail and commitment to quality sets them apart in every project."</p>
                                    <div class="landing-testimonials__author">
                                        <div class="landing-testimonials__author-name"><span>K. Mehta</span></div>
                                        <span class="landing-testimonials__author-role">Corporate Partner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="landing-testimonials__slide">
                    <div class="landing-testimonials__content animate-text-rtl">
                        <div class="landing-testimonials__image">
                            <img src="<?php echo esc_url($assets_url); ?>images/landing/testimonial-bg.jpg" alt="Testimonials Background">
                        </div>
                        <div class="landing-testimonials__card">
                            <div class="landing-testimonials__card-content">
                                <div class="landing-testimonials__stars">
                                    <?php for ($i = 0; $i < 5; $i++) : ?>
                                    <svg class="landing-testimonials__star" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M13 2.5L15.7 9.5L23 10.5L18 15.5L19 23L13 19.5L7 23L8 15.5L3 10.5L10.3 9.5L13 2.5Z" fill="#720C10"/>
                                    </svg>
                                    <?php endfor; ?>
                                </div>
                                <div class="landing-testimonials__text-content">
                                    <p class="landing-testimonials__quote">"The professionalism and expertise displayed by Ashtech are truly remarkable. Every aspect of our project was handled with utmost care and precision."</p>
                                    <div class="landing-testimonials__author">
                                        <div class="landing-testimonials__author-name"><span>R. Sharma</span></div>
                                        <span class="landing-testimonials__author-role">Property Investor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="landing-testimonials__slide">
                    <div class="landing-testimonials__content animate-text-rtl">
                        <div class="landing-testimonials__image">
                            <img src="<?php echo esc_url($assets_url); ?>images/landing/testimonial-bg.jpg" alt="Testimonials Background">
                        </div>
                        <div class="landing-testimonials__card">
                            <div class="landing-testimonials__card-content">
                                <div class="landing-testimonials__stars">
                                    <?php for ($i = 0; $i < 5; $i++) : ?>
                                    <svg class="landing-testimonials__star" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M13 2.5L15.7 9.5L23 10.5L18 15.5L19 23L13 19.5L7 23L8 15.5L3 10.5L10.3 9.5L13 2.5Z" fill="#720C10"/>
                                    </svg>
                                    <?php endfor; ?>
                                </div>
                                <div class="landing-testimonials__text-content">
                                    <p class="landing-testimonials__quote">"Ashtech has redefined luxury living. Their vision and execution are unparalleled, making every project a masterpiece of architectural excellence."</p>
                                    <div class="landing-testimonials__author">
                                        <div class="landing-testimonials__author-name"><span>A. Gupta</span></div>
                                        <span class="landing-testimonials__author-role">Business Executive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <div class="landing-testimonials__navigation">
                <button class="landing-testimonials__nav-btn landing-testimonials__nav-btn--prev">
                    <svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5564 0.976862C13.5564 0.976862 4.23775 10.2955 2.37401 12.1592C0.51027 14.023 0.510268 17.7505 2.37401 19.6142C4.23772 21.4779 13.5564 30.7966 13.5564 30.7966" stroke="#0C0D0D" stroke-width="1.95238" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="landing-testimonials__nav-btn landing-testimonials__nav-btn--next">
                    <svg width="15" height="32" viewBox="0 0 15 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.976202 0.976862C0.976202 0.976862 10.2948 10.2955 12.1586 12.1592C14.0223 14.023 14.0223 17.7505 12.1586 19.6142C10.2949 21.4779 0.976204 30.7966 0.976204 30.7966" stroke="#0C0D0D" stroke-width="1.95238" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script>
    jQuery(document).ready(function($){
        $('.landing-testimonials__slider').slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            arrows: false
        });
        $('.landing-testimonials__nav-btn--prev').click(function(){ $('.landing-testimonials__slider').slick('slickPrev'); });
        $('.landing-testimonials__nav-btn--next').click(function(){ $('.landing-testimonials__slider').slick('slickNext'); });
    });
</script>
<script src="<?php echo esc_url($assets_url); ?>js/landing-animations.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>

<?php
/**
 * Home Page Block Template
 * Renders the complete landing page HTML
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

    <svg id="banner-svg-animation" class="landing-banner__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 800">
        <defs>
            <style>
                .st0, .st1, .st2 { fill: none; }
                .st1 { stroke-linejoin: round; }
                .st1, .st2 { stroke: #fff; stroke-linecap: round; }
                .st2 { stroke-miterlimit: 10; }
                .st3 { clip-path: url(#clippath); }
            </style>
            <clipPath id="clippath">
                <rect class="st0" width="1920" height="800"/>
            </clipPath>
        </defs>
        <g class="st3">
            <g>
                <path class="st2" d="M600.57,797.54V184.23s1-21.66-26.78-24.47c-27.78-2.81-71.91-8.22-71.91-8.22,0,0-6.02-.6-10.93,2.11"/>
                <path class="st2" d="M587.53,797.54v-432.87c0-1.91-.5-6.02-7.02-6.02h-72.51s-3.91,0-6.52,1.2"/>
                <line class="st2" x1="574.3" y1="798.34" x2="663.06" y2="798.34"/>
            </g>
        </g>
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
        <p class="landing-projects__description animate-text">Discover Ashtech Presidential Towers, a 5.6-acre architectural masterpiece in Greater Noida...</p>
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
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="landing-testimonials">
    <div className="landing-testimonials__container">
        <div class="landing-testimonials__header">
            <div class="landing-testimonials__label animate-text">Testimonials</div>
            <h2 class="landing-testimonials__title animate-text">Trusted by Those Who<br>Value Mastery</h2>
        </div>
    </div>
</section>


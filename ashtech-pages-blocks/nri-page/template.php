<?php
/**
 * NRI Page Block Template - COMPLETE HTML from nri.html
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Hero Banner Section -->
<section class="project-hero nribg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<!-- Overview Section -->
<section class="nri-overview">
    <div class="project-about__decoration"></div>
    <div class="nri-overview__container">
        <div class="nri-overview__left">
            <div class="nri-overview__header">
                <span class="nri-overview__label animate-text">Overview</span>
                <h2 class="nri-overview__title animate-text">An Investment Opportunity<br>Like None Other!</h2>
            </div>
        </div>
        <div class="nri-overview__right">
            <p class="nri-overview__description animate-text">
                Discover a home that brings you closer to where it all began and yet keeps pace with your global aspirations.<br><br>
                At Ashtech Presidential Towers, Greater Noida, we invite you to own an address that stands as a symbol of success, stability, and pride. Designed for a select few, this 5.6-acre landmark blends precision engineering with timeless luxury, a legacy investment that grows in value and meaning.
            </p>
            <div class="nri-overview__button">
                <button class="btn btn--primary">
                    <span>Book a Virtual Tour</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Architecture Components Section -->
<section class="nri-architecture">
    <div class="nri-architecture__background"></div>
    <div class="nri-architecture__overlay"></div>
    <div class="nri-architecture__container">
        <div class="nri-architecture__header">
            <span class="nri-architecture__label animate-text">Why Invest in India's Greater Noida</span>
            <h2 class="nri-architecture__title animate-text">Smartest Investment Opportunity<br>in Fastest-Growing Urban Corridor</h2>
            <p class="nri-architecture__description animate-text">Greater Noida has emerged as one of India's most promising investment corridors, attracting <br> professionals, global enterprises, and infrastructure growth on an unprecedented scale.</p>
        </div>
        <div class="nri-architecture__features">
            <div class="nri-architecture__feature-row">
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">Strong rental demand from corporate professionals and new-age entrepreneurs.</p>
                </div>
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">Robust economic growth is supported by India's steady GDP expansion.</p>
                </div>
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">Investor-friendly reforms such as RERA and FEMA ensure transparency and compliance.</p>
                </div>
            </div>
            <div class="nri-architecture__feature-row">
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">Exceptional connectivity via the Metro network, the upcoming Noida International (Jewar) Airport, and the FNG Expressway.</p>
                </div>
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">Rapidly evolving IT, industrial, and business hubs along the Noida–Yamuna Expressway belt.</p>
                </div>
                <div class="nri-architecture__feature-item animate-text">
                    <div class="nri-architecture__feature-icon"><img src="<?php echo esc_url($assets_url); ?>images/nri/tick.svg" alt=""></div>
                    <p class="nri-architecture__feature-text">World-class schools, universities, hospitals and malls, enhancing the quality of life and tenant appeal.</p>
                </div>
            </div>
        </div>
        <p class="nri-architecture__footer-text animate-text">Whether you're seeking consistent ROI or long-term appreciation, Greater Noida stands out as a secure, high-growth investment destination.</p>
    </div>
</section>

<!-- Why Choose Section -->
<section class="nri-why-choose">
    <div class="nri-why-choose__container">
        <div class="nri-why-choose__header">
            <div class="nri-why-choose__header-left">
                <span class="nri-why-choose__label animate-text">Why Choose Ashtech Presidential Towers</span>
                <h2 class="nri-why-choose__title animate-text">High On ROI<br>Higher In Demand</h2>
            </div>
            <div class="nri-why-choose__header-right">
                <p class="nri-why-choose__description animate-text">Crafted to perfection across 5.6 acres with 80% open greens, Ashtech Presidential Towers redefines urban luxury with a rare balance of architecture, nature and technology.</p>
                <button class="btn btn--primary downloadCta">
                    <span>Download Brochure</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="nri-why-choose__items">
            <?php
            $items = array(
                array('num' => '01', 'text' => 'Exclusive range of 3–4 BHK residences and duplexes', 'class' => 'first'),
                array('num' => '02', 'text' => '3 levels of clubhouse and other amenities area spanning across 70000 sq ft.', 'class' => 'others'),
                array('num' => '03', 'text' => 'Smart home features that complement a contemporary lifestyle.', 'class' => 'others'),
                array('num' => '04', 'text' => 'TQ-Certified construction quality backed by Tata Group validation.', 'class' => 'others'),
                array('num' => '05', 'text' => 'A 30-year Ashtech legacy, powered by nine business verticals and a 1,600+ strong team known for engineering excellence.', 'class' => 'others')
            );
            foreach ($items as $item) : ?>
                <div class="nri-why-choose__item nri-why-choose__item--<?php echo esc_attr($item['class']); ?> animate-text">
                    <span class="nri-why-choose__item-number"><?php echo esc_html($item['num']); ?></span>
                    <div class="nri-why-choose__item-content">
                        <p class="nri-why-choose__item-text"><?php echo esc_html($item['text']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Investment Benefits Section -->
<section class="nri-benefits">
    <div class="nri-benefits__container">
        <div class="nri-benefits__image">
            <img src="<?php echo esc_url($assets_url); ?>images/nri/nri-benefits.jpg" alt="Investment Benefits">
        </div>
        <div class="nri-benefits__content">
            <div class="nri-benefits__header">
                <div class="nri-benefits__header-inner">
                    <span class="nri-benefits__label animate-text">Investment Benefits for NRIs</span>
                    <h2 class="nri-benefits__title animate-text">Specially Curated Offer<br>Just For 'You'!</h2>
                </div>
                <p class="nri-benefits__description animate-text">For NRIs seeking a rewarding and reliable investment, Ashtech Presidential Towers offers unmatched value:</p>
            </div>
            <div class="nri-benefits__grid">
                <div class="nri-benefits__grid-row nri-benefits__grid-row--first">
                    <?php
                    $benefits = array(
                        array('icon' => 'nri-benefit-1.svg', 'text' => 'High ROI potential and rental yield driven by rapid urban expansion.'),
                        array('icon' => 'nri-benefit-2.svg', 'text' => 'Regular property updates and performance reports for investors abroad.'),
                        array('icon' => 'nri-benefit-3.svg', 'text' => 'Strong resale opportunities supported by infrastructure growth.'),
                        array('icon' => 'nri-benefit-4.svg', 'text' => 'Attractive tax benefits are available for NRI investors.')
                    );
                    foreach ($benefits as $benefit) : ?>
                        <div class="nri-benefits__grid-item animate-text">
                            <div class="nri-benefits__grid-icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/nri/<?php echo esc_attr($benefit['icon']); ?>" alt="Icon">
                            </div>
                            <p class="nri-benefits__grid-text"><?php echo esc_html($benefit['text']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="nri-benefits__grid-row nri-benefits__grid-row--second">
                    <?php
                    $benefits2 = array(
                        array('icon' => 'nri-benefit-5.svg', 'text' => 'Hassle-free repatriation support under FEMA guidelines.'),
                        array('icon' => 'nri-benefit-6.svg', 'text' => 'Home loan partnerships with HDFC, ICICI, Axis, and SBI NRI Services.'),
                        array('icon' => 'nri-benefit-7.svg', 'text' => 'Prime Greater Noida West location, strategically connected to Delhi, Noida, and Gurgaon.')
                    );
                    foreach ($benefits2 as $benefit) : ?>
                        <div class="nri-benefits__grid-item animate-text">
                            <div class="nri-benefits__grid-icon">
                                <img src="<?php echo esc_url($assets_url); ?>images/nri/<?php echo esc_attr($benefit['icon']); ?>" alt="Icon">
                            </div>
                            <p class="nri-benefits__grid-text"><?php echo esc_html($benefit['text']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="nri-benefits__footer">
                <p class="nri-benefits__footer-text animate-text">Your investment here is more than a home; it's a long-term growth asset in one of India's most dynamic real estate zones.</p>
                <button class="btn btn--primary downloadCta">
                    <span>Schedule a Call Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Director Message Section -->
<section class="nri-director">
    <div class="nri-director__background"></div>
    <div class="nri-director__container">
        <div class="nri-director__content">
            <div class="nri-director__header">
                <div class="nri-director__header-inner">
                    <span class="nri-director__label animate-text">NRI Support & Concierge Services</span>
                    <div class="nri-director__title animate-text">
                        <p class="nri-director__title-line">At Your Service Always,</p>
                        <p class="nri-director__title-line">Because Your Time Is Precious</p>
                    </div>
                </div>
                <p class="nri-director__description animate-text">Owning a home in India should be as effortless as living abroad. That's why we've designed an end-to-end support ecosystem for our global residents:</p>
            </div>
            <p class="nri-director__footer-text animate-text">We make your investment journey transparent, secure, and globally<br> accessible.</p>
            <div class="nri-director__services">
                <?php
                $services = array(
                    array('icon' => 'icon-virtual-tour.svg', 'text' => 'Virtual tours and personalised consultations from anywhere in the world.'),
                    array('icon' => 'icon-support.svg', 'text' => 'Dedicated NRI relationship managers to guide you through every step.'),
                    array('icon' => 'icon-residences.svg', 'text' => 'Complete digital documentation and registration for remote completion.'),
                    array('icon' => 'icon-documentation.svg', 'text' => 'Property management, leasing, and resale coordination via verified partners.'),
                    array('icon' => 'icon-documentation.svg', 'text' => 'Regular updates on construction, possession, and performance reports.')
                );
                foreach ($services as $service) : ?>
                    <div class="nri-director__service-item animate-text">
                        <div class="nri-director__service-icon">
                            <img src="<?php echo esc_url($assets_url); ?>images/landing/<?php echo esc_attr($service['icon']); ?>" alt="">
                        </div>
                        <p class="nri-director__service-text"><?php echo esc_html($service['text']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <div class="nri-director__image">
            <img src="<?php echo esc_url($assets_url); ?>images/nri/nri-director.png" alt="Director">
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="nri-testimonials">
    <div class="nri-testimonials__decoration"></div>
    <div class="nri-testimonials__container">
        <div class="nri-testimonials__header">
            <span class="nri-testimonials__label animate-text">Global Homeowners</span>
            <h2 class="nri-testimonials__title animate-text">Stories of Confidence, Trust, and Commitment<br>from Our Global Residents</h2>
        </div>
        <div class="nri-testimonials__cards">
            <?php
            $testimonials = array(
                array('text' => '"I booked my residence at Ashtech Presidential Towers from Dubai without a single site visit. The process was completely digital, and the team kept me updated throughout."', 'name' => 'Rohan S.,<br>Dubai'),
                array('text' => '"The combination of quality, trust, and location made this an easy decision. Ashtech\'s NRI team handled everything seamlessly."', 'name' => 'Ananya P.,<br>Singapore'),
                array('text' => '"It\'s reassuring to invest with a developer that understands both luxury and long-term value."', 'name' => 'Vivek M.,<br>London')
            );
            foreach (array_merge($testimonials, $testimonials) as $testimonial) : ?>
                <div class="tm-item">
                    <div class="nri-testimonials__card animate-text">
                        <div class="nri-testimonials__card-quote">
                            <img src="<?php echo esc_url($assets_url); ?>images/nri/nri-quote.svg" alt="Quote">
                        </div>
                        <p class="nri-testimonials__card-text"><?php echo esc_html($testimonial['text']); ?></p>
                        <div class="nri-testimonials__card-author">
                            <div class="nri-testimonials__card-avatar">
                                <img src="<?php echo esc_url($assets_url); ?>images/nri/nri-avatar.png" alt="Avatar">
                            </div>
                            <div class="nri-testimonials__card-info">
                                <p class="nri-testimonials__card-name"><?php echo wp_kses_post($testimonial['name']); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <p class="nri-testimonials__footer-text animate-text">Each story is a testament to the trust our global community places in Ashtech.</p>
        <div class="nri-testimonials__dots"></div>
    </div>
</section>

<!-- Closing CTA Section -->
<section class="nri-cta">
    <div class="project-about__decoration"></div>
    <div class="nri-cta__container">
        <div class="nri-cta__left">
            <h2 class="nri-cta__title animate-text">Own an Iconic Address That<br>Mirrors Your Global Vision</h2>
        </div>
        <div class="nri-cta__right">
            <p class="nri-cta__description animate-text">At Ashtech Presidential Towers, every residence is a statement of legacy,<br> One that carries the confidence of engineering precision and the<br> comfort of world-class living.</p>
            <button class="btn btn--primary downloadCta">
                <span>Connect with Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                    <path d="M0.499976 0.499169C0.499976 0.499169 5.36133 5.36052 6.3336 6.33279C7.30588 7.30507 7.30588 9.24962 6.3336 10.2219C5.36134 11.1942 0.499977 16.0555 0.499977 16.0555" stroke="#0C0D0D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</section>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/nri.js"></script>

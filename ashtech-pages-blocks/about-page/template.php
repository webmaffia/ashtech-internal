<?php
/**
 * About Page Block Template - COMPLETE HTML from about.html
 */
if (!defined('ABSPATH')) exit;
$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>

<!-- Hero Banner Section -->
<section class="project-hero aboutbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main">Ashtech Presidential Towers by Ashtech Group</p>
            <p class="project-hero__subtitle-text">A legacy of trust and precision, now shaping exquisite homes that redefine luxury living.</p>
        </div>
    </div>
</section>

<!-- Overview Section -->
<section class="about-overview">
    <div class="project-overview__decoration"></div>
    <div class="about-overview__container">
        <div class="about-overview__header">
            <p class="about-overview__label animate-text">Overview</p>
            <h2 class="about-overview__title animate-text">From Foundations of Strength to Towers of Excellence</h2>
        </div>
        <div class="about-overview__text">
            <p class="animate-text">For over three decades, Ashtech Group has been synonymous with engineering excellence, innovation, and integrity. After establishing a strong legacy in infrastructure and industrial development, we now bring the same commitment to luxury real estate in Greater Noida, West, with Ashtech Presidential Towers, a true landmark of refinement and responsibility.</p>
            <p class="animate-text">Every residence we craft embodies our core philosophy — precision in construction, sustainability in design, and a deep understanding of the people we build for. We are dedicated to creating homes that stand the test of time, inspire every day, and enrich life for generations to come.</p>
        </div>
    </div>
</section>

<!-- Legacy & Values Section -->
<section class="about-values">
    <div class="about-values__container">
        <div class="about-values__header">
            <p class="about-values__label animate-text">Legacy & Values</p>
            <h2 class="about-values__title animate-text">A Legacy Rooted in Purpose, Guided by Values</h2>
            <div class="about-values__intro">
                <p class="animate-text">Ashtech Group's story is one of dedication and vision. What began as an engineering-driven enterprise has evolved into a <br>multi-vertical group with 9 business divisions, 1600+ employees, and 2000+ skilled labourers — each contributing to <br>nation-building in their own way.</p>
                <p class="animate-text"><strong>At the heart of our journey lie six enduring values:</strong></p>
            </div>
        </div>
        
        <div class="about-values__graphic">
            <img src="<?php echo esc_url($assets_url); ?>images/about/values-graphic.svg" alt="Values Graphic" class="about-values__graphic-image">
            <div class="about-values__items">
                <div class="about-values__item about-values__item--left about-values__item--1">
                    <p class="about-values__item-text">जुनून (Passion)</p>
                </div>
                <div class="about-values__item about-values__item--left about-values__item--2">
                    <p class="about-values__item-text">संकल्प (Resolution)</p>
                </div>
                <div class="about-values__item about-values__item--left about-values__item--3">
                    <p class="about-values__item-text">लगन (Commitment)</p>
                </div>
                <div class="about-values__item about-values__item--right about-values__item--4">
                    <p class="about-values__item-text">विश्वास (Trust)</p>
                </div>
                <div class="about-values__item about-values__item--right about-values__item--5">
                    <p class="about-values__item-text">निष्ठा (Dedication)</p>
                </div>
                <div class="about-values__item about-values__item--right about-values__item--6">
                    <p class="about-values__item-text">दृढता (Strength)</p>
                </div>
            </div>
        </div>

        <div class="about-values__footer">
            <p class="animate-text">These are the values that continue to shape the spaces we create. Every project, including Ashtech Presidential Towers, <br>stands as a reflection of these principles, strengthened by Tata Group's <strong>TQ Cert</strong> quality certification and our relentless <br>pursuit of perfection.</p>
        </div>
    </div>
</section>

<!-- Vision & Mission Section -->
<section class="about-vision-mission">
    <div class="about-vision-mission__container">
        <div class="about-vision-mission__vision">
            <h3 class="about-vision-mission__title">Vision</h3>
            <div class="about-vision-mission__content">
                <p>Our vision is to be a global leader, transforming industries with pioneering technologies and sustainable practices.</p>
                <p>We aim to inspire progress by creating enduring value for our stakeholders, shaping a future where innovation, responsibility, and excellence converge seamlessly.</p>
            </div>
        </div>
        
        <div class="about-vision-mission__image">
            <img src="<?php echo esc_url($assets_url); ?>images/about/overview-pattern.png" alt="Building">
        </div>
        
        <div class="about-vision-mission__mission">
            <h3 class="about-vision-mission__title">Mission</h3>
            <div class="about-vision-mission__content">
                <p>At Ashtech Group, our mission is to redefine excellence by delivering innovative, sustainable, and value-driven solutions across all our business verticals.</p>
                <p>Guided by our ethos of "Innovation with Integrity," we are dedicated to exceeding customer expectations, fostering environmental stewardship, and empowering communities through cutting-edge products and services.</p>
            </div>
        </div>
    </div>
</section>

<!-- History Timeline Section -->
<section class="about-history">
    <div class="about-history__image-container">
        <img src="<?php echo esc_url($assets_url); ?>images/about/history-1.jpg" alt="Ashtech Manufacturing" class="about-history__image" id="historyImage">
    </div>
    
    <div class="about-history__content-box">
        <h3 class="about-history__title" id="historyTitle">Fly Ash Supply</h3>
        <p class="about-history__description" id="historyDescription">Combining innovation in materials and precision in delivery, Ashtech's Ready-Mix Concrete and Fly Ash Bricks manufacturing vertical delivers 10 million cubic metres of concrete and 100 million eco-friendly bricks and AAC blocks.</p>
    </div>
    
    <div class="about-history__timeline-wrapper">
        <div class="about-history__timeline">
            <div class="about-history__timeline-line"></div>
            <div class="about-history__timeline-progress" id="timelineProgress"></div>
            
            <?php
            $timeline = array(
                array('year' => '1992', 'title' => 'Fly Ash Supply', 'desc' => 'Combining innovation in materials and precision in delivery...', 'img' => 'history-1.jpg', 'label' => 'Fly Ash<br>Supply'),
                array('year' => '2004', 'title' => 'Logistics', 'desc' => 'Ashtech\'s Logistics vertical ensures seamless transportation...', 'img' => 'history-2.jpg', 'label' => 'Logistics<br>&nbsp;'),
                array('year' => '2006', 'title' => 'Ready-Mix Concrete & Bricks Manufacturing', 'desc' => 'Combining innovation in materials...', 'img' => 'history-3.jpg', 'label' => 'Ready-Mix Concrete<br>& Bricks Manufacturing'),
                array('year' => '2012', 'title' => 'Fly Ash Processing', 'desc' => 'Advanced fly ash processing facilities...', 'img' => 'history-4.jpg', 'label' => 'Fly Ash<br>Processing'),
                array('year' => '2020', 'title' => 'Large Scale Infrastructure Projects', 'desc' => 'Expanded capabilities to undertake large-scale infrastructure projects...', 'img' => 'history-5.jpg', 'label' => 'Large Scale<br>Infrastructure Projects'),
                array('year' => '2021', 'title' => 'Pre-Engineered Buildings', 'desc' => 'Introduction of pre-engineered building solutions...', 'img' => 'history-6.jpg', 'label' => 'Pre-Engineered<br>Buildings'),
                array('year' => '2021', 'title' => 'Power Infrastructure', 'desc' => 'Venturing into power infrastructure development...', 'img' => 'history-7.jpg', 'label' => 'Power<br>Infrastructure'),
                array('year' => '2024', 'title' => 'Management Consultancy', 'desc' => 'Launched management consultancy services...', 'img' => 'history-8.jpg', 'label' => 'Management<br>Consultancy')
            );
            
            foreach ($timeline as $index => $item) : ?>
                <div class="about-history__timeline-item <?php echo $index === 0 ? 'active' : ''; ?>" data-year="<?php echo esc_attr($item['year']); ?>" data-title="<?php echo esc_attr($item['title']); ?>" data-description="<?php echo esc_attr($item['desc']); ?>" data-image="<?php echo esc_url($assets_url); ?>images/about/<?php echo esc_attr($item['img']); ?>">
                    <p class="about-history__timeline-year"><?php echo esc_html($item['year']); ?></p>
                    <div class="about-history__timeline-dot"></div>
                    <p class="about-history__timeline-label"><?php echo wp_kses_post($item['label']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Leadership Section -->
<section class="about-leadership">
    <div class="project-overview__decoration"></div>
    <div class="about-leadership__container">
        <div class="about-leadership__header">
            <p class="about-leadership__label animate-text">Leadership</p>
            <h2 class="about-leadership__title animate-text">The Legacy Continues with Our Leadership Team</h2>
        </div>

        <!-- Main Director -->
        <div class="about-leadership__main">
            <div class="about-leadership__main-image">
                <img src="<?php echo esc_url($assets_url); ?>images/about/director-sumit.jpg" alt="Mr. Sumit Agarwal">
            </div>
            <div class="about-leadership__main-content">
                <div class="about-leadership__main-text">
                    <p>The launch of our flagship residential project is about setting a new benchmark for luxury lifestyle in the NCR. We see a clear demand for premium homes that deliver on both high-end finishes and superior construction quality.</p>
                    <p>By investing ₹1,800 crore in our Greater Noida West venture, we're putting our capital and reputation where our vision is, aiming to redefine 'world-class' through thoughtful design, exclusive amenities, and homes that truly reflect the evolving aspirations of modern urban families.</p>
                </div>
                <div class="about-leadership__main-info">
                    <p class="about-leadership__main-name">Mr. Sumit Agarwal</p>
                    <p class="about-leadership__main-position">Director</p>
                </div>
            </div>
        </div>

        <!-- Core Team -->
        <div class="about-leadership__team">
            <?php
            $team = array(
                array('img' => 'team-1.jpg', 'name' => 'Sangeeta Tiwari', 'position' => 'Brand and Marketing Head'),
                array('img' => 'team-2.jpg', 'name' => 'Mr. Sunny Chug', 'position' => 'VP (Finance)'),
                array('img' => 'team-3.jpg', 'name' => 'Mr. Rahul Bhargava', 'position' => 'AVP (Sales)'),
                array('img' => 'team-4.jpg', 'name' => 'Mr. Shyam Bisht', 'position' => 'AGM (Procurement)'),
                array('img' => 'team-5.jpg', 'name' => 'Mr. Aditya Yadav', 'position' => 'General Manager (Architect)'),
                array('img' => 'team-6.jpg', 'name' => 'Mr. Dilip Kumar Jain', 'position' => 'General Manager (Accounts)')
            );
            foreach ($team as $member) : ?>
                <div class="about-leadership__team-member">
                    <div class="about-leadership__team-image">
                        <img src="<?php echo esc_url($assets_url); ?>images/about/<?php echo esc_attr($member['img']); ?>" alt="<?php echo esc_attr($member['name']); ?>">
                    </div>
                    <div class="about-leadership__team-info">
                        <p class="about-leadership__team-name"><?php echo esc_html($member['name']); ?></p>
                        <p class="about-leadership__team-position"><?php echo esc_html($member['position']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Director's Message Section -->
<section class="about-director-message">
    <div class="about-director-message__background"></div>
    <div class="about-director-message__container">
        <div class="about-director-message__header">
            <p class="about-director-message__label animate-text">Director's Message</p>
            <h2 class="about-director-message__title animate-text">Crafting a New Legacy</h2>
        </div>

        <div class="about-director-message__content">
            <div class="about-director-message__text-wrapper">
                <div class="about-director-message__text">
                    <p class="animate-text">For over thirty years, Ashtech has operated on a simple principle: trust through quality. We take immense pride in having engineered the very foundation of India's growth, from our materials to major infrastructure projects.</p>
                    <p class="animate-text">Today, we transition to an exciting and personal new chapter by entering the world of luxury residential real estate.</p>
                    <p class="animate-text">Our flagship project, Presidential Towers in Greater Noida West, is our promise made visible. This isn't just a structure; it's our decades of construction mastery and a ₹1,800 crore commitment to quality control, innovative design, and sustainability.</p>
                    <p class="animate-text">We are leveraging everything we know to craft truly world-class homes, elevating the standards of sophisticated living in the NCR. Thank you for trusting the Ashtech name. We are ready to build your future.</p>
                </div>
                <div class="about-director-message__signature">
                    <p class="about-director-message__name">Mr. Sumit Agarwal</p>
                    <p class="about-director-message__position">Director, Ashtech Group</p>
                </div>
            </div>
            <div class="about-director-message__image">
                <img src="<?php echo esc_url($assets_url); ?>images/about/director-updated.jpg" alt="Mr. Sumit Agarwal">
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section class="about-projects">
    <div class="project-overview__decoration"></div>
    <div class="about-projects__container">
        <div class="about-projects__header">
            <p class="about-projects__label animate-text">Projects</p>
            <h2 class="about-projects__title animate-text">Experience the New Benchmark of Luxury Living</h2>
        </div>
        <div class="about-projects__content">
            <p class="about-projects__description animate-text">Explore Ashtech Presidential Towers — a limited collection of residences crafted to reflect excellence, well-being, and timeless sophistication.</p>
            <div class="about-projects__button">
                <a href="project.html" class="btn btn--primary">
                    <span>View Our Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
                        <path d="M1 1L7 8.5L1 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/about.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/landing-animations.js"></script>
<script src="<?php echo esc_url($assets_url); ?>js/project.js"></script>

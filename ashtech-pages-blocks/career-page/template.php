<?php if (!defined('ABSPATH')) exit; $assets_url = ASHTECH_BLOCKS_URL . 'assets/'; ?>

<section class="project-hero careerbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-text"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<section class="career-overview">
    <div class="project-about__decoration"></div>
    <div class="career-overview__container">
        <div class="career-overview__left">
            <p class="career-overview__label animate-text">Overview</p>
            <h2 class="career-overview__title animate-text">Join a Legacy of Excellence</h2>
        </div>
    </div>
</section>

<section class="career-why">
    <div class="career-why__container">
        <div class="career-why__card">
            <div class="career-why__image">
                <img src="<?php echo esc_url($assets_url); ?>images/career/why-3.jpg" alt="Culture">
            </div>
        </div>
    </div>
</section>


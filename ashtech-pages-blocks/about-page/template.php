<?php if (!defined('ABSPATH')) exit; $assets_url = ASHTECH_BLOCKS_URL . 'assets/'; ?>

<section class="project-hero aboutbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main">Ashtech Presidential Towers by Ashtech Group</p>
        </div>
    </div>
</section>

<section class="about-overview">
    <div class="project-overview__decoration"></div>
    <div class="about-overview__container">
        <div class="about-overview__header">
            <p class="about-overview__label animate-text">Overview</p>
            <h2 class="about-overview__title animate-text">From Foundations of Strength to Towers of Excellence</h2>
        </div>
    </div>
</section>

<section class="about-values">
    <div class="about-values__container">
        <div class="about-values__graphic">
            <img src="<?php echo esc_url($assets_url); ?>images/about/values-graphic.svg" alt="Values Graphic">
        </div>
    </div>
</section>


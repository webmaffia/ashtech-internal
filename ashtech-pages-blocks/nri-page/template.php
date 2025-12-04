<?php if (!defined('ABSPATH')) exit; $assets_url = ASHTECH_BLOCKS_URL . 'assets/'; ?>

<section class="project-hero nribg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<section class="nri-overview">
    <div class="project-about__decoration"></div>
    <div class="nri-overview__container">
        <div class="nri-overview__left">
            <div class="nri-overview__header">
                <span class="nri-overview__label animate-text">Overview</span>
                <h2 class="nri-overview__title animate-text">An Investment Opportunity<br>Like None Other!</h2>
            </div>
        </div>
    </div>
</section>

<section class="nri-benefits">
    <div class="nri-benefits__container">
        <div class="nri-benefits__image">
            <img src="<?php echo esc_url($assets_url); ?>images/nri/nri-benefits.jpg" alt="Investment Benefits">
        </div>
    </div>
</section>


<?php if (!defined('ABSPATH')) exit; $assets_url = ASHTECH_BLOCKS_URL . 'assets/'; ?>

<section class="project-hero resourcesbg">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
    </div>
</section>

<section class="resources-tabs">
    <div class="resources-tabs__container">
        <div class="resources-tabs__nav">
            <button class="resources-tabs__link" data-tab="highlights">Highlights</button>
            <button class="resources-tabs__link" data-tab="blogs">Blogs</button>
            <button class="resources-tabs__link" data-tab="video">Video Gallery</button>
            <button class="resources-tabs__link resources-tabs__link--active" data-tab="press">Press & Media</button>
        </div>
    </div>
</section>

<section class="resources-content">
    <div class="resources-news__container">
        <div class="resources-news__featured">
            <h2 class="resources-news__title">News & Press Releases</h2>
            <div class="resources-news__featured-image">
                <img src="<?php echo esc_url($assets_url); ?>images/resources/featured-news.jpg" alt="News">
            </div>
        </div>
        <div class="resources-news__grid">
            <article class="news-card">
                <div class="news-card__image">
                    <img src="<?php echo esc_url($assets_url); ?>images/resources/news-1.jpg" alt="News">
                </div>
            </article>
        </div>
    </div>
</section>


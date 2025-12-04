<?php if (!defined('ABSPATH')) exit; $assets_url = ASHTECH_BLOCKS_URL . 'assets/'; ?>

<section class="project-hero">
    <div class="project-hero__overlay"></div>
    <div class="project-hero__content">
        <h1 class="project-hero__title"><?php echo wp_kses_post($heroTitle); ?></h1>
        <div class="project-hero__subtitle">
            <p class="project-hero__subtitle-main">Ashtech Presidential Towers by Ashtech Group</p>
            <p class="project-hero__subtitle-text"><?php echo wp_kses_post($heroSubtitle); ?></p>
        </div>
    </div>
</section>

<section class="project-submenu" id="project-submenu">
    <div class="project-submenu__container">
        <div class="project-submenu__logo">
            <img src="<?php echo esc_url($assets_url); ?>images/project/project_logo.png" alt="Ashtech Presidential Logo">
        </div>
        <nav class="project-submenu__nav">
            <a href="#overview" class="project-submenu__link">Overview</a>
            <a href="#architecture" class="project-submenu__link">Architecture</a>
            <a href="#experiences" class="project-submenu__link">Experiences</a>
            <a href="#location" class="project-submenu__link">Location</a>
            <a href="#specifications" class="project-submenu__link">Specifications</a>
            <a href="#about" class="project-submenu__link">About Ashtech Group</a>
        </nav>
    </div>
</section>

<section id="overview" class="project-overview">
    <div class="project-overview__decoration"></div>
    <div class="project-overview__container">
        <div class="project-overview__left">
            <div class="project-overview__header">
                <span class="project-overview__label animate-text">Overview</span>
                <h2 class="project-overview__title animate-text">Crafted for Those Who <br>Value the Calm Within</h2>
            </div>
        </div>
        <div class="project-overview__right">
            <div class="project-overview__description animate-text">
                <p>On 5.6 acres of resort-style landscaped greens rise five serene towers, home to 456 residences designed with care and precision.</p>
            </div>
            <div class="project-overview__stats">
                <div class="project-overview__stat">
                    <div class="project-overview__stat-icon">
                        <img src="<?php echo esc_url($assets_url); ?>images/project/ease-vehicular.svg" alt="Acres">
                    </div>
                    <p class="project-overview__stat-text">5.6 ACRES</p>
                </div>
                <div class="project-overview__stat">
                    <div class="project-overview__stat-icon">
                        <img src="<?php echo esc_url($assets_url); ?>images/project/overview-open-plot.svg" alt="Open Plot">
                    </div>
                    <p class="project-overview__stat-text">3-SIDE OPEN PLOT</p>
                </div>
                <div class="project-overview__stat">
                    <div class="project-overview__stat-icon">
                        <img src="<?php echo esc_url($assets_url); ?>images/project/overview-towers.svg" alt="Towers">
                    </div>
                    <p class="project-overview__stat-text">5 TOWERS</p>
                </div>
                <div class="project-overview__stat">
                    <div class="project-overview__stat-icon">
                        <img src="<?php echo esc_url($assets_url); ?>images/project/overview-residences.svg" alt="Residences">
                    </div>
                    <p class="project-overview__stat-text">456 RESIDENCES</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Add remaining sections from project.html -->
<section id="architecture" class="project-architecture">
    <div class="project-architecture__overlay"></div>
    <div class="project-architecture__container">
        <div class="project-architecture__header">
            <span class="project-architecture__label animate-text">Architecture: The Four Elements</span>
            <h2 class="project-architecture__title animate-text">Architecture Shaped by the Elements of Nature</h2>
        </div>
    </div>
</section>

<section id="about" class="project-about">
    <div class="project-about__decoration"></div>
    <div class="project-about__container">
        <div class="project-about__left">
            <span class="project-about__label animate-text">About Ashtech Group</span>
            <h2 class="project-about__title animate-text">A Legacy Etched in Precision and Purpose</h2>
        </div>
    </div>
</section>


<?php
/**
 * Template Name: Ashtech Full Width with Menu
 * Description: Full-width page with custom header menu, no footer
 */

if (!defined('ABSPATH')) exit;

$assets_url = ASHTECH_BLOCKS_URL . 'assets/';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        body.admin-bar { margin-top: 0 !important; }
        body, html { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }
        .wp-site-blocks { padding: 0 !important; }
        #content { margin: 0; padding: 0; width: 100%; }
    </style>
</head>
<body <?php body_class('ashtech-fullwidth-page'); ?>>
<?php wp_body_open(); ?>

<!-- Header -->
<header class="header">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="header__logo">
        <img src="<?php echo esc_url($assets_url); ?>images/landing/logo.svg" alt="Ashtech Logo">
    </a>
    <div class="header__menu" id="menuToggle">
        <span class="header__menu-text">Menu</span>
        <img src="<?php echo esc_url($assets_url); ?>images/menu.svg" alt="Menu Icon" class="hero-2__menu-icon">
    </div>
</header>

<!-- Sliding Menu -->
<div class="side-menu" id="sideMenu">
    <div class="side-menu__overlay" id="menuOverlay"></div>
    <div class="side-menu__content">
        <button class="side-menu__close" id="menuClose">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <nav class="side-menu__nav">
            <ul class="side-menu__list">
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="side-menu__link">Home</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/project')); ?>" class="side-menu__link">Project</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/nri-corner')); ?>" class="side-menu__link">NRI Corner</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/about')); ?>" class="side-menu__link">About Us</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/resources')); ?>" class="side-menu__link">Resources</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/career')); ?>" class="side-menu__link">Career</a>
                </li>
                <li class="side-menu__item">
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="side-menu__link">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<div id="page" class="site">
    <div id="content" class="site-content">
        <main id="primary" class="site-main">
            <?php
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
            ?>
        </main>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>


<?php
/**
 * Template Name: Ashtech Full Width with Header & Footer
 * Description: Full-width page with custom header menu and footer
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
        html { scroll-behavior: smooth; }
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

<!-- Page Content -->
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

<!-- Footer -->
<footer class="landing-footer">
    <div class="landing-footer__background"></div>
    <div class="landing-footer__content">
        <div class="landing-footer__main">
            <div class="landing-footer__about">
                <div class="landing-footer__logo">
                    <img src="<?php echo esc_url($assets_url); ?>images/landing/footer-logo.svg" alt="Ashtech Logo">
                </div>
                <p class="landing-footer__description animate-text">A pioneer in sustainable construction, Ashtech Industries Pvt. Ltd. (AIPL) drives innovation across infrastructure, flyash solutions, and civil engineering.</p>
                <div class="landing-footer__social">
                    <a href="https://www.facebook.com/ashtechgroupofficial/" class="landing-footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/social-facebook.svg" alt="Facebook">
                    </a>
                    <a href="https://x.com/ashtech_group?lang=en" class="landing-footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/social-twitter.svg" alt="Twitter">
                    </a>
                    <a href="https://www.instagram.com/ashtechgroupofficial/" class="landing-footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/social-instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.linkedin.com/company/ashtech-prefab-india-pvt-ltd/" class="landing-footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/social-linkedin.svg" alt="LinkedIn">
                    </a>
                    <a href="https://www.youtube.com/@ashtechgroupofficial" class="landing-footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/social-youtube.svg" alt="YouTube">
                    </a>
                </div>
            </div>
            <div class="landing-footer__links">
                <h3 class="landing-footer__links-title animate-text">Quick Links</h3>
                <ul class="landing-footer__links-list">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/project')); ?>">Ashtech Presidential</a></li>
                    <li><a href="<?php echo esc_url(home_url('/nri-corner')); ?>">NRI Desk</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/resources')); ?>">Media & Insights</a></li>
                    <li><a href="<?php echo esc_url(home_url('/career')); ?>">Careers</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact Us</a></li>
                </ul>
            </div>
            <div class="landing-footer__contact">
                <h3 class="landing-footer__contact-title animate-text">Contact Us</h3>
                <div class="landing-footer__contact-list">
                    <div class="landing-footer__contact-item">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-location.svg" alt="Location" class="landing-footer__contact-icon">
                        <p class="animate-text">Ashtech Industries Pvt Ltd.<br>C-50, RDC, Rajnagar Ghaziabad</p>
                    </div>
                    <div class="landing-footer__contact-item">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-phone.svg" alt="Phone" class="landing-footer__contact-icon">
                        <p><a href="tel:+919278133133" class="animate-text w-400">+91 92 7813 3133</a></p>
                    </div>
                    <div class="landing-footer__contact-item">
                        <img src="<?php echo esc_url($assets_url); ?>images/landing/icon-email.svg" alt="Email" class="landing-footer__contact-icon">
                        <p><a href="mailto:info@ashtechgroup.in" class="animate-text w-400">info@ashtechgroup.in</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="landing-footer__bottom">
            <p class="landing-footer__copyright">© <?php echo date('Y'); ?> Ashtech Industries Pvt. Ltd. All Rights Reserved.</p>
            <p class="landing-footer__legal">
                <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">Privacy Policy</a> | 
                <a href="<?php echo esc_url(home_url('/terms-and-conditions')); ?>">Terms & Conditions</a>
            </p>
        </div>
    </div>
</footer>

<script src="<?php echo esc_url($assets_url); ?>js/main.js"></script>

<?php wp_footer(); ?>
</body>
</html>


<?php
/**
 * Plugin Name: Ashtech Pages Blocks
 * Description: Full-page Gutenberg blocks for Ashtech website pages - Using your exact HTML
 * Version: 1.0.0
 * Author: Ashtech
 * Text Domain: ashtech-pages-blocks
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

define('ASHTECH_BLOCKS_VERSION', '1.0.0');
define('ASHTECH_BLOCKS_DIR', plugin_dir_path(__FILE__));
define('ASHTECH_BLOCKS_URL', plugin_dir_url(__FILE__));

/**
 * Register all blocks
 */
function ashtech_register_blocks() {
    $blocks = array(
        'home-page',
        'project-page',
        'nri-page',
        'about-page',
        'resources-page',
        'career-page',
        'contact-page',
        'terms-page',
        'privacy-page'
    );

    foreach ($blocks as $block_name) {
        $block_folder = ASHTECH_BLOCKS_DIR . $block_name;
        
        if (file_exists($block_folder . '/block.json')) {
            // Register block - no render callback, uses save.js output
            register_block_type($block_folder);
        }
    }
}
add_action('init', 'ashtech_register_blocks');

/**
 * Enqueue block editor assets
 */
function ashtech_enqueue_block_editor_assets() {
    // Editor styles
    wp_enqueue_style(
        'ashtech-blocks-editor',
        ASHTECH_BLOCKS_URL . 'editor.css',
        array('wp-edit-blocks'),
        ASHTECH_BLOCKS_VERSION
    );
}
add_action('enqueue_block_editor_assets', 'ashtech_enqueue_block_editor_assets');

/**
 * Pass plugin data to JavaScript (both editor and frontend)
 */
function ashtech_localize_scripts() {
    // Create inline script to set global variable
    $script = sprintf(
        'window.ashtechBlocksData = %s;',
        json_encode(array(
            'pluginUrl' => ASHTECH_BLOCKS_URL,
            'assetsUrl' => ASHTECH_BLOCKS_URL . 'assets/'
        ))
    );
    
    wp_add_inline_script('wp-blocks', $script, 'before');
}
add_action('enqueue_block_editor_assets', 'ashtech_localize_scripts');
add_action('wp_enqueue_scripts', 'ashtech_localize_scripts');

/**
 * Enqueue frontend and editor styles
 */
function ashtech_enqueue_block_styles() {
    // Frontend styles
    wp_enqueue_style(
        'ashtech-blocks-frontend',
        ASHTECH_BLOCKS_URL . 'style.css',
        array(),
        ASHTECH_BLOCKS_VERSION
    );

    // Enqueue your main.css
    wp_enqueue_style(
        'ashtech-main-css',
        ASHTECH_BLOCKS_URL . 'assets/css/main.css',
        array(),
        ASHTECH_BLOCKS_VERSION
    );
}
add_action('enqueue_block_assets', 'ashtech_enqueue_block_styles');

/**
 * Enqueue scripts for frontend (if needed for interactions)
 */
function ashtech_enqueue_frontend_scripts() {
    // Enqueue jQuery
    wp_enqueue_script('jquery');
    
    // Enqueue Slick Carousel for sliders
    wp_enqueue_style(
        'slick-carousel-css',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        array(),
        '1.8.1'
    );
    
    wp_enqueue_script(
        'slick-carousel-js',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        array('jquery'),
        '1.8.1',
        true
    );
    
    // Enqueue all your custom scripts
    wp_enqueue_script(
        'ashtech-main-js',
        ASHTECH_BLOCKS_URL . 'assets/js/main.js',
        array('jquery'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-landing-animations-js',
        ASHTECH_BLOCKS_URL . 'assets/js/landing-animations.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-project-js',
        ASHTECH_BLOCKS_URL . 'assets/js/project.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-career-js',
        ASHTECH_BLOCKS_URL . 'assets/js/career.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-nri-js',
        ASHTECH_BLOCKS_URL . 'assets/js/nri.js',
        array('jquery', 'slick-carousel-js', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-about-js',
        ASHTECH_BLOCKS_URL . 'assets/js/about.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-resources-js',
        ASHTECH_BLOCKS_URL . 'assets/js/resources.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    wp_enqueue_script(
        'ashtech-contact-js',
        ASHTECH_BLOCKS_URL . 'assets/js/contact.js',
        array('jquery', 'ashtech-main-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'ashtech_enqueue_frontend_scripts');

/**
 * Add custom page templates
 */
function ashtech_add_page_templates($templates) {
    $templates['templates/template-fullwidth.php'] = 'Ashtech Full Width (No Header/Footer)';
    $templates['templates/template-fullwidth-with-menu.php'] = 'Ashtech Full Width with Menu';
    $templates['templates/template-fullwidth-with-header-footer.php'] = 'Ashtech Full Width with Header & Footer';
    return $templates;
}
add_filter('theme_page_templates', 'ashtech_add_page_templates');

/**
 * Load custom page templates from plugin
 */
function ashtech_load_page_templates($template) {
    if (is_page()) {
        $custom_template = get_post_meta(get_the_ID(), '_wp_page_template', true);
        
        if ($custom_template && strpos($custom_template, 'templates/') === 0) {
            $plugin_template = ASHTECH_BLOCKS_DIR . $custom_template;
            
            if (file_exists($plugin_template)) {
                return $plugin_template;
            }
        }
    }
    
    return $template;
}
add_filter('template_include', 'ashtech_load_page_templates', 99);

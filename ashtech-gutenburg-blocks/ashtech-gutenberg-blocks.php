<?php
/**
 * Plugin Name: Ashtech Gutenberg Blocks
 * Description: Custom Gutenberg blocks for Ashtech Presidential Towers website
 * Version: 1.0.0
 * Author: Ashtech Group
 * Text Domain: ashtech-blocks
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('ASHTECH_BLOCKS_VERSION', '1.0.0');
define('ASHTECH_BLOCKS_DIR', plugin_dir_path(__FILE__));
define('ASHTECH_BLOCKS_URL', plugin_dir_url(__FILE__));

// Register block category
function ashtech_blocks_category($categories) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'ashtech-blocks',
                'title' => 'Ashtech Blocks',
            ),
        )
    );
}
add_filter('block_categories_all', 'ashtech_blocks_category', 10, 2);

// Enqueue assets for both frontend and editor
function ashtech_blocks_enqueue_assets() {
    // Main CSS - load from plugin assets folder
    wp_enqueue_style(
        'ashtech-main-css',
        ASHTECH_BLOCKS_URL . 'assets/css/main.css',
        array(),
        ASHTECH_BLOCKS_VERSION
    );
    
    // Slick Slider CSS
    wp_enqueue_style(
        'slick-css',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        array(),
        '1.8.1'
    );
    
    wp_enqueue_style(
        'slick-theme-css',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
        array(),
        '1.8.1'
    );
    
    // jQuery (WordPress includes this)
    wp_enqueue_script('jquery');
    
    // Slick Slider JS
    wp_enqueue_script(
        'slick-js',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        array('jquery'),
        '1.8.1',
        true
    );
    
    // Main JS - load from plugin assets folder
    wp_enqueue_script(
        'ashtech-main-js',
        ASHTECH_BLOCKS_URL . 'assets/js/main.js',
        array('jquery', 'slick-js'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'ashtech_blocks_enqueue_assets');
add_action('enqueue_block_editor_assets', 'ashtech_blocks_enqueue_assets');

// Register all blocks
function ashtech_register_blocks() {
    $blocks = array(
        // Landing Page
        'landing-banner',
        'landing-overview',
        'landing-values',
        'landing-projects',
        'landing-nri',
        'landing-awards',
        'landing-testimonials',
        
        // About Page
        'about-hero',
        'about-overview',
        'about-values',
        'about-vision-mission',
        'about-history',
        'about-leadership',
        'about-director-message',
        'about-projects',
        
        // Project Page
        'project-hero',
        'project-submenu',
        'project-overview',
        'project-architecture',
        'experiences',
        'project-location',
        'specifications',
        'project-about',
        
        // NRI Page
        'nri-hero',
        'nri-overview',
        'nri-architecture',
        'nri-why-choose',
        'nri-benefits',
        'nri-director',
        'nri-testimonials',
        'nri-cta',
        
        // Career Page
        'career-hero',
        'career-overview',
        'career-why',
        'career-life',
        'career-openings',
        'career-form',
        'career-assurance',
        
        // Contact Page
        'contact-hero',
        'contact-enquiry',
        'contact-offices',
        'contact-form',
        
        // Resources Page
        'resources-hero',
        'resources-tabs',
        'resources-content'
    );

    foreach ($blocks as $block) {
        register_block_type(ASHTECH_BLOCKS_DIR . 'build/blocks/' . $block);
    }
}
add_action('init', 'ashtech_register_blocks');

// Register custom page templates
function ashtech_register_page_templates($templates) {
    $templates['templates/full-width-template.php'] = __('Ashtech Full Width (No Wrappers)', 'ashtech-blocks');
    $templates['templates/blank-template.php'] = __('Ashtech Blank (No Header/Footer)', 'ashtech-blocks');
    return $templates;
}
add_filter('theme_page_templates', 'ashtech_register_page_templates');

// Load custom page templates from plugin
function ashtech_load_custom_template($template) {
    global $post;
    
    if (!$post) {
        return $template;
    }
    
    $page_template = get_post_meta($post->ID, '_wp_page_template', true);
    
    // Full Width Template (with header/footer)
    if ($page_template === 'templates/full-width-template.php') {
        $plugin_template = ASHTECH_BLOCKS_DIR . 'templates/full-width-template.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    
    // Blank Template (no header/footer)
    if ($page_template === 'templates/blank-template.php') {
        $plugin_template = ASHTECH_BLOCKS_DIR . 'templates/blank-template.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    
    return $template;
}
add_filter('template_include', 'ashtech_load_custom_template', 99);

// Add custom CSS to remove theme wrappers
function ashtech_remove_theme_wrappers() {
    global $post;
    
    if (isset($post->post_content) && has_block('ashtech/', $post)) {
        echo '<style>
            /* Remove all theme wrappers and padding */
            .site-main,
            .content-area,
            .site-content,
            main,
            article,
            .entry-content {
                margin: 0 !important;
                padding: 0 !important;
                max-width: none !important;
                width: 100% !important;
            }
            
            /* Remove container constraints */
            .container,
            .wrapper {
                max-width: none !important;
                padding: 0 !important;
            }
            
            /* Full width */
            body.page .site {
                padding: 0 !important;
                margin: 0 !important;
            }
            
            /* For Ashtech content div */
            #ashtech-content {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                max-width: none !important;
            }
        </style>';
    }
}
add_action('wp_head', 'ashtech_remove_theme_wrappers');

// Fix image paths in block content to use plugin URL
function ashtech_fix_image_paths($block_content, $block) {
    if (empty($block['blockName']) || strpos($block['blockName'], 'ashtech/') !== 0) {
        return $block_content;
    }
    
    // Replace relative asset paths with plugin URL
    $block_content = preg_replace(
        '/src=["\']assets\//',
        'src="' . ASHTECH_BLOCKS_URL . 'assets/',
        $block_content
    );
    
    $block_content = preg_replace(
        '/href=["\']assets\//',
        'href="' . ASHTECH_BLOCKS_URL . 'assets/',
        $block_content
    );
    
    return $block_content;
}
add_filter('render_block', 'ashtech_fix_image_paths', 10, 2);

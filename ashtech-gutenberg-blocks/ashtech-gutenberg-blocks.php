<?php
/**
 * Plugin Name: Ashtech Gutenberg Blocks
 * Plugin URI: https://ashtechgroup.in
 * Description: Custom Gutenberg blocks for Ashtech Presidential Towers landing page
 * Version: 1.0.1
 * Author: Ashtech
 * Author URI: https://ashtechgroup.in
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: ashtech-blocks
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('ASHTECH_BLOCKS_VERSION', '1.0.1');
define('ASHTECH_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('ASHTECH_BLOCKS_URL', plugin_dir_url(__FILE__));

/**
 * Register all blocks
 */
function ashtech_register_blocks() {
    // Array of all blocks
    $blocks = array(
        'banner',
        'overview',
        'values',
        'projects',
        'nri',
        'awards',
        'testimonials',
        'footer'
    );

    // Register each block
    foreach ($blocks as $block) {
        register_block_type(ASHTECH_BLOCKS_PATH . 'build/blocks/' . $block);
    }
}
add_action('init', 'ashtech_register_blocks');

/**
 * Register custom page templates
 */
function ashtech_register_templates($templates) {
    $templates['templates/ashtech-full-width.php'] = __('Ashtech Full Width (No Wrappers)', 'ashtech-blocks');
    $templates['templates/ashtech-blank.php'] = __('Ashtech Blank (No Header/Footer)', 'ashtech-blocks');
    return $templates;
}
add_filter('theme_page_templates', 'ashtech_register_templates');

/**
 * Load custom page templates from plugin
 */
function ashtech_load_template($template) {
    global $post;
    
    if (!$post) {
        return $template;
    }
    
    $page_template = get_post_meta($post->ID, '_wp_page_template', true);
    
    if ($page_template === 'templates/ashtech-full-width.php') {
        $plugin_template = ASHTECH_BLOCKS_PATH . 'templates/ashtech-full-width.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    
    if ($page_template === 'templates/ashtech-blank.php') {
        $plugin_template = ASHTECH_BLOCKS_PATH . 'templates/ashtech-blank.php';
        if (file_exists($plugin_template)) {
            return $plugin_template;
        }
    }
    
    return $template;
}
add_filter('template_include', 'ashtech_load_template', 99);

/**
 * Enqueue block editor assets
 */
function ashtech_enqueue_block_editor_assets() {
    // Make plugin URL available to JavaScript in editor
    wp_add_inline_script(
        'wp-blocks',
        'window.ashtechBlocksUrl = ' . wp_json_encode(ASHTECH_BLOCKS_URL) . ';',
        'before'
    );
    
    wp_enqueue_style(
        'ashtech-blocks-editor',
        ASHTECH_BLOCKS_URL . 'assets/css/editor.css',
        array('wp-edit-blocks'),
        ASHTECH_BLOCKS_VERSION
    );
}
add_action('enqueue_block_editor_assets', 'ashtech_enqueue_block_editor_assets');

/**
 * Enqueue frontend assets
 */
function ashtech_enqueue_frontend_assets() {
    // Main CSS
    wp_enqueue_style(
        'ashtech-blocks-frontend',
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

    // jQuery
    wp_enqueue_script('jquery');

    // Slick Slider JS
    wp_enqueue_script(
        'slick-js',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        array('jquery'),
        '1.8.1',
        true
    );

    // Landing animations
    wp_enqueue_script(
        'ashtech-animations',
        ASHTECH_BLOCKS_URL . 'assets/js/landing-animations.js',
        array('jquery'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    // Make plugin URL available to frontend JavaScript
    wp_add_inline_script(
        'ashtech-animations',
        'window.ashtechBlocksUrl = ' . wp_json_encode(ASHTECH_BLOCKS_URL) . ';',
        'before'
    );
}
add_action('wp_enqueue_scripts', 'ashtech_enqueue_frontend_assets');

/**
 * Add block category
 */
function ashtech_block_categories($categories) {
    return array_merge(
        array(
            array(
                'slug'  => 'ashtech',
                'title' => __('Ashtech Blocks', 'ashtech-blocks'),
                'icon'  => 'admin-home',
            ),
        ),
        $categories
    );
}
add_filter('block_categories_all', 'ashtech_block_categories', 10, 1);

/**
 * Remove classes from main content wrapper when Ashtech blocks are present
 */
function ashtech_remove_main_classes($classes) {
    global $post;
    
    // Check if current post has Ashtech blocks
    if (isset($post->post_content) && has_block('ashtech/', $post)) {
        // Remove all classes
        return array();
    }
    
    return $classes;
}
add_filter('post_class', 'ashtech_remove_main_classes', 999);

/**
 * Remove body classes when Ashtech blocks are present
 */
function ashtech_remove_body_classes($classes) {
    global $post;
    
    // Check if current post has Ashtech blocks
    if (isset($post->post_content) && has_block('ashtech/', $post)) {
        // Keep only essential classes, remove theme-specific ones
        $keep_classes = array('wp-admin-bar', 'logged-in', 'admin-bar');
        return array_intersect($classes, $keep_classes);
    }
    
    return $classes;
}
add_filter('body_class', 'ashtech_remove_body_classes', 999);

/**
 * Remove content wrapper classes
 */
function ashtech_remove_content_wrapper() {
    global $post;
    
    // Check if current post has Ashtech blocks
    if (isset($post->post_content) && has_block('ashtech/', $post)) {
        // Add CSS to hide or clean up theme wrappers
        echo '<style>
            .site-main,
            .content-area,
            main[class] {
                margin: 0 !important;
                padding: 0 !important;
            }
            
            /* Remove any container/wrapper styling */
            .entry-content {
                margin: 0 !important;
                padding: 0 !important;
                max-width: none !important;
            }
        </style>';
    }
}
add_action('wp_head', 'ashtech_remove_content_wrapper');

/**
 * Fix image paths in block content
 * This ensures images load correctly regardless of WordPress installation path
 */
function ashtech_fix_block_image_paths($block_content, $block) {
    // Only process Ashtech blocks
    if (empty($block['blockName']) || strpos($block['blockName'], 'ashtech/') !== 0) {
        return $block_content;
    }
    
    // Check if already processed (contains full plugin URL)
    if (strpos($block_content, ASHTECH_BLOCKS_URL) !== false) {
        return $block_content;
    }
    
    // Replace various path formats
    $replacements = array(
        // src="/wp-content/plugins/...
        'src="/wp-content/plugins/ashtech-gutenberg-blocks/' => 'src="' . ASHTECH_BLOCKS_URL,
        // href="/wp-content/plugins/...
        'href="/wp-content/plugins/ashtech-gutenberg-blocks/' => 'href="' . ASHTECH_BLOCKS_URL,
        // url(/wp-content/plugins/... (for CSS)
        'url(/wp-content/plugins/ashtech-gutenberg-blocks/' => 'url(' . ASHTECH_BLOCKS_URL,
    );
    
    $block_content = str_replace(
        array_keys($replacements),
        array_values($replacements),
        $block_content
    );
    
    return $block_content;
}
add_filter('render_block', 'ashtech_fix_block_image_paths', 10, 2);


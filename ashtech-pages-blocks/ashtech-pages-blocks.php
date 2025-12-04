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
            register_block_type($block_folder, array(
                'render_callback' => 'ashtech_render_block_' . str_replace('-', '_', $block_name)
            ));
        }
    }
}
add_action('init', 'ashtech_register_blocks');

/**
 * Enqueue block assets
 */
function ashtech_enqueue_block_assets() {
    // Enqueue editor script
    wp_enqueue_script(
        'ashtech-blocks-editor',
        ASHTECH_BLOCKS_URL . 'blocks-editor.js',
        array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n'),
        ASHTECH_BLOCKS_VERSION,
        true
    );

    // Enqueue editor styles
    wp_enqueue_style(
        'ashtech-blocks-editor',
        ASHTECH_BLOCKS_URL . 'editor.css',
        array('wp-edit-blocks'),
        ASHTECH_BLOCKS_VERSION
    );

    // Localize script with plugin data
    wp_localize_script('ashtech-blocks-editor', 'ashtechBlocksData', array(
        'pluginUrl' => ASHTECH_BLOCKS_URL,
        'assetsUrl' => ASHTECH_BLOCKS_URL . 'assets/'
    ));
}
add_action('enqueue_block_editor_assets', 'ashtech_enqueue_block_assets');

/**
 * Enqueue frontend styles
 */
function ashtech_enqueue_frontend_assets() {
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
add_action('wp_enqueue_scripts', 'ashtech_enqueue_frontend_assets');

/**
 * Render Home Page Block
 */
function ashtech_render_block_home_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : 'Nature and Architecture<br>in Perfect Sync';
    $mainContent = isset($attributes['mainContent']) ? $attributes['mainContent'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'home-page/template.php';
    return ob_get_clean();
}

/**
 * Render Project Page Block
 */
function ashtech_render_block_project_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    $heroSubtitle = isset($attributes['heroSubtitle']) ? $attributes['heroSubtitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'project-page/template.php';
    return ob_get_clean();
}

/**
 * Render NRI Page Block
 */
function ashtech_render_block_nri_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    $heroSubtitle = isset($attributes['heroSubtitle']) ? $attributes['heroSubtitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'nri-page/template.php';
    return ob_get_clean();
}

/**
 * Render About Page Block
 */
function ashtech_render_block_about_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'about-page/template.php';
    return ob_get_clean();
}

/**
 * Render Resources Page Block
 */
function ashtech_render_block_resources_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'resources-page/template.php';
    return ob_get_clean();
}

/**
 * Render Career Page Block
 */
function ashtech_render_block_career_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'career-page/template.php';
    return ob_get_clean();
}

/**
 * Render Contact Page Block
 */
function ashtech_render_block_contact_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    $heroSubtitle = isset($attributes['heroSubtitle']) ? $attributes['heroSubtitle'] : '';
    $salesPhone = isset($attributes['salesPhone']) ? $attributes['salesPhone'] : '';
    $salesEmail = isset($attributes['salesEmail']) ? $attributes['salesEmail'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'contact-page/template.php';
    return ob_get_clean();
}

/**
 * Render Terms Page Block
 */
function ashtech_render_block_terms_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'terms-page/template.php';
    return ob_get_clean();
}

/**
 * Render Privacy Page Block
 */
function ashtech_render_block_privacy_page($attributes) {
    $heroTitle = isset($attributes['heroTitle']) ? $attributes['heroTitle'] : '';
    
    ob_start();
    include ASHTECH_BLOCKS_DIR . 'privacy-page/template.php';
    return ob_get_clean();
}

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

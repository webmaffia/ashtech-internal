<?php
/**
 * Plugin Name: Ashtech Pages Blocks
 * Description: Full-page Gutenberg blocks for Ashtech website pages
 * Version: 1.0.0
 * Author: Ashtech
 * Text Domain: ashtech-pages-blocks
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Auto-register all blocks by scanning subfolders for block.json
 */
function ashtech_pages_blocks_register_blocks() {
    $plugin_dir = plugin_dir_path(__FILE__);
    
    // Scan all directories in the plugin folder
    $directories = glob($plugin_dir . '*', GLOB_ONLYDIR);
    
    foreach ($directories as $directory) {
        $block_json_path = $directory . '/block.json';
        
        // If block.json exists in the directory, register it
        if (file_exists($block_json_path)) {
            register_block_type($directory);
        }
    }
}
add_action('init', 'ashtech_pages_blocks_register_blocks');

/**
 * Enqueue block editor assets
 */
function ashtech_pages_blocks_enqueue_editor_assets() {
    wp_enqueue_style(
        'ashtech-pages-blocks-editor',
        plugin_dir_url(__FILE__) . 'editor.css',
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );
}
add_action('enqueue_block_editor_assets', 'ashtech_pages_blocks_enqueue_editor_assets');

/**
 * Enqueue frontend assets
 */
function ashtech_pages_blocks_enqueue_frontend_assets() {
    wp_enqueue_style(
        'ashtech-pages-blocks-frontend',
        plugin_dir_url(__FILE__) . 'style.css',
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );
}
add_action('enqueue_block_assets', 'ashtech_pages_blocks_enqueue_frontend_assets');


<?php
/**
 * Template Name: Ashtech Full Width (No Header/Footer)
 * Description: Full-width page template without header and footer for Ashtech blocks
 */

if (!defined('ABSPATH')) exit;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
    <style>
        /* Remove default WordPress admin bar spacing */
        body.admin-bar { margin-top: 0 !important; }
        
        /* Full width page - no margins */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
        }
        
        /* Remove default WordPress content padding */
        .wp-site-blocks {
            padding: 0 !important;
        }
        
        #content {
            margin: 0;
            padding: 0;
            width: 100%;
        }
    </style>
</head>
<body <?php body_class('ashtech-fullwidth-page'); ?>>
<?php wp_body_open(); ?>

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


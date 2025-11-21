<?php
/**
 * Template Name: Ashtech Blank (No Header/Footer)
 * Template Post Type: page
 * 
 * A completely blank template - only outputs the blocks
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('ashtech-blank-template'); ?>>

<?php
while (have_posts()) :
    the_post();
    the_content();
endwhile;
?>

<?php wp_footer(); ?>
</body>
</html>


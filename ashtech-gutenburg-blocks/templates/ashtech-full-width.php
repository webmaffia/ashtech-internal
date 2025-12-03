<?php
/**
 * Template Name: Ashtech Full Width (No Wrappers)
 * Template Post Type: page
 * 
 * A clean template without theme wrappers for Ashtech blocks
 */

get_header();
?>

<!-- Remove all theme wrappers and output content directly -->
<div id="ashtech-content" style="margin:0;padding:0;">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php
get_footer();
?>


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
 * Create database tables on plugin activation
 */
function ashtech_create_tables() {
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();
    
    // Contact submissions table
    $contact_table = $wpdb->prefix . 'ashtech_contact_submissions';
    $contact_sql = "CREATE TABLE IF NOT EXISTS $contact_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(50) NOT NULL,
        city varchar(255) DEFAULT NULL,
        project varchar(255) DEFAULT NULL,
        message text DEFAULT NULL,
        submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id)
    ) $charset_collate;";
    
    // Career submissions table
    $career_table = $wpdb->prefix . 'ashtech_career_submissions';
    $career_sql = "CREATE TABLE IF NOT EXISTS $career_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(50) NOT NULL,
        position varchar(255) NOT NULL,
        cover_letter text DEFAULT NULL,
        resume_url varchar(500) DEFAULT NULL,
        submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY  (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($contact_sql);
    dbDelta($career_sql);
}
register_activation_hook(__FILE__, 'ashtech_create_tables');

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
    
    // Enqueue main.css in editor so images and styling display properly
    wp_enqueue_style(
        'ashtech-main-css-editor',
        ASHTECH_BLOCKS_URL . 'assets/css/main.css',
        array('wp-edit-blocks', 'ashtech-blocks-editor'),
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
    
    // Add inline script directly (works in both editor and frontend)
    wp_add_inline_script('wp-blocks', $script, 'before');
    
    // Also add as a separate script to ensure it's available early
    wp_register_script('ashtech-blocks-data', false);
    wp_enqueue_script('ashtech-blocks-data');
    wp_add_inline_script('ashtech-blocks-data', $script);
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
    
    // Enqueue forms handler
    wp_enqueue_script(
        'ashtech-forms-js',
        ASHTECH_BLOCKS_URL . 'assets/js/forms.js',
        array('jquery'),
        ASHTECH_BLOCKS_VERSION,
        true
    );
    
    // Localize script for AJAX
    wp_localize_script('ashtech-forms-js', 'ashtechForms', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('ashtech_forms_nonce')
    ));
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

/**
 * Handle Contact Form Submission
 */
function ashtech_handle_contact_form() {
    try {
        // Verify nonce
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'ashtech_forms_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed. Please refresh the page and try again.'));
            return;
        }
        
        // Sanitize inputs
        $name = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
        $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
        $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
        $city = isset($_POST['city']) ? sanitize_text_field($_POST['city']) : '';
        $project = isset($_POST['project']) ? sanitize_text_field($_POST['project']) : '';
        $queries = isset($_POST['queries']) ? sanitize_textarea_field($_POST['queries']) : '';
        
        // Validate
        if (empty($name) || empty($email) || empty($phone)) {
            wp_send_json_error(array('message' => 'Please fill in all required fields.'));
            return;
        }
        
        if (!is_email($email)) {
            wp_send_json_error(array('message' => 'Please enter a valid email address.'));
            return;
        }
        
        // Prepare email to admin
        $to = get_option('admin_email'); // Send to WordPress admin email
        $subject = 'New Contact Form Submission - ' . get_bloginfo('name');
        
        $message = "New contact form submission:\n\n";
        $message .= "Name: " . $name . "\n";
        $message .= "Email: " . $email . "\n";
        $message .= "Phone: " . $phone . "\n";
        $message .= "City: " . $city . "\n";
        $message .= "Project: " . $project . "\n";
        $message .= "Message:\n" . $queries . "\n";
        
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
            'Reply-To: ' . $name . ' <' . $email . '>'
        );
        
        // Save to database
        global $wpdb;
        $table_name = $wpdb->prefix . 'ashtech_contact_submissions';
        
        $inserted = $wpdb->insert(
            $table_name,
            array(
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'city' => $city,
                'project' => $project,
                'message' => $queries,
                'submitted_at' => current_time('mysql')
            ),
            array('%s', '%s', '%s', '%s', '%s', '%s', '%s')
        );
        
        // Send email (will fail on localhost but that's ok)
        wp_mail($to, $subject, $message, $headers);
        
        // Always show success if data was saved
        if ($inserted !== false) {
            wp_send_json_success(array('message' => 'Thank you for contacting us! We will get back to you soon.'));
        } else {
            wp_send_json_error(array('message' => 'Sorry, there was an error saving your submission. Please try again.'));
        }
    } catch (Exception $e) {
        error_log('Contact form error: ' . $e->getMessage());
        wp_send_json_error(array('message' => 'Sorry, there was an error. Error: ' . $e->getMessage()));
    }
}
add_action('wp_ajax_ashtech_contact_form', 'ashtech_handle_contact_form');
add_action('wp_ajax_nopriv_ashtech_contact_form', 'ashtech_handle_contact_form');

/**
 * Handle Career Form Submission
 */
function ashtech_handle_career_form() {
    try {
        // Verify nonce
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'ashtech_forms_nonce')) {
            wp_send_json_error(array('message' => 'Security check failed. Please refresh the page and try again.'));
            return;
        }
        
        // Sanitize inputs
        $name = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
        $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
        $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
        $position = isset($_POST['position']) ? sanitize_text_field($_POST['position']) : '';
        $coverLetter = isset($_POST['coverLetter']) ? sanitize_textarea_field($_POST['coverLetter']) : '';
        
        // Validate
        if (empty($name) || empty($email) || empty($phone) || empty($position)) {
            wp_send_json_error(array('message' => 'Please fill in all required fields.'));
            return;
        }
        
        if (!is_email($email)) {
            wp_send_json_error(array('message' => 'Please enter a valid email address.'));
            return;
        }
        
        // Handle file upload
        $resume_info = '';
        if (!empty($_FILES['resume']['name'])) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            
            $uploadedfile = $_FILES['resume'];
            $upload_overrides = array('test_form' => false);
            
            // Allow common resume file types
            add_filter('upload_mimes', function($mimes) {
                $mimes['pdf'] = 'application/pdf';
                $mimes['doc'] = 'application/msword';
                $mimes['docx'] = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                return $mimes;
            });
            
            $movefile = wp_handle_upload($uploadedfile, $upload_overrides);
            
            if ($movefile && !isset($movefile['error'])) {
                $resume_info = "\nResume: " . $movefile['url'];
            } else {
                // Resume upload failed but continue with form submission
                $resume_info = "\nResume: Upload failed - " . (isset($movefile['error']) ? $movefile['error'] : 'Unknown error');
            }
        }
        
        // Prepare email to admin
        $to = get_option('admin_email');
        $subject = 'New Career Application - ' . $position . ' - ' . get_bloginfo('name');
        
        $message = "New career application received:\n\n";
        $message .= "Name: " . $name . "\n";
        $message .= "Email: " . $email . "\n";
        $message .= "Phone: " . $phone . "\n";
        $message .= "Position: " . $position . "\n";
        $message .= "Cover Letter:\n" . $coverLetter . "\n";
        $message .= $resume_info;
        
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
            'Reply-To: ' . $name . ' <' . $email . '>'
        );
        
        // Save to database
        global $wpdb;
        $table_name = $wpdb->prefix . 'ashtech_career_submissions';
        
        $resume_url = '';
        if (isset($movefile['url'])) {
            $resume_url = $movefile['url'];
        }
        
        $inserted = $wpdb->insert(
            $table_name,
            array(
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'position' => $position,
                'cover_letter' => $coverLetter,
                'resume_url' => $resume_url,
                'submitted_at' => current_time('mysql')
            ),
            array('%s', '%s', '%s', '%s', '%s', '%s', '%s')
        );
        
        // Send email (will fail on localhost but that's ok)
        wp_mail($to, $subject, $message, $headers);
        
        // Always show success if data was saved
        if ($inserted !== false) {
            wp_send_json_success(array('message' => 'Thank you for your application! We will review it and get back to you soon.'));
        } else {
            wp_send_json_error(array('message' => 'Sorry, there was an error saving your application. Please try again.'));
        }
    } catch (Exception $e) {
        error_log('Career form error: ' . $e->getMessage());
        wp_send_json_error(array('message' => 'Sorry, there was an error. Error: ' . $e->getMessage()));
    }
}
add_action('wp_ajax_ashtech_career_form', 'ashtech_handle_career_form');
add_action('wp_ajax_nopriv_ashtech_career_form', 'ashtech_handle_career_form');

/**
 * Add admin menu for form submissions
 */
function ashtech_add_admin_menu() {
    add_menu_page(
        'Ashtech Forms',
        'Ashtech Forms',
        'manage_options',
        'ashtech-forms',
        'ashtech_display_submissions',
        'dashicons-email',
        30
    );
    
    add_submenu_page(
        'ashtech-forms',
        'Contact Submissions',
        'Contact Forms',
        'manage_options',
        'ashtech-forms',
        'ashtech_display_submissions'
    );
    
    add_submenu_page(
        'ashtech-forms',
        'Career Submissions',
        'Career Forms',
        'manage_options',
        'ashtech-career-forms',
        'ashtech_display_career_submissions'
    );
}
add_action('admin_menu', 'ashtech_add_admin_menu');

/**
 * Display contact form submissions
 */
function ashtech_display_submissions() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'ashtech_contact_submissions';
    
    $submissions = $wpdb->get_results("SELECT * FROM $table_name ORDER BY submitted_at DESC");
    
    ?>
    <div class="wrap">
        <h1>Contact Form Submissions</h1>
        <p>Total submissions: <strong><?php echo count($submissions); ?></strong></p>
        
        <?php if ($submissions): ?>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Project</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($submissions as $submission): ?>
                        <tr>
                            <td><?php echo $submission->id; ?></td>
                            <td><?php echo esc_html($submission->name); ?></td>
                            <td><a href="mailto:<?php echo esc_attr($submission->email); ?>"><?php echo esc_html($submission->email); ?></a></td>
                            <td><?php echo esc_html($submission->phone); ?></td>
                            <td><?php echo esc_html($submission->city); ?></td>
                            <td><?php echo esc_html($submission->project); ?></td>
                            <td><?php echo esc_html(substr($submission->message, 0, 100)) . (strlen($submission->message) > 100 ? '...' : ''); ?></td>
                            <td><?php echo date('M d, Y H:i', strtotime($submission->submitted_at)); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No submissions yet.</p>
        <?php endif; ?>
    </div>
    <?php
}

/**
 * Display career form submissions
 */
function ashtech_display_career_submissions() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'ashtech_career_submissions';
    
    $submissions = $wpdb->get_results("SELECT * FROM $table_name ORDER BY submitted_at DESC");
    
    ?>
    <div class="wrap">
        <h1>Career Form Submissions</h1>
        <p>Total applications: <strong><?php echo count($submissions); ?></strong></p>
        
        <?php if ($submissions): ?>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Position</th>
                        <th>Cover Letter</th>
                        <th>Resume</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($submissions as $submission): ?>
                        <tr>
                            <td><?php echo $submission->id; ?></td>
                            <td><?php echo esc_html($submission->name); ?></td>
                            <td><a href="mailto:<?php echo esc_attr($submission->email); ?>"><?php echo esc_html($submission->email); ?></a></td>
                            <td><?php echo esc_html($submission->phone); ?></td>
                            <td><strong><?php echo esc_html($submission->position); ?></strong></td>
                            <td><?php echo esc_html(substr($submission->cover_letter, 0, 100)) . (strlen($submission->cover_letter) > 100 ? '...' : ''); ?></td>
                            <td>
                                <?php if ($submission->resume_url): ?>
                                    <a href="<?php echo esc_url($submission->resume_url); ?>" target="_blank">Download Resume</a>
                                <?php else: ?>
                                    No resume
                                <?php endif; ?>
                            </td>
                            <td><?php echo date('M d, Y H:i', strtotime($submission->submitted_at)); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No applications yet.</p>
        <?php endif; ?>
    </div>
    <?php
}

/**
 * Test form handlers - Add ?ashtech_test=1 to any page URL to test
 */
function ashtech_test_forms() {
    if (isset($_GET['ashtech_test']) && $_GET['ashtech_test'] == '1') {
        echo '<h2>Ashtech Forms Test</h2>';
        echo '<p><strong>AJAX URL:</strong> ' . admin_url('admin-ajax.php') . '</p>';
        echo '<p><strong>Admin Email:</strong> ' . get_option('admin_email') . '</p>';
        echo '<p><strong>Contact Form Action:</strong> ashtech_contact_form</p>';
        echo '<p><strong>Career Form Action:</strong> ashtech_career_form</p>';
        
        // Test if actions are registered
        echo '<p><strong>Contact Handler Registered:</strong> ' . (has_action('wp_ajax_ashtech_contact_form') ? 'YES ✅' : 'NO ❌') . '</p>';
        echo '<p><strong>Career Handler Registered:</strong> ' . (has_action('wp_ajax_ashtech_career_form') ? 'YES ✅' : 'NO ❌') . '</p>';
        
        // Test email configuration
        echo '<h3>Testing Email Function:</h3>';
        $test_email = wp_mail(
            get_option('admin_email'),
            'Ashtech Forms Test Email',
            'This is a test email from Ashtech Pages Blocks plugin. If you receive this, email is working!',
            array('Content-Type: text/plain; charset=UTF-8')
        );
        echo '<p><strong>Test Email Sent:</strong> ' . ($test_email ? 'YES ✅ (Check your inbox)' : 'NO ❌ (Email not configured)') . '</p>';
        
        if (!$test_email) {
            echo '<div style="background: #fff3cd; padding: 20px; border: 1px solid #ffc107; margin-top: 20px;">';
            echo '<h3>⚠️ Email Not Working on Localhost</h3>';
            echo '<p><strong>This is normal!</strong> Localhost cannot send emails without SMTP configuration.</p>';
            echo '<p><strong>Solutions:</strong></p>';
            echo '<ul>';
            echo '<li>Install <strong>WP Mail SMTP</strong> plugin</li>';
            echo '<li>Or use <strong>MailHog</strong> (local email catcher)</li>';
            echo '<li>Or test on production server where emails work</li>';
            echo '</ul>';
            echo '<p><strong>Forms still work!</strong> Data is processed, just emails don\'t send on localhost.</p>';
            echo '</div>';
        }
        
        exit;
    }
}
add_action('init', 'ashtech_test_forms');
